// Vercel Function for Contact Form Delivery supporting both Node.js & Web Request/Response runtimes
export default async function handler(req: any, res?: any) {
  const method = req.method || 'GET';
  
  if (method !== 'POST') {
    const errorBody = { success: false, error: 'Method Not Allowed. Only POST requests are permitted.' };
    if (res && typeof res.status === 'function') {
      return res.status(405).json(errorBody);
    }
    return new Response(JSON.stringify(errorBody), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    let payload = req.body;
    
    // If Web standard Request object (e.g. Edge runtime or Node without pre-parsed body)
    if (!payload && typeof req.json === 'function') {
      try {
        payload = await req.json();
      } catch {
        payload = {};
      }
    } else if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch {
        payload = {};
      }
    }

    const { name, email, subject, projectType, message, honeypot } = payload || {};

    // 1. Anti-bot honeypot check
    if (honeypot) {
      const resp = { success: false, error: 'Spam submission detected.' };
      if (res && typeof res.status === 'function') return res.status(400).json(resp);
      return new Response(JSON.stringify(resp), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // 2. Input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      const resp = { success: false, error: 'Please provide a valid full name (minimum 2 characters).' };
      if (res && typeof res.status === 'function') return res.status(400).json(resp);
      return new Response(JSON.stringify(resp), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      const resp = { success: false, error: 'Please provide a valid email address.' };
      if (res && typeof res.status === 'function') return res.status(400).json(resp);
      return new Response(JSON.stringify(resp), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      const resp = { success: false, error: 'Please enter a detailed message (minimum 10 characters).' };
      if (res && typeof res.status === 'function') return res.status(400).json(resp);
      return new Response(JSON.stringify(resp), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      subject: (subject || 'New Enterprise Inquiry').trim().slice(0, 150),
      projectType: (projectType || 'General Consultation').trim().slice(0, 50),
      message: message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
    };

    // Forward to configured webhook (Discord/Slack/Email gateway) if present
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

    const successResponse = {
      success: true,
      message: 'Transmission successfully received. Martin Lourduraj / CSVS IT Tech will respond within 24 hours.',
      data: {
        timestamp: sanitizedData.timestamp,
        recipient: 'contact@csvsittech.in',
      },
    };

    if (res && typeof res.status === 'function') {
      return res.status(200).json(successResponse);
    }
    return new Response(JSON.stringify(successResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    const errResp = {
      success: false,
      error: `Transmission processing notice: ${err?.message || 'Please reach out directly to contact@csvsittech.in'}`,
    };
    if (res && typeof res.status === 'function') {
      return res.status(500).json(errResp);
    }
    return new Response(JSON.stringify(errResp), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
