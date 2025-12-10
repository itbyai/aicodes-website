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

    // 这里可以集成邮件服务（Resend, SendGrid等）
    // 目前只是记录到控制台
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: 发送邮件通知
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: email,
    //   subject: `Contact Form: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // })

    return NextResponse.json({ message: '消息已发送' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: '服务器错误，请稍后再试' },
      { status: 500 }
    )
  }
}
