import { Resend } from "resend";

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
      from: process.env.RESEND_FROM_EMAIL || "CMB Exports <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "exports@cmbexports.com",
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

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
