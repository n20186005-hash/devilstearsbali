(() => {
  const key = 'dt_cookie_preferences', deniedKey = 'dt_analytics_denied', id = 'G-HXM22WWPKP';
  const checkbox = document.getElementById('analytics-consent'), status = document.getElementById('cookie-status');
  const messages = {
    on: 'Google Analytics diizinkan dan pilihan disimpan.',
    off: 'Google Analytics ditolak dan pilihan disimpan.',
    tab: 'Google Analytics dinonaktifkan untuk tab ini, termasuk saat berpindah halaman atau memuat ulang selama penanda sesi tersedia. Pilihan permanen tidak dapat disimpan; izin yang tersimpan mungkin masih ada di tab lain. Hapus data situs melalui pengaturan peramban untuk menarik izin tersimpan.',
    page: 'Google Analytics dinonaktifkan pada halaman ini. Pilihan tidak dapat disimpan dan penolakan tidak dapat dipastikan untuk halaman berikutnya; izin yang tersimpan mungkin masih ada di tab lain. Hapus data situs melalui pengaturan peramban sebelum berpindah atau memuat ulang.'
  };
  function state() {
    let denied = window.__dtAnalyticsDenied === true;
    try {
      denied = sessionStorage.getItem(deniedKey) === '1' || denied;
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      localStorage.setItem(key + '-write-check', '1');
      if (localStorage.getItem(key + '-write-check') !== '1') throw Error('Storage unavailable');
      localStorage.removeItem(key + '-write-check');
      if (localStorage.getItem(key + '-write-check') !== null) throw Error('Storage unavailable');
      const valid = typeof saved?.analytics === 'boolean';
      return { analytics: !denied && valid && saved.analytics, denied, failed: false, decided: valid || denied, storedFalse: valid && saved.analytics === false };
    } catch { return { analytics: false, denied, failed: true, decided: false, storedFalse: false }; }
  }
  function apply(consent) {
    window['ga-disable-' + id] = !consent;
    if (!consent) {
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.split('=')[0].trim();
        if (/^_ga(?:_|$)/.test(name)) {
          for (const domain of ['', '; domain=' + location.hostname, '; domain=.devilstearsbali.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
        }
      }
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    if (window.__dtAnalyticsLoaded) return;
    window.__dtAnalyticsLoaded = true;
    window.gtag('js', new Date());
    window.gtag('config', id);
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function retainDenial() {
    window.__dtAnalyticsDenied = true; apply(false);
    try { sessionStorage.setItem(deniedKey, '1'); return sessionStorage.getItem(deniedKey) === '1'; } catch { return false; }
  }
  function clearDenial() {
    try {
      sessionStorage.getItem(deniedKey);
      sessionStorage.removeItem(deniedKey);
      return sessionStorage.getItem(deniedKey) === null;
    } catch { return false; }
  }
  function rollbackGrant() {
    try {
      localStorage.setItem(key, JSON.stringify({ analytics: false }));
      if (JSON.parse(localStorage.getItem(key) || 'null')?.analytics === false) return true;
    } catch {}
    try { localStorage.removeItem(key); return localStorage.getItem(key) === null; } catch { return false; }
  }
  function sync(message, current = state()) {
    apply(current.analytics);
    if (checkbox) checkbox.checked = current.analytics;
    if (status) status.textContent = message || (current.failed ? messages.page : current.denied && !current.storedFalse ? messages.tab : current.decided ? (current.analytics ? messages.on : messages.off) : '');
  }
  function save(value) {
    let stored = false, retained = false;
    if (!value) {
      retained = retainDenial();
      try { localStorage.setItem(key, JSON.stringify({ analytics: false })); stored = JSON.parse(localStorage.getItem(key) || 'null')?.analytics === false; } catch {}
    } else {
      try {
        if (state().failed || !clearDenial()) throw Error('Choice unavailable');
        localStorage.setItem(key, JSON.stringify({ analytics: true }));
        if (JSON.parse(localStorage.getItem(key) || 'null')?.analytics !== true) throw Error('Choice not retained');
        window.__dtAnalyticsDenied = false;
        const current = state(); if (current.failed || !current.analytics) throw Error('Choice unavailable');
        stored = true;
      } catch { rollbackGrant(); retained = retainDenial(); }
    }
    let current = state();
    if (stored && value && !current.analytics) {
      rollbackGrant(); retained = retainDenial(); stored = false; current = state();
    }
    sync(stored ? (current.analytics ? messages.on : messages.off) : (retained ? messages.tab : messages.page), current);
  }
  sync();
  document.getElementById('cookie-form')?.addEventListener('submit', event => { event.preventDefault(); save(checkbox?.checked === true); });
  document.getElementById('reject-all')?.addEventListener('click', () => save(false));
  window.addEventListener('dt:consent', () => sync());
  window.addEventListener('storage', event => { if (event.key === key || event.key === null) sync(); });
})();
