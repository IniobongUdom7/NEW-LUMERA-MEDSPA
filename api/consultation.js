const allowedOrigins = new Set(["https://new-lumera-medspa-mu.vercel.app"]);

function normalizePhone(value) {
  const raw = String(value || "").trim();
  const digits = raw.replace(/\D/g, "");
  if (/^\+\d{8,15}$/.test(raw.replace(/[\s().-]/g, ""))) return "+" + digits;
  if (/^1\d{10}$/.test(digits)) return "+" + digits;
  if (/^\d{10}$/.test(digits)) return "+1" + digits;
  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const origin = req.headers.origin;
  if (origin && !allowedOrigins.has(origin) && !/^https:\/\/new-lumera-medspa-[a-z0-9-]+\.vercel\.app$/.test(origin)) {
    return res.status(403).json({ error: "Origin not allowed" });
  }
  if (!process.env.BREVO_API_KEY) return res.status(503).json({ error: "Lead service is not configured" });

  try {
    const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    if (data.website) return res.status(200).json({ ok: true });
    if (JSON.stringify(data).length > 2500) return res.status(413).json({ error: "Request too large" });

    const name = String(data.name || "").trim().slice(0, 120);
    const email = String(data.email || "").trim().toLowerCase();
    const phone = normalizePhone(data.phone);
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return res.status(400).json({ error: "Please check your name and email address." });
    }
    if (!phone) {
      return res.status(400).json({ error: "Enter a US phone number (10 digits) or an international number starting with + and country code." });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": process.env.BREVO_API_KEY },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name, SMS: phone },
        listIds: [3],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      let brevoError = {};
      try { brevoError = await response.json(); } catch {}
      // Log only Brevo's machine-readable error code, not contact data or credentials.
      console.error("Brevo contact creation failed", response.status, "code:", String(brevoError.code || "unknown").slice(0, 80));
      return res.status(502).json({ error: "We couldn't submit your request right now. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed", err?.name || "UnknownError");
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
