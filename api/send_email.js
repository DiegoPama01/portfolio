const { Resend } = require("resend");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { to, subject, html } = req.body || {};

    if (!to || !subject || !html) {
      return res.status(400).json({ error: "Missing fields: to, subject, html" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;

    if (!apiKey) return res.status(500).json({ error: "Missing RESEND_API_KEY" });
    if (!from) return res.status(500).json({ error: "Missing RESEND_FROM" });

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return res.status(200).json({ ok: true, data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: e.message || String(e) });
  }
};
