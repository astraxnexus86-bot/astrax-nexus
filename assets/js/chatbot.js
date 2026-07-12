// Nexi — Local Knowledge-Base Chatbot for AstraX Nexus
(function () {
  const KB = [
    {
      keys: ['hello', 'hi ', 'hi!', 'hey', 'howdy', 'sup ', 'greetings'],
      answer: "Hi there 👋 I'm Nexi, the AstraX Nexus assistant. Ask me about our services, pricing, timelines, or how to get started."
    },
    {
      keys: ['service', 'offer', 'do you do', 'what do you'],
      answer: "AstraX Nexus offers:\n\n• Website Development (marketing sites, landing pages)\n• Web Applications (dashboards, portals, SaaS)\n• Branding & Graphic Design\n• Basic SEO\n• Digital Transformation\n• Social Media Management\n• AI Tools & AI Assistants\n\nSee the full breakdown on the Services page."
    },
    {
      keys: ['price', 'pricing', 'cost', 'how much', 'quote', 'budget', 'rate'],
      answer: "We use two models:\n\n1) Monthly retainers — ongoing design, dev & support\n2) Project pricing — one-time builds (websites, brands, apps)\n\nLanding pages start around R4,500. Full brand identity from R6,500. Custom web apps are quoted per scope. Head to the Pricing page for details, or share your idea on Contact for a free quote."
    },
    {
      keys: ['website cost', 'web cost', 'site cost', 'website price'],
      answer: "Landing pages start around R4,500. A full multi-page marketing website is typically R12,000–R25,000 depending on scope. Reach out via Contact for a tailored quote."
    },
    {
      keys: ['app cost', 'application cost', 'web app'],
      answer: "Custom web applications are quoted per scope after a discovery call. Typical builds run 4–12 weeks. Send us the idea on Contact for an accurate estimate."
    },
    {
      keys: ['timeline', 'how long', 'turnaround', 'delivery', 'when', 'duration'],
      answer: "Indicative timelines:\n\n• Landing pages: 1–2 weeks\n• Full websites: 2–4 weeks\n• Web applications: 4–12 weeks\n• Brand identity: ~2 weeks\n\nRush deliveries are possible — ask us."
    },
    {
      keys: ['start', 'begin', 'get started', 'how do i', 'onboard', 'process'],
      answer: "Getting started is easy:\n\n1) Share your idea via the Contact form\n2) We schedule a free discovery call\n3) You receive a proposal & quote\n4) We build, review, and launch\n\nHead over to the Contact page whenever you're ready."
    },
    {
      keys: ['contact', 'reach', 'phone', 'call', 'email', 'whatsapp'],
      answer: "You can reach us at:\n\n📞 067 725 1568 (WhatsApp available)\n✉️ astraxnexus86@gmail.com\n📍 Limpopo, South Africa\n\nOr fill in the Contact form and we'll reply within 24 hours."
    },
    {
      keys: ['hour', 'open', 'available', 'business hours', 'when open'],
      answer: "Our business hours are Monday–Friday, 08:00–17:00 SAST. We reply to all messages within 24 hours."
    },
    {
      keys: ['location', 'where', 'based', 'address', 'country'],
      answer: "We're based in Limpopo, South Africa 🇿🇦, and work with clients across South Africa and internationally — fully remote-friendly."
    },
    {
      keys: ['owner', 'founder', 'owen', 'ceo', 'who runs', 'who founded'],
      answer: "AstraX Nexus was founded by Owen Gwaka — he leads web development, AI, and strategy. He's joined by co-founders William (Marketing), Molatelo Thoka (Marketing), and Lebo (Graphic Design). Meet the team on the About page."
    },
    {
      keys: ['team', 'who are you', 'staff', 'about'],
      answer: "We're a small, focused South African studio led by founder Owen Gwaka, with co-founders William & Molatelo Thoka driving marketing, and Lebo heading up graphic design. Every project is handcrafted."
    },
    {
      keys: ['seo', 'search engine', 'ranking', 'google rank'],
      answer: "We offer Basic SEO on every website we build — semantic HTML, meta tags, sitemaps, and page-speed optimisation. Deeper SEO campaigns are quoted per scope."
    },
    {
      keys: ['ai', 'chatbot', 'assistant', 'automation', 'gpt'],
      answer: "Yes! We build custom AI tools and assistants for businesses — customer-support chatbots, internal knowledge assistants, and workflow automations. Chat with us on Contact to scope your use case."
    },
    {
      keys: ['brand', 'logo', 'identity', 'design'],
      answer: "Our Branding & Design service covers logo design, brand identity systems, colour & typography, and brand guidelines. Full brand kits from R6,500."
    },
    {
      keys: ['social', 'instagram', 'facebook', 'tiktok', 'content'],
      answer: "We handle Social Media Management: content creation, scheduling, and channel growth across Instagram, Facebook, TikTok, and LinkedIn. Retainers from R3,500/month."
    },
    {
      keys: ['portfolio', 'work', 'projects', 'case study', 'sample'],
      answer: "You can browse our recent work on the Portfolio page — websites, brands, apps, and AI tools we've shipped."
    },
    {
      keys: ['payment', 'pay', 'invoice', 'deposit'],
      answer: "We usually work on a 50% deposit up front and 50% on delivery. Retainers are billed monthly. All payments via EFT or card."
    },
    {
      keys: ['refund', 'guarantee', 'money back'],
      answer: "We work in milestones — you approve each phase before we move forward, so there are no surprises. If we can't meet an agreed scope, we discuss it openly."
    },
    {
      keys: ['host', 'domain', 'hosting'],
      answer: "We can set up hosting and domains for you (or work with your existing setup). Managed hosting is available as part of our retainer plans."
    },
    {
      keys: ['thank', 'thanks', 'cheers'],
      answer: "You're very welcome! Anything else I can help you with? 😊"
    },
    {
      keys: ['bye', 'goodbye', 'later'],
      answer: "Thanks for stopping by! When you're ready, head to the Contact page and we'll take it from there. 👋"
    },
  ];

  const FALLBACK = "I don't have a direct answer for that yet — but Owen can help. Please share your name and email on the Contact page (or email astraxnexus86@gmail.com) and we'll follow up within 24 hours.";

  const SUGGESTIONS = [
    "What services do you offer?",
    "How much does a website cost?",
    "How do I get started?",
    "What's your typical timeline?",
  ];

  function findAnswer(text) {
    const t = ' ' + text.toLowerCase() + ' ';
    let best = null; let bestScore = 0;
    for (const entry of KB) {
      let score = 0;
      for (const k of entry.keys) if (t.includes(k)) score += k.length;
      if (score > bestScore) { bestScore = score; best = entry; }
    }
    return best ? best.answer : FALLBACK;
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function render(body, role, text) {
    const m = el('div', 'msg ' + role, escapeHtml(text));
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }

  function renderSuggestions(body, onPick) {
    const wrap = el('div', 'chat-suggestions');
    SUGGESTIONS.forEach(s => {
      const b = el('button', null, s);
      b.type = 'button';
      b.addEventListener('click', () => { wrap.remove(); onPick(s); });
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
  }

  function renderTyping(body) {
    const t = el('div', 'typing');
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
    return t;
  }

  function init() {
    const body = document.getElementById('chat-body');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');
    if (!body || !form || !input) return;

    render(body, 'bot', "Hi, I'm Nexi 👋 — the AstraX Nexus assistant. Ask me about our services, pricing, timelines, or how to get started.");

    let firstAsk = true;
    const handle = (text) => {
      const clean = (text || '').trim();
      if (!clean) return;
      render(body, 'user', clean);
      const typing = renderTyping(body);
      setTimeout(() => {
        typing.remove();
        render(body, 'bot', findAnswer(clean));
      }, 500 + Math.random() * 400);
    };

    renderSuggestions(body, (s) => { firstAsk = false; handle(s); });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      if (firstAsk) {
        firstAsk = false;
        const sug = body.querySelector('.chat-suggestions');
        if (sug) sug.remove();
      }
      handle(v);
    });
  }

  window.NexiChat = { init };
})();
