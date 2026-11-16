import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";
import { netlifyFormsAvailable, submitNetlifyForm } from "@/lib/netlify-forms";

/** Callback requests from /contact. Delivered by Resend to ESTIMATING_EMAIL
 *  (services@woola.ca by default). Without RESEND_API_KEY the form tells the
 *  visitor to phone dispatch instead of pretending it sent. */
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const email = String(form.get("email") || "").trim();
  const notes = String(form.get("notes") || "").trim();
  // Honeypot: real visitors never see or fill this field.
  if (String(form.get("company") || "").trim()) return NextResponse.json({ ok: true });

  if (!name || !phone || !notes) {
    return NextResponse.json({ message: "Name, phone and a short note are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ESTIMATING_EMAIL || "services@woola.ca";
  if (!apiKey) {
    // No Resend yet: deliver through Netlify Forms (notification email set in Netlify).
    if (netlifyFormsAvailable()) {
      const ok = await submitNetlifyForm("contact", { name, phone, email, notes, page: "woola.ca/contact" });
      if (ok) return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { message: `The callback form isn't connected yet. Please call ${site.phone} or email ${site.email}.` },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Woola Website <no-reply@woola.ca>",
      to: [to],
      ...(email ? { reply_to: email } : {}),
      subject: `Callback request: ${name}`,
      text: [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email || "(not given)"}`, "", notes, "", `Sent from woola.ca/contact`].join("\n"),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: `Could not send right now. Please call ${site.phone}.` }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
