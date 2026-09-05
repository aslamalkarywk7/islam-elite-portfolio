import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, role, city, projectDescription } = body

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "الرجاء ملء جميع الحقول المطلوبة" },
        { status: 400 }
      )
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "البريد الإلكتروني غير صحيح" },
        { status: 400 }
      )
    }

    // In production: save to database, send to CRM, send welcome email, etc.
    console.log("[v0] New registration:", { fullName, email, phone, role, city, projectDescription })

    return NextResponse.json({
      success: true,
      message: "تم استلام تسجيلك بنجاح، سيتواصل معك فريقنا قريبًا",
      referenceId: `AGS-${Date.now().toString(36).toUpperCase()}`,
    })
  } catch (error) {
    console.log("[v0] Registration error:", error)
    return NextResponse.json(
      { success: false, error: "حدث خطأ، الرجاء المحاولة لاحقًا" },
      { status: 500 }
    )
  }
}
