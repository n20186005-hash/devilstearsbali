(() => {
  const key = 'dt_cookie_preferences';
  const id = 'G-HXM22WWPKP';
  function allowed() {
    try {
      if (window.__dtAnalyticsDenied || sessionStorage.getItem('dt_analytics_denied') === '1') return false;
      return JSON.parse(localStorage.getItem(key) || '{}')?.analytics === true;
    } catch { return false; }
  }
  function apply() {
    const consent = allowed();
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
    if (window.__dtAnalyticsLoaded) return;
    window.__dtAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id);
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  apply(); window.addEventListener('dt:consent', apply); window.addEventListener('storage', apply);
})();
