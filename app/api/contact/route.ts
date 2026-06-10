import { Resend } from "resend";

const COMPANY_EMAIL =
  process.env.COMPANY_EMAIL || "cmb@cmbfoodsandgrains.com";
const RESEND_FROM_EMAIL = "CMB Exports <onboarding@resend.dev>";

type ContactPayload = {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  country?: string;
  phone?: string;
  product?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;
    const required = [
      data.companyName,
      data.contactPerson,
      data.email,
      data.country,
      data.phone,
      data.product,
      data.message,
    ];

    if (required.some((value) => !value?.trim())) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email!)) {
      return Response.json({ error: "Enter a valid email." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");
      return Response.json(
        { error: "Email service is not configured." },
        { status: 503 },
      );
    }

    const clean = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        escapeHtml(value?.trim() || ""),
      ]),
    ) as Record<keyof ContactPayload, string>;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: COMPANY_EMAIL,
      replyTo: data.email,
      subject: `Rice export inquiry from ${data.companyName}`,
      html: `
        <h2>New rice export inquiry</h2>
        <p><strong>Company:</strong> ${clean.companyName}</p>
        <p><strong>Contact:</strong> ${clean.contactPerson}</p>
        <p><strong>Email:</strong> ${clean.email}</p>
        <p><strong>Phone:</strong> ${clean.phone}</p>
        <p><strong>Country:</strong> ${clean.country}</p>
        <p><strong>Product:</strong> ${clean.product}</p>
        <p><strong>Requirement:</strong><br>${clean.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Unable to send your inquiry right now." },
        { status: 502 },
      );
    }

    const { error: autoReplyError } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: data.email!,
      replyTo: COMPANY_EMAIL,
      subject: "We received your rice export inquiry",
      html: `
        <p>Dear ${clean.contactPerson},</p>
        <p>Thank you for contacting CMB Exports. We have received your rice export inquiry and our team will respond shortly.</p>
        <p>Regards,<br>
        CMB Exports Team<br>
        M/s. C.M. Badami and Sons<br>
        📧 cmb@cmbfoodsandgrains.com<br>
        📞 +91 78927 55421</p>
      `,
    });

    if (autoReplyError) {
      console.error("Resend auto-reply error:", autoReplyError);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
