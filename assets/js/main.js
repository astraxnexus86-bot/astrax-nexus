// AstraX Nexus — Shared UI Logic

(function () {
  // Inject navbar & footer & chat widget on every page
  const pathname = window.location.pathname.split('/').pop() || 'index.html';

  const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services' },
    { href: 'portfolio.html', label: 'Portfolio' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'contact.html', label: 'Contact' },
    { href: 'dashboard.html', label: 'Dashboard' },
  ];
  const dashboardUnlocked = sessionStorage.getItem('astrax-dashboard-auth') === 'granted';
  const visibleNavLinks = dashboardUnlocked
    ? NAV_LINKS
    : NAV_LINKS.filter(link => link.href !== 'dashboard.html');

  // ---------- NAVBAR ----------
  const navHost = document.getElementById('site-nav');
  if (navHost) {
    const linksHtml = visibleNavLinks.map(l => {
      const active = l.href === pathname ? ' active' : '';
      return `<li><a class="nav-link${active}" href="${l.href}">${l.label}</a></li>`;
    }).join('');
    const mobileLinksHtml = visibleNavLinks.map(l => {
      const active = l.href === pathname ? ' active' : '';
      return `<li><a class="${active}" href="${l.href}">${l.label}</a></li>`;
    }).join('');

    navHost.innerHTML = `
      <header class="navbar" id="navbar">
        <div class="container-x">
          <div class="nav-inner">
            <a class="nav-brand" href="index.html">
              <img src="assets/images/logo.png" alt="AstraX Nexus" loading="lazy" decoding="async" />
              <span class="nav-brand-text"><span>AstraX</span> <span class="gold-text">Nexus</span></span>
            </a>
            <ul class="nav-links">${linksHtml}</ul>
            <a class="btn btn-gold nav-cta" href="contact.html">Get in touch</a>
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div class="mobile-menu" id="mobile-menu">
          <div class="container-x">
            <ul>${mobileLinksHtml}
              <li style="padding-top:0.5rem"><a class="btn btn-gold" href="contact.html">Get in touch</a></li>
            </ul>
          </div>
        </div>
      </header>
    `;

    const nav = document.getElementById('navbar');
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // ---------- FOOTER ----------
  const footerHost = document.getElementById('site-footer');
  if (footerHost) {
    const year = new Date().getFullYear();
    footerHost.innerHTML = `
      <footer class="footer">
        <div class="container-x footer-grid">
          <div>
            <div class="nav-brand">
              <img src="assets/images/logo.png" alt="AstraX Nexus" loading="lazy" decoding="async" />
              <span style="font-family:var(--font-display); font-size:1.125rem;">AstraX <span class="gold-text">Nexus</span></span>
            </div>
            <p class="text-muted" style="margin-top:1rem; font-size:0.875rem; max-width:28rem; line-height:1.65;">
              A South African technology &amp; creative studio crafting premium digital products —
              websites, apps, branding, and AI tools for businesses that value quality.
            </p>
            <div class="socials">
              <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            </div>
          </div>
          <div>
            <h4 class="gold-text">Explore</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="gold-text">Contact</h4>
            <ul>
              <li>📞 067 725 1568</li>
              <li>✉️ astraxnexus86@gmail.com</li>
              <li>📍 Limpopo, South Africa</li>
            </ul>
          </div>
        </div>
        <div class="container-x footer-bottom">
          <p>© ${year} AstraX Nexus. Crafted with care.</p>
          <p>Founded by Owen Gwaka</p>
        </div>
      </footer>
    `;
  }

  // ---------- CHAT WIDGET ----------
  const chatHost = document.getElementById('site-chat');
  if (chatHost) {
    chatHost.innerHTML = `
      <button class="chat-toggle" id="chat-toggle" aria-label="Open chat">
        <svg id="chat-icon-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <svg id="chat-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="chat-panel" id="chat-panel" role="dialog" aria-label="Nexi chat">
        <div class="chat-head">
          <div class="chat-avatar">✨</div>
          <div>
            <div class="name">Nexi · AstraX Assistant</div>
            <div class="status"><span class="dot"></span> Online now</div>
          </div>
        </div>
        <div class="chat-body" id="chat-body"></div>
        <form class="chat-form" id="chat-form">
          <input id="chat-input" type="text" placeholder="Ask about services, pricing…" autocomplete="off" />
          <button type="submit" aria-label="Send">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </div>
    `;

    // wire toggle
    const toggle = document.getElementById('chat-toggle');
    const panel = document.getElementById('chat-panel');
    const iOpen = document.getElementById('chat-icon-open');
    const iClose = document.getElementById('chat-icon-close');
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
      const open = panel.classList.contains('open');
      iOpen.style.display = open ? 'none' : 'block';
      iClose.style.display = open ? 'block' : 'none';
    });

    // init chatbot (defined in chatbot.js)
    if (window.NexiChat) window.NexiChat.init();
  }

  // ---------- Toast helper ----------
  window.showToast = function (msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; }, 2600);
    setTimeout(() => t.remove(), 3000);
  };

  // ---------- Animated counters ----------
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 1400;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          el.textContent = Math.round(p * target);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
  });

  // ---------- Flip cards (touch tap toggle) ----------
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // ---------- Lightbox (portfolio & gallery) ----------
  const lb = document.getElementById('lightbox');
  if (lb) {
    const lbContent = document.getElementById('lightbox-content');
    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', () => {
        const html = el.getAttribute('data-lightbox-html') || el.innerHTML;
        lbContent.innerHTML = html;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.getElementById('lightbox-close')?.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // ---------- Pricing toggle ----------
  const pricingToggle = document.getElementById('pricing-toggle');
  if (pricingToggle) {
    pricingToggle.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        pricingToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-mode');
        document.querySelectorAll('.plans-group').forEach(g => {
          g.style.display = g.getAttribute('data-mode') === mode ? '' : 'none';
        });
      });
    });
  }

  // ---------- Dashboard tabs ----------
  const dashNav = document.getElementById('dash-nav');
  if (dashNav) {
    dashNav.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        dashNav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        document.querySelectorAll('.dash-panel').forEach(p => {
          p.style.display = p.getAttribute('data-tab') === tab ? '' : 'none';
        });
      });
    });
  }

  // ---------- Contact form ----------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type=submit]');
      const original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        window.showToast("Message sent! We'll be in touch within 24 hours.");
        contactForm.reset();
        btn.textContent = original;
        btn.disabled = false;
      }, 900);
    });
  }
})();
