/* script.js
   Initialization and hooking up global behaviours.
*/

document.addEventListener('DOMContentLoaded', async function(){

  // Load header/footer components
  await loadComponents();
  
  // After navbar is loaded, populate the mega menu
  renderMegaMenu();
  renderMobileServices();

  // Render SPA/home markup (on index.html)
  if (document.getElementById('spa-root')) {
    renderSPA();
  }

  // If on separate pages, render page-specific dynamic content
  // Services page
  if (document.getElementById('services-grid')) {
    // Ensure filters area has category buttons
    const filters = document.getElementById('service-filters');
    if (filters) {
      categories.forEach(cat => {
        filters.innerHTML += `<button class="px-5 py-2 border rounded-full text-sm font-medium ml-2" onclick="filterServices('${cat}')">${cat}</button>`;
      });
    }
    // Load all services by default
    filterServices('all');
  }

  // Blog page
  if (document.getElementById('blog-grid')) {
    renderBlogGrid();
  }

  // Gallery page
  if (document.getElementById('gallery-grid')) {
    renderGallery();
  }

  // Hook up contact page form if present
  const contactForm = document.getElementById('contact-page-form');
  if(contactForm) contactForm.addEventListener('submit', handleContactForm);

  // Hook up enquiry form (modal) if present
  const enq = document.getElementById('enquiry-form');
  if(enq) enq.addEventListener('submit', handleEnquiry);

  // Start hero slider if present
  if(document.getElementById('hero-slider')) startSlideInterval();
});
// Contact overlay: toggle + accessible behavior
(function(){
  const OVERLAY_ID = 'contact-overlay';
  const TOGGLE_ID = 'overlay-toggle';
  const COLLAPSED_CLASS = 'collapsed';
  const STORAGE_KEY = 'contactOverlayCollapsed';

  function initContactOverlay(){
    const overlay = document.getElementById(OVERLAY_ID);
    const toggle = document.getElementById(TOGGLE_ID);
    if(!overlay || !toggle) return;

    // restore collapsed state from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'true') overlay.classList.add(COLLAPSED_CLASS);
      toggle.setAttribute('aria-expanded', overlay.classList.contains(COLLAPSED_CLASS) ? 'false' : 'true');
    } catch(e){ /* ignore */ }

    // toggle click
    toggle.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const nowCollapsed = overlay.classList.toggle(COLLAPSED_CLASS);
      toggle.setAttribute('aria-expanded', nowCollapsed ? 'false' : 'true');
      try { localStorage.setItem(STORAGE_KEY, nowCollapsed ? 'true' : 'false'); } catch(e){}
    });

    // keyboard: open WA on Enter when focused on wa-overlay, same for call-overlay
    const waBtn = document.getElementById('wa-overlay');
    const callBtn = document.getElementById('call-overlay');
    if(waBtn) waBtn.addEventListener('keydown', (e) => { if(e.key === 'Enter') waBtn.click(); });
    if(callBtn) callBtn.addEventListener('keydown', (e) => { if(e.key === 'Enter') callBtn.click(); });

    // close overlay if user clicks outside while expanded — not necessary but prevents accidental
    document.addEventListener('click', (ev) => {
      if (!overlay.contains(ev.target) && !overlay.classList.contains(COLLAPSED_CLASS)) {
        // keep toggle visible, collapse others
        overlay.classList.add(COLLAPSED_CLASS);
        toggle.setAttribute('aria-expanded', 'false');
        try { localStorage.setItem(STORAGE_KEY, 'true'); } catch(e){}
      }
    }, { passive: true });

    // prevent accidental page scroll when interacting on mobile (improve touch targets)
    overlay.addEventListener('touchstart', () => {}, { passive: true });
  }

  // Wait until DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactOverlay);
  } else {
    initContactOverlay();
  }
})();
/* ===== Robust language controls (paste at end of js/script.js) ===== */
(function initLanguageControls() {
  // helper: safe DOM lookup that tolerates components loaded by fetch()
  function getMenuAndToggle() {
    const label = document.getElementById('current-lang-label');
    const menu = document.getElementById('lang-menu');
    // toggle button: prefer nearest button that contains the label, else fallback
    let toggleBtn = null;
    if (label) {
      toggleBtn = label.closest('button');
    }
    if (!toggleBtn) {
      toggleBtn = document.querySelector('[data-lang-toggle]') || document.querySelector('[onclick*="toggleLangMenu"]') || document.querySelector('.lang-toggle, .lang-btn');
    }
    return { label, menu, toggleBtn };
  }

  function safeLog(msg) {
    // small helper to log without breaking page
    if (window.console && console.log) console.log('[LangControl] ' + msg);
  }

  function attachHandlers() {
    const { label, menu, toggleBtn } = getMenuAndToggle();
    if (!label) {
      safeLog('current-lang-label element not found. Make sure navbar contains <span id="current-lang-label">EN</span>');
    }
    if (!toggleBtn) {
      safeLog('Language toggle button not found. Falling back to delegated click handling.');
    }
    if (!menu) {
      safeLog('lang-menu element not found. Make sure it exists in the navbar markup with id="lang-menu".');
    }

    // Toggle behaviour (clicking the language button)
    if (toggleBtn) {
      // remove any existing handler to avoid duplicates
      toggleBtn.removeEventListener('click', toggleLangMenuLocal);
      toggleBtn.addEventListener('click', toggleLangMenuLocal);
    }

    // Delegate clicks inside the lang-menu to parse chosen language
    document.removeEventListener('click', langMenuDelegator);
    document.addEventListener('click', langMenuDelegator);
  }

  function toggleLangMenuLocal(e) {
    // open/close the menu safely
    const menu = document.getElementById('lang-menu');
    if (!menu) return;
    e.preventDefault();
    menu.classList.toggle('hidden');
    // update aria-expanded on the toggle if present
    const toggle = e.currentTarget;
    if (toggle) {
      const expanded = !(menu.classList.contains('hidden'));
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
  }

  function langMenuDelegator(e) {
    // If click inside the lang-menu, try to extract language code from element
    const button = e.target.closest('#lang-menu button, #lang-menu [data-lang]');
    if (!button) return;

    // prefer explicit data-lang attribute if set
    let lang = button.getAttribute('data-lang');
    if (!lang) {
      // try to parse from onclick attribute like changeLang('en')
      const onclick = button.getAttribute('onclick') || '';
      const m = onclick.match(/changeLang\((?:'|")?([a-z]{2})(?:'|")?\)/i);
      if (m && m[1]) lang = m[1];
    }

    if (!lang) {
      // try to infer from button text (e.g., 'English', 'मराठी', 'हिंदी')
      const txt = (button.innerText || button.textContent || '').trim().toLowerCase();
      if (txt.startsWith('en') || txt.includes('english')) lang = 'en';
      else if (txt.includes('mr') || txt.includes('मराठी')) lang = 'mr';
      else if (txt.includes('hi') || txt.includes('हिंदी')) lang = 'hi';
    }

    if (lang) {
      e.preventDefault();
      // call the existing changeLang function if available
      if (typeof changeLang === 'function') {
        try {
          changeLang(lang);
        } catch (err) {
          console.error('[LangControl] changeLang threw an error:', err);
        }
      } else {
        console.warn('[LangControl] changeLang() not defined. Skipping.');
      }
      // hide the menu after selection
      const menu = document.getElementById('lang-menu');
      if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
      // update toggle aria state if present
      const toggle = document.querySelector('[aria-controls="lang-menu"], [onclick*="toggleLangMenu"], button:has(#current-lang-label)');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  }

  // Keep the visible language label synced with currentLang variable (if it exists)
  function syncLabel() {
    const lbl = document.getElementById('current-lang-label');
    if (!lbl) return;
    // if a global currentLang exists, use it; else default to 'en'
    const langValue = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    lbl.innerText = (langValue || 'en').toUpperCase();
  }

  // run attach after DOM ready; also try again after short delay to catch fetch-loaded navbar
  function runInit() {
    attachHandlers();
    syncLabel();
    // try to attach again after components might be fetched (500ms & 1500ms attempts)
    setTimeout(() => { attachHandlers(); syncLabel(); }, 500);
    setTimeout(() => { attachHandlers(); syncLabel(); }, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInit);
  } else {
    runInit();
  }

})();
/* ======= Robust navbar init: language toggle + services mega-menu fix =======
   Paste this at the *end* of js/script.js
   This code will:
   - wait for the navbar to exist (handles async fetch injection)
   - attach language menu behavior
   - attach Services button behavior to toggle/show mega menu
   - delegate clicks inside the mega menu to call openServiceModal(...) or navigateTo(...)
   - collapse menus on outside click
========================================================================== */

(function NavbarEnhancer(){

  const MAX_WAIT_MS = 3000;     // give up after this many ms
  const RETRY_INTERVAL = 150;   // check every 150ms
    // Re-run attachments when components are inserted dynamically (e.g., via fetch)
  document.addEventListener('componentsLoaded', function() {
    try {
      const headerRoot = document.querySelector('header') || document;
      attachLanguageHandlers(headerRoot);
      attachServicesHandlers(headerRoot);
      console.log('[NavbarEnhancer] componentsLoaded handled: re-attached handlers.');
    } catch (err) {
      console.warn('[NavbarEnhancer] error re-attaching handlers after componentsLoaded:', err);
    }
  }, { passive: true });

  

  function domReadyPromise(selector, timeout = MAX_WAIT_MS) {
    return new Promise((resolve) => {
      const start = Date.now();
      const check = () => {
        const el = document.querySelector(selector);
        if (el) return resolve(el);
        if (Date.now() - start > timeout) return resolve(null);
        setTimeout(check, RETRY_INTERVAL);
      };
      check();
    });
  }

  // Utility: find Services button and associated mega menu container
  function findServicesElements(root = document) {
    // First, try to find button with data-key="navServices" inside a group
    let servicesBtn = root.querySelector('button[data-key="navServices"]');
    
    // If not found, look for any button/element with Services text
    if (!servicesBtn) {
      const candidates = Array.from(root.querySelectorAll('button, a, div'));
      const strings = ['service', 'services', 'सेवा', 'सेव'];
      for (const el of candidates) {
        const txt = ((el.dataset && (el.dataset.key || el.dataset.lang)) || el.textContent || '').toLowerCase().trim();
        if (!txt) continue;
        for (const s of strings) {
          if (txt.includes(s.toLowerCase())) {
            servicesBtn = el;
            break;
          }
        }
        if (servicesBtn) break;
      }
    }
    
    // Find the mega-menu - should be in the navbar
    let mega = root.querySelector('.mega-menu') || document.querySelector('.mega-menu');
    
    return { servicesBtn, mega };
  }

  // Attach handlers for language toggle + selection
  function attachLanguageHandlers(navRoot) {
    // language label and menu
    const label = navRoot.querySelector('#current-lang-label') || document.getElementById('current-lang-label');
    const menu  = navRoot.querySelector('#lang-menu') || document.getElementById('lang-menu');

    // find toggle button: prefer button that contains the label span
    let toggleBtn = label ? label.closest('button') : navRoot.querySelector('[data-lang-toggle], .lang-toggle, .lang-btn, [onclick*="toggleLangMenu"]');
    if (!toggleBtn) toggleBtn = document.querySelector('[onclick*="toggleLangMenu"]') || document.querySelector('[aria-controls="lang-menu"]');

    if (!toggleBtn && !menu) {
      console.warn('[NavbarEnhancer] language elements not found (no #current-lang-label / #lang-menu).');
      return;
    }

    // Toggle the menu on click
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!menu) return;
        menu.classList.toggle('hidden');
        const expanded = !menu.classList.contains('hidden');
        toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      }, { passive: false });
    }

    // Delegate language selection inside menu
    if (menu) {
      menu.addEventListener('click', (e) => {
        const btn = e.target.closest('button, a, div');
        if (!btn || !menu.contains(btn)) return;
        // determine language code: data-lang, onclick, or text inference
        let lang = btn.getAttribute('data-lang') || null;
        if (!lang) {
          const onclick = btn.getAttribute('onclick') || '';
          const m = onclick.match(/changeLang\(['"]?([a-z]{2})['"]?\)/i);
          if (m) lang = m[1];
        }
        if (!lang) {
          const t = (btn.textContent || '').trim().toLowerCase();
          if (t.includes('english') || t.startsWith('en')) lang = 'en';
          if (t.includes('मराठी') || t.includes('mr')) lang = 'mr';
          if (t.includes('हिंदी') || t.includes('hi')) lang = 'hi';
        }
        if (lang) {
          try {
            if (typeof changeLang === 'function') changeLang(lang);
            else console.warn('[NavbarEnhancer] changeLang() not defined; cannot switch language programmatically.');
          } catch (err) {
            console.error('[NavbarEnhancer] error calling changeLang():', err);
          }
          // hide menu after selection
          menu.classList.add('hidden');
          if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        }
      }, { passive: true });
    }
  }

  // Attach handlers for Services mega menu
  function attachServicesHandlers(navRoot) {
    const { servicesBtn, mega } = findServicesElements(navRoot);
    
    if (!mega) {
      console.warn('[NavbarEnhancer] mega-menu element not found.');
      return;
    }
    
    if (!servicesBtn) {
      console.warn('[NavbarEnhancer] Services button not found.');
    } else {
      console.log('[NavbarEnhancer] Found Services button:', servicesBtn);
    }

    // Ensure mega menu starts as invisible
    mega.classList.add('invisible');

    // Make sure mega menu is focusable for accessibility
    mega.setAttribute('role', 'menu');

    // If there is a servicesBtn, attach handlers
    if (servicesBtn) {
      servicesBtn.style.cursor = 'pointer';
      
      // Click handler - toggle menu
      servicesBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        ev.preventDefault && ev.preventDefault();
        const isHidden = mega.classList.contains('invisible');
        if (isHidden) {
          mega.classList.remove('invisible', 'opacity-0', '-translate-y-2');
          mega.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else {
          mega.classList.add('invisible', 'opacity-0', '-translate-y-2');
          mega.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
        return false;
      }, { passive: false });

      // Show on mouseenter, hide on mouseleave (desktop - from group div)
      const groupDiv = servicesBtn.closest('.group');
      if (groupDiv) {
        groupDiv.addEventListener('mouseenter', () => {
          mega.classList.remove('invisible', 'opacity-0', '-translate-y-2');
          mega.classList.add('opacity-100', 'visible', 'translate-y-0');
        });
        groupDiv.addEventListener('mouseleave', () => {
          mega.classList.add('invisible', 'opacity-0', '-translate-y-2');
          mega.classList.remove('opacity-100', 'visible', 'translate-y-0');
        });
      }
    }

    // Close mega menu when clicking outside
    document.addEventListener('click', (ev) => {
      if (mega && !mega.contains(ev.target) && !servicesBtn?.contains(ev.target)) {
        mega.classList.add('invisible', 'opacity-0', '-translate-y-2');
        mega.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    }, { passive: true });

    // Delegate clicks inside mega menu to call openServiceModal
    mega.addEventListener('click', (e) => {
      const el = e.target.closest('a, button');
      if (!el) return;
      
      const onclick = el.getAttribute('onclick') || '';
      
      // Try to parse navigateTo('page') 
      let m = onclick.match(/navigateTo\(['"]?([a-z-]+)['"]?\)/i);
      if (m) {
        e.preventDefault();
        try { 
          navigateTo(m[1]); 
          console.log('[NavbarEnhancer] Navigated to:', m[1]);
        } catch(err) { 
          console.error('[NavbarEnhancer] navigateTo error', err); 
        }
        
        // Also try to extract and call filterServices if present
        const filterMatch = onclick.match(/filterServices\(['"]?([a-zA-Z\s/]+)['"]?\)/);
        if (filterMatch) {
          try {
            setTimeout(() => {
              if (typeof filterServices === 'function') {
                filterServices(filterMatch[1]);
                console.log('[NavbarEnhancer] Filtered services by:', filterMatch[1]);
              }
            }, 100);
          } catch(err) {
            console.error('[NavbarEnhancer] filterServices error', err);
          }
        }
        
        // Close mega menu
        mega.classList.add('invisible', 'opacity-0', '-translate-y-2');
        mega.classList.remove('opacity-100', 'visible', 'translate-y-0');
        return;
      }
      
      // Try to parse openServiceModal(NUM)
      m = onclick.match(/openServiceModal\((\d+)\)/);
      if (m) {
        e.preventDefault();
        const id = parseInt(m[1], 10);
        try { 
          openServiceModal(id); 
          console.log('[NavbarEnhancer] Opened service modal for ID:', id);
        } catch(err) { 
          console.error('[NavbarEnhancer] openServiceModal error', err); 
        }
        // Close mega menu
        mega.classList.add('invisible', 'opacity-0', '-translate-y-2');
        mega.classList.remove('opacity-100', 'visible', 'translate-y-0');
        return;
      }
      
      // Prevent default if href is empty or #
      const href = el.getAttribute('href') || '';
      if (href === '#' || href.trim() === '') {
        e.preventDefault();
      }
    }, { passive: false });
  }

  // Close both menus on outside click (language menu and mega)
  function attachOutsideClose() {
    document.addEventListener('click', (e) => {
      // language menu
      const langMenu = document.getElementById('lang-menu');
      const langToggle = document.querySelector('[aria-controls="lang-menu"], [onclick*="toggleLangMenu"], button:has(#current-lang-label)');
      if (langMenu && !langMenu.contains(e.target) && !(langToggle && langToggle.contains(e.target))) {
        langMenu.classList.add('hidden');
        if (langToggle) langToggle.setAttribute('aria-expanded', 'false');
      }
      // mega menu
      const mega = document.querySelector('.mega-menu');
      if (mega && !mega.contains(e.target) && !e.target.closest('.group')) {
        mega.classList.remove('open','opacity-100','visible','translate-y-0');
        mega.classList.add('invisible');
      }
    }, { passive: true });
  }

  // Initialize after navbar (or header) is present
  async function init() {
    // Wait for header or navbar placeholder
    const header = await domReadyPromise('#header, #navbar-placeholder, .navbar, .navs', MAX_WAIT_MS);
    if (!header) {
      console.warn('[NavbarEnhancer] header/navbar not found in DOM — attempted to init but gave up.');
      return;
    }

    // If navbar was loaded into #navbar-placeholder using fetch, wait briefly for fetch to complete
    // Try to use the header element as root for DOM queries
    const root = document.querySelector('header') || document;

    // Attach language and services handlers to the root
    try { attachLanguageHandlers(root); } catch (err) { console.error('[NavbarEnhancer] attachLanguageHandlers error', err); }
    try { attachServicesHandlers(root); } catch (err) { console.error('[NavbarEnhancer] attachServicesHandlers error', err); }

    attachOutsideClose();

    // extra safety: re-run attachment after short delays in case components were injected later
    setTimeout(() => {
      try { attachLanguageHandlers(document); attachServicesHandlers(document); } catch (e) {}
    }, 600);
    setTimeout(() => {
      try { attachLanguageHandlers(document); attachServicesHandlers(document); } catch (e) {}
    }, 1400);

    console.log('[NavbarEnhancer] initialized.');
  }

  // Kick off
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

