// api/send-email.js
//
// Vercel Serverless Function, runs automatically when the frontend
// calls POST /api/send-email. No separate backend hosting needed.
//
// Required Environment Variables (set in Vercel dashboard):
//   SMTP_EMAIL     -> the Gmail address sending the mail
//   SMTP_APP_PASS  -> the 16-character Gmail App Password
//   SEND_TO_EMAIL  -> where booking/enrollment enquiries should land

const nodemailer = require('nodemailer');

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { formType, fields } = req.body || {};

  if (!formType || !fields || typeof fields !== 'object') {
    return res.status(400).json({ ok: false, error: 'Missing formType or fields' });
  }

  if (!fields.name || !fields.phone) {
    return res.status(400).json({ ok: false, error: 'Name and phone are required' });
  }

  const { SMTP_EMAIL, SMTP_APP_PASS, SEND_TO_EMAIL } = process.env;

  if (!SMTP_EMAIL || !SMTP_APP_PASS || !SEND_TO_EMAIL) {
    console.error('Missing SMTP environment variables', {
      hasEmail: !!SMTP_EMAIL,
      hasPass: !!SMTP_APP_PASS,
      hasTo: !!SEND_TO_EMAIL,
    });
    return res.status(500).json({ ok: false, error: 'Server email is not configured' });
  }

  // TEMPORARY DIAGNOSTIC — remove after debugging.
  // Never logs the actual password, only safe metadata about it.
  console.log('SMTP DEBUG', {
    emailValue: SMTP_EMAIL,
    emailLength: SMTP_EMAIL.length,
    passLength: SMTP_APP_PASS.length,
    passHasSpaces: SMTP_APP_PASS.includes(' '),
    passFirstChar: SMTP_APP_PASS[0],
    passLastChar: SMTP_APP_PASS[SMTP_APP_PASS.length - 1],
    sendToValue: SEND_TO_EMAIL,
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_APP_PASS,
    },
  });

  const subject =
    formType === 'student'
      ? `New Masterclass Enquiry - ${fields.name}`
      : `New Booking Enquiry - ${fields.name}`;

  const rows = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#6B1A3A;border-bottom:1px solid #eee;white-space:nowrap;">
            ${escapeHtml(key)}
          </td>
          <td style="padding:8px 12px;color:#333;border-bottom:1px solid #eee;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join('');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1A0A10;">
      <div style="background:#3D0B20;padding:20px 24px;">
        <h2 style="color:#E8C97A;margin:0;font-weight:400;">
          ${formType === 'student' ? 'Masterclass Enquiry' : 'Booking Enquiry'}
        </h2>
        <p style="color:#C9A84C;margin:4px 0 0;font-size:13px;">Heena'z Makeovers website</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">
        ${rows}
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#888;">
        <p style="margin:0;">This enquiry was submitted through the contact form at the Heena'z Makeovers website.</p>
        <p style="margin:6px 0 0;">Heena'z Makeovers &middot; Jawahar Chowk, Fatehabad, Haryana 125050</p>
      </div>
    </div>
  `;

  // Plain-text fallback. Emails with only an HTML body, and no text
  // alternative, are flagged more often by spam filters.
  const text = [
    formType === 'student' ? 'New Masterclass Enquiry' : 'New Booking Enquiry',
    '',
    ...Object.entries(fields)
      .filter(([, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `${key}: ${value}`),
    '',
    'Submitted through the contact form at the Heena\'z Makeovers website.',
    'Heena\'z Makeovers, Jawahar Chowk, Fatehabad, Haryana 125050',
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `"Heena'z Makeovers" <${SMTP_EMAIL}>`,
      to: SEND_TO_EMAIL,
      replyTo: fields.email ? fields.email : `"Heena'z Makeovers" <${SMTP_EMAIL}>`,
      subject,
      text,
      html,
      headers: {
        'X-Priority': '1',
        'X-Mailer': 'Heenaz-Makeovers-Website',
      },
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email', detail: err.message });
  }
};