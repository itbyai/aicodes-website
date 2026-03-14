import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      )
    }

    // 获取Knack配置
    const KNACK_APPLICATION_ID = process.env.KNACK_APPLICATION_ID
    const KNACK_API_KEY = process.env.KNACK_API_KEY
    const KNACK_OBJECT_KEY = process.env.KNACK_OBJECT_KEY

    if (!KNACK_APPLICATION_ID || !KNACK_API_KEY || !KNACK_OBJECT_KEY) {
      console.error('Knack configuration missing')
      return NextResponse.json(
        { error: '服务器配置错误' },
        { status: 500 }
      )
    }

    // 准备发送到Knack的数据
    // 根据Knack对象字段类型映射：
    // - field_17: name (姓名字段)
    // - field_18: email (邮箱字段)
    // - field_21: short_text (主题字段)
    // - field_49: rich_text (消息字段)
    // Knack 的 Name 字段更可靠地展示 first/last/full，因此我们从输入中拆分姓名。
    const nameParts = name.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ')

    const knackData = {
      field_17: {
        first: firstName,
        last: lastName,
        title: name,
      },
      field_18: email,   // 邮箱字段
      field_21: subject, // 主题字段
      field_49: message, // 消息字段
    }

    // 发送数据到Knack
    const response = await fetch(`https://api.knack.com/v1/objects/${KNACK_OBJECT_KEY}/records`, {
      method: 'POST',
      headers: {
        'X-Knack-Application-Id': KNACK_APPLICATION_ID,
        'X-Knack-REST-API-Key': KNACK_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(knackData),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Knack API error:', response.status, errorData)
      return NextResponse.json(
        { error: '提交失败，请稍后再试' },
        { status: 500 }
      )
    }

    const result = await response.json()
    console.log('Contact form submitted to Knack:', result)

    return NextResponse.json({ message: '消息已发送' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: '服务器错误，请稍后再试' },
      { status: 500 }
    )
  }
}
