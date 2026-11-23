# NOVEA AI — Future Backend Integration & Architecture Specification

## Overview

**NOVEA** is an original robotic AI guardian and intelligent assistant designed for Martin Lourduraj's portfolio and CSVS IT Tech enterprise platforms.

In V3.0, NOVEA provides a cinematic 3D robotic intro, interactive arc reactor activation, nanotech suit-up transition, and a floating future AI access key. The modular interfaces in `src/ai/` establish clean contracts for future serverless backend integration without exposing API keys or credentials in client-side code.

---

## Architecture Principles

1. **Strict Client-Side Security:**
   - No paid API keys, model credentials, or webhook secrets are stored in the client-side bundle.
   - All future conversational inferences, embeddings, and context parsing must flow through a secure serverless proxy endpoint (e.g., `/api/novea-chat`).

2. **100% Healthcare Data Sovereignty Doctrine:**
   - In accordance with CSVS IT Tech's core security philosophy, user interactions and hospital ERP inquiries are never forwarded to third-party public models for unsolicited training.

3. **Modular Expansion Providers:**
   - `INoveaChatProvider`: Context-aware natural language understanding and responses.
   - `INoveaVoiceProvider`: Multilingual voice generation (English and Tamil).
   - `INoveaActionsProvider`: Deterministic client-side navigation, theme toggling, and interactive project modal triggers.
   - `INoveaMemoryProvider`: Client-side consent-driven local storage memory for audio, theme, and intro replay preferences.

---

## Future Serverless Endpoint Specification

### `POST /api/novea-chat`
```json
// Request
{
  "message": "Can you explain the architecture of CSVS Nova HMS?",
  "sessionToken": "authenticated-session-token",
  "language": "en"
}

// Response
{
  "reply": "CSVS Nova HMS is an enterprise hospital management suite engineered with Django, React, PostgreSQL, and AWS, featuring OP/IP workflows and 100% data sovereignty.",
  "suggestedActions": ["navigate.projects", "view.hms_spec"],
  "timestamp": 1795432000000
}
```

---

© 2026 Martin Lourduraj · CSVS IT Tech
