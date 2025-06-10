import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["iftikharazka1@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
