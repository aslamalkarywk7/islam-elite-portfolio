import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, subject, message } = body

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "الرجاء ملء جميع الحقول المطلوبة" },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "البريد الإلكتروني غير صحيح" },
        { status: 400 }
      )
    }

    console.log("[v0] New contact message:", { fullName, email, phone, subject, message })

    return NextResponse.json({
      success: true,
      message: "تم إرسال رسالتك بنجاح، سنرد عليك في أقرب وقت ممكن",
      ticketId: `MSG-${Date.now().toString(36).toUpperCase()}`,
    })
  } catch (error) {
    console.log("[v0] Contact error:", error)
    return NextResponse.json(
      { success: false, error: "حدث خطأ، الرجاء المحاولة لاحقًا" },
      { status: 500 }
    )
  }
}
