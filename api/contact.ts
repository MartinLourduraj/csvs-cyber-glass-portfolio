// Vercel Serverless Function for Secure Contact Submission
export default async function handler(req: any, res: any) {
  // Enforce POST method
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST requests are permitted.',
    });
  }

  try {
    const { name, email, subject, projectType, message, honeypot } = req.body || {};

    // 1. Anti-bot honeypot check (hidden field)
    if (honeypot) {
      return res.status(400).json({
        success: false,
        error: 'Spam submission detected.',
      });
    }

    // 2. Input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid full name (minimum 2 characters).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a detailed message (minimum 10 characters).',
      });
    }

    // Sanitize values
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      subject: (subject || 'New Enterprise Inquiry').trim().slice(0, 150),
      projectType: (projectType || 'General Consultation').trim().slice(0, 50),
      message: message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
    };

    // If a webhook (Discord/Slack) or Resend API key is configured in env, forward it:
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚨 **New Portfolio Inquiry Received**\n**From:** ${sanitizedData.name} (${sanitizedData.email})\n**Type:** ${sanitizedData.projectType}\n**Subject:** ${sanitizedData.subject}\n**Message:**\n${sanitizedData.message}`,
          }),
        });
      } catch (webhookErr) {
        console.error('Webhook notification delivery notice:', webhookErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Transmission successfully received. Martin Lourduraj / CSVS IT Tech will respond within 24 hours.',
      data: {
        timestamp: sanitizedData.timestamp,
        recipient: 'contact@csvsittech.in',
      },
    });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal transmission error. Please reach out directly to contact@csvsittech.in',
    });
  }
}
