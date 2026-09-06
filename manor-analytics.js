// Keep existing analytics and PPC attribution on the production hostname only.
if (['mojomanorwaynesville.com','www.mojomanorwaynesville.com'].includes(location.hostname)) {
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-ZZJS8E767M');gtag('config','AW-18375451046');const t=document.createElement('script');t.async=true;t.src='https://www.googletagmanager.com/gtag/js?id=G-ZZJS8E767M';document.head.append(t);
/* ── First-party Google Ads landing beacon (once per session) ── */
(function () {
  try {
    var q = new URLSearchParams(location.search);
    var gclid = q.get('gclid');
    if (!gclid && q.get('utm_medium') !== 'cpc') return;
    if (sessionStorage.getItem('mojo_ppc_logged')) return;
    sessionStorage.setItem('mojo_ppc_logged', '1');
    var payload = JSON.stringify({
      page: location.pathname,
      gclid: gclid || '',
      utm_campaign: q.get('utm_campaign') || '',
      utm_content: q.get('utm_content') || '',
      utm_term: q.get('utm_term') || '',
      ref: document.referrer || ''
    });
    var url = 'https://mojo-manor-chat.aria-mojomarketing.workers.dev/ppc';
    // text/plain = CORS-safelisted (no preflight). sendBeacon is credentialed and
    // an application/json Blob forces a preflight the worker's "*" origin can't
    // satisfy for credentialed requests — every real-visitor beacon was dropped.
    if (window.fetch) {
      fetch(url, { method: 'POST', body: payload, keepalive: true, mode: 'cors', credentials: 'omit' })
        .catch(function () {});
    } else if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: 'text/plain' }));
    }
  } catch (e) { /* never break the page for analytics */ }
})();

const chat=document.createElement('script');chat.src='/chat.js';document.body.append(chat);
}
