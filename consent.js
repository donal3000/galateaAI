(function () {
  var KEY = 'galatea-consent';
  var VERSION = 2;
  var ID = 'G-1WX73630DH';
  var started = false;
  window['ga-disable-' + ID] = true;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  function valid(c) { return c && c.version === VERSION && typeof c.analytics === 'boolean'; }
  function clearAnalyticsCookies() {
    var names = document.cookie.split(';').map(function (v) { return v.trim().split('=')[0]; }).filter(function (n) { return /^_ga(?:_|$)/.test(n); });
    var host = location.hostname.split('.');
    var domains = [''];
    for (var i = 0; i < host.length - 1; i++) domains.push(host.slice(i).join('.'), '.' + host.slice(i).join('.'));
    names.forEach(function (name) { domains.forEach(function (domain) {
      document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + (domain ? '; domain=' + domain : '');
    }); });
  }
  function loadAnalytics() {
    if (started) return;
    started = true;
    window['ga-disable-' + ID] = false;
    gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', ID, { allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: 34128000, cookie_update: false });
    var script = document.createElement('script');
    script.id = 'galatea-ga'; script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(script);
  }
  var FONTS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap';
  var banner, modal;

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function write(fonts, analytics) {
    try { localStorage.setItem(KEY, JSON.stringify({ version: VERSION, fonts: !!fonts, analytics: !!analytics, date: new Date().toISOString() })); } catch (e) {}
  }
  function loadFonts() {
    if (document.getElementById('gf-css')) return;
    var l = document.createElement('link');
    l.id = 'gf-css'; l.rel = 'stylesheet'; l.href = FONTS;
    document.head.appendChild(l);
  }
  function unloadFonts() {
    var l = document.getElementById('gf-css');
    if (l) l.remove();
  }
  function apply(fonts, analytics) {
    fonts ? loadFonts() : unloadFonts();
    if (analytics) loadAnalytics();
    else {
      window['ga-disable-' + ID] = true;
      clearAnalyticsCookies();
      // Reload after withdrawal to remove the loaded Google library and its listeners.
      if (started) location.reload();
    }
  }

  function build() {
    banner = document.createElement("div");
    banner.className = "cc";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-labelledby", "cc-title");
    banner.hidden = true;
    modal = document.createElement("div");
    modal.className = "cc-modal";
    modal.hidden = true;
    document.body.appendChild(banner);
    document.body.appendChild(modal);
  }
  var language = document.documentElement.lang;
  var lang = language.indexOf('zh') === 0 ? 'zh' : language === 'en' ? 'en' : 'de';
  var translations = {
    de: {
      title: 'Ihre Privatsphäre zählt',
      intro: "Optionale Dienste laden wir nur mit Ihrer Einwilligung: Google Analytics misst Besuche, Seitenaufrufe, Herkunft und Nutzung; Google Fonts lädt Schriftarten. Dabei werden Daten an Google übertragen, auch in die USA. Sie können beide Dienste getrennt auswählen oder ablehnen. Details in unserer",
      privacy: 'Datenschutzerklärung', custom: 'Anpassen', reject: 'Alle ablehnen', accept: 'Alle akzeptieren', close: 'Schließen', settings: 'Einstellungen anpassen',
      instruction: 'Wählen Sie, welche Dienste Sie zulassen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Seitenfuß ändern.',
      necessary: 'Notwendig', always: 'Immer aktiv', local: 'Speichert nur Ihre Auswahl auf diesem Gerät (lokaler Speicher). Es werden keine Cookies gesetzt.',
      analytics: 'Besuchsstatistik (Google Analytics)', analyticsDetails: 'Verwendet Cookies, um Besuche und Nutzung zu messen. Google erhält unter anderem Seitenaufrufe, Geräteinformationen und die ungefähre Region. Keine personalisierte Werbung. Widerruf jederzeit hier möglich.', fonts: 'Schriftarten (Google Fonts)', details: 'Lädt Playfair Display und Inter von Servern der Google LLC (USA). Dabei wird Ihre IP-Adresse übertragen.', save: 'Auswahl speichern'
    },
    en: {
      title: 'Your privacy matters',
      intro: "Optional services load only with your consent: Google Analytics measures visits, page views, traffic sources and usage; Google Fonts loads typefaces. Data is sent to Google, including in the USA. You can allow or reject each service separately. See our",
      privacy: 'privacy policy', custom: 'Customise', reject: 'Reject all', accept: 'Accept all', close: 'Close', settings: 'Customise settings',
      instruction: 'Choose which services to allow. You can change your choice at any time using “Cookie settings” in the footer.',
      necessary: 'Necessary', always: 'Always active', local: 'Stores only your choice on this device (local storage). No cookies are set.',
      analytics: 'Visitor statistics (Google Analytics)', analyticsDetails: 'Uses cookies to measure visits and usage. Google receives page views, device information and approximate location, among other data. No personalised advertising. You can withdraw consent here at any time.', fonts: 'Typefaces (Google Fonts)', details: 'Loads Playfair Display and Inter from Google LLC servers (USA). Your IP address is transmitted in the process.', save: 'Save selection'
    },
    zh: {
      title: '我们重视您的隐私',
      intro: "我们仅在您同意后加载可选服务：Google Analytics 用于统计访问量、页面浏览、来源及使用情况；Google Fonts 用于加载字体。数据会传输给 Google，包括美国。您可以分别允许或拒绝这些服务。详情请参阅",
      privacy: '隐私政策', custom: '自定义', reject: '全部拒绝', accept: '全部接受', close: '关闭', settings: '自定义设置',
      instruction: '请选择允许使用的服务。您可以随时通过页脚的“Cookie 设置”更改选择。',
      necessary: '必要功能', always: '始终启用', local: '仅在此设备上保存您的选择（本地存储），不会设置 Cookie。',
      analytics: '访问统计（Google Analytics）', analyticsDetails: '使用 Cookie 统计访问和使用情况。Google 会接收页面浏览、设备信息和大致地区等数据。不用于个性化广告。您可随时在此撤回同意。', fonts: '字体（Google Fonts）', details: '从 Google LLC 的服务器（美国）加载 Playfair Display 和 Inter 字体。此过程会传输您的 IP 地址。', save: '保存选择'
    }
  };
  var t = translations[lang];
  var privacyPage = 'datenschutz' + (lang === 'de' ? '' : '-' + lang) + '.html';
  function viewMain() {
    banner.innerHTML = `
      <div class="cc-inner"><div class="cc-text">
        <div class="cc-title" id="cc-title">${t.title}</div>
        <p>${t.intro} <a href="${privacyPage}">${t.privacy}</a>${lang === 'zh' ? '。' : '.'}</p></div>
        <div class="cc-actions">
          <button type="button" class="cc-btn" data-a="custom">${t.custom}</button>
          <button type="button" class="cc-btn" data-a="none">${t.reject}</button>
          <button type="button" class="cc-btn cc-btn-primary" data-a="all">${t.accept}</button>
        </div>
      </div>`;
  }
  function viewCustom() {
    var c = read();
    modal.innerHTML = `
      <div class="cc-dialog" role="dialog" aria-modal="true" aria-labelledby="cc-mtitle">
        <button type="button" class="cc-close" data-a="close" aria-label="${t.close}">×</button>
        <h2 id="cc-mtitle">${t.settings}</h2>
        <p>${t.instruction}</p>
        <div class="cc-opt"><div class="cc-opt-head"><b>${t.necessary}</b><small>${t.always}</small></div><p>${t.local}</p></div>
        <div class="cc-opt"><div class="cc-opt-head"><b>${t.fonts}</b>
          <label class="cc-switch"><input type="checkbox" id="cc-fonts" aria-label="${t.fonts}"${c && c.fonts ? ' checked' : ''}><i></i></label>
        </div><p>${t.details}</p></div>
        <div class="cc-opt"><div class="cc-opt-head"><b>${t.analytics}</b>
          <label class="cc-switch"><input type="checkbox" id="cc-analytics" aria-label="${t.analytics}"${valid(c) && c.analytics ? ' checked' : ''}><i></i></label>
        </div><p>${t.analyticsDetails}</p></div>
        <div class="cc-actions">
          <button type="button" class="cc-btn cc-btn-primary" data-a="save">${t.save}</button>
          <button type="button" class="cc-btn" data-a="none">${t.reject}</button>
        </div>
      </div>`;
  }
  function show(view) {
    var b;
    if (view === "custom") {
      viewCustom(); modal.hidden = false; banner.hidden = true;
      b = modal.querySelector(".cc-btn-primary");
    } else {
      viewMain(); modal.hidden = true; banner.hidden = false;
    }
    if (b) b.focus({ preventScroll: true });
  }
  function decide(fonts, analytics) {
    write(fonts, analytics); apply(fonts, analytics); banner.hidden = true; modal.hidden = true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    build();
    function onClick(e) {
      var a = e.target.closest('[data-a]');
      if (!a) return;
      var act = a.getAttribute('data-a');
      if (act === 'all') decide(true, true);
      else if (act === 'none') decide(false, false);
      else if (act === 'custom') show('custom');
      else if (act === "close") { if (valid(read())) modal.hidden = true; else show("main"); }
      else if (act === "save") decide(document.getElementById("cc-fonts").checked, document.getElementById("cc-analytics").checked);
    }
    banner.addEventListener("click", onClick);
    modal.addEventListener("click", function (e) { if (e.target === modal) { if (valid(read())) modal.hidden = true; else show("main"); } else onClick(e); });
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cookie-settings]')) { e.preventDefault(); show('custom'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === "Escape" && !modal.hidden) { if (valid(read())) modal.hidden = true; else show("main"); }
    });
    var c = read();
    if (valid(c)) apply(c.fonts, c.analytics);
    else { apply(!!(c && c.fonts), false); show('main'); }
    window.addEventListener('storage', function (event) {
      if (event.key === KEY || event.key === null) {
        var next = read();
        apply(!!(next && next.fonts), !!(valid(next) && next.analytics));
        if (!valid(next)) show('main');
      }
    });
  });
})();
