import { NextRequest, NextResponse } from "next/server";

const MAX_FILES = 10;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_TOTAL_BYTES = 25 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const propertyType = String(form.get("propertyType") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
  }

  const files = form.getAll("files").filter((f): f is File => f instanceof File);
  if (files.length > MAX_FILES) {
    return NextResponse.json({ message: `Maximum ${MAX_FILES} files.` }, { status: 400 });
  }
  let total = 0;
  for (const f of files) {
    if (f.size > MAX_FILE_BYTES) {
      return NextResponse.json({ message: `${f.name} is over the 8MB limit.` }, { status: 400 });
    }
    total += f.size;
  }
  if (total > MAX_TOTAL_BYTES) {
    return NextResponse.json({ message: "Attachments exceed the 25MB total limit." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ESTIMATING_EMAIL || "services@woola.ca";

  if (!apiKey) {
    return NextResponse.json(
      { message: "Uploads aren't live yet. Please call 604-800-3617 or email services@woola.ca." },
      { status: 503 }
    );
  }

  const attachments = await Promise.all(
    files.map(async (f) => ({
      filename: f.name,
      content: Buffer.from(await f.arrayBuffer()).toString("base64"),
    }))
  );

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Woola Website <no-reply@woola.ca>",
      to: [to],
      reply_to: email,
      subject: `Second Opinion request: ${name} (${propertyType})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Property type: ${propertyType}`,
        "",
        message,
        "",
        `${files.length} attachment(s).`,
      ].join("\n"),
      attachments,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Could not send right now. Please call 604-800-3617." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
