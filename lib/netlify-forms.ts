/**
 * Fallback delivery for the website forms via Netlify Forms, used when
 * RESEND_API_KEY is not configured. Netlify detects the hidden forms in
 * public/__forms.html at deploy time and emails submissions to the addresses
 * configured in Netlify → Forms → Notifications.
 */
const FORMS_PAGE = "/__forms.html";

function siteOrigin() {
  return process.env.URL || process.env.DEPLOY_PRIME_URL || "https://woola.ca";
}

export function netlifyFormsAvailable() {
  // Only meaningful when running on Netlify (URL/NETLIFY are injected there).
  return Boolean(process.env.NETLIFY || process.env.URL);
}

export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string>,
  files: { name: string; file: File }[] = []
): Promise<boolean> {
  const body = new FormData();
  body.set("form-name", formName);
  for (const [k, v] of Object.entries(fields)) body.set(k, v);
  for (const f of files) body.set(f.name, f.file, f.file.name);
  try {
    const res = await fetch(`${siteOrigin()}${FORMS_PAGE}`, { method: "POST", body });
    return res.ok;
  } catch {
    return false;
  }
}
