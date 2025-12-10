import { NextRequest, NextResponse } from 'next/server'

// 临时存储，生产环境替换为数据库
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      )
    }

    // TODO: 集成数据库或邮件服务
    console.log('New subscriber:', email)

    return NextResponse.json({ message: '订阅成功' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: '服务器错误，请稍后再试' },
      { status: 500 }
    )
  }
}
