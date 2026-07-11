import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, service, message } = body ?? {};

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // NOTE: Wire this up to an email provider (e.g. Resend, Nodemailer + SMTP,
    // or a forwarding service) using the RESEND_API_KEY / CONTACT_TO_EMAIL
    // environment variables. For now this endpoint validates and logs the
    // submission so the contact form works end-to-end out of the box.
    console.log("New contact form submission:", {
      firstName,
      lastName,
      email,
      service,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
