(function () {
  var KEY = 'galatea-consent';
  var FONTS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap';
  var banner, modal;

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function write(fonts) {
    try { localStorage.setItem(KEY, JSON.stringify({ fonts: !!fonts, date: new Date().toISOString() })); } catch (e) {}
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
  function apply(fonts) { fonts ? loadFonts() : unloadFonts(); }

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
      intro: 'Wir setzen keine Tracking- oder Werbe-Cookies ein. Mit Ihrer Einwilligung laden wir die Schriftarten Playfair Display und Inter von Google Fonts; dabei wird Ihre IP-Adresse an Google übertragen. Ohne Einwilligung zeigen wir die Seite mit Systemschriften. Details in unserer',
      privacy: 'Datenschutzerklärung', custom: 'Anpassen', reject: 'Alle ablehnen', accept: 'Alle akzeptieren', close: 'Schließen', settings: 'Einstellungen anpassen',
      instruction: 'Wählen Sie, welche Dienste Sie zulassen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Seitenfuß ändern.',
      necessary: 'Notwendig', always: 'Immer aktiv', local: 'Speichert nur Ihre Auswahl auf diesem Gerät (lokaler Speicher). Es werden keine Cookies gesetzt.',
      fonts: 'Schriftarten (Google Fonts)', details: 'Lädt Playfair Display und Inter von Servern der Google LLC (USA). Dabei wird Ihre IP-Adresse übertragen.', save: 'Auswahl speichern'
    },
    en: {
      title: 'Your privacy matters',
      intro: 'We use no tracking or advertising cookies. With your consent, we load the Playfair Display and Inter typefaces from Google Fonts, which transmits your IP address to Google. Without consent, we display the website using system fonts. See our',
      privacy: 'privacy policy', custom: 'Customise', reject: 'Reject all', accept: 'Accept all', close: 'Close', settings: 'Customise settings',
      instruction: 'Choose which services to allow. You can change your choice at any time using “Cookie settings” in the footer.',
      necessary: 'Necessary', always: 'Always active', local: 'Stores only your choice on this device (local storage). No cookies are set.',
      fonts: 'Typefaces (Google Fonts)', details: 'Loads Playfair Display and Inter from Google LLC servers (USA). Your IP address is transmitted in the process.', save: 'Save selection'
    },
    zh: {
      title: '我们重视您的隐私',
      intro: '我们不使用追踪或广告 Cookie。经您同意后，我们会从 Google Fonts 加载 Playfair Display 和 Inter 字体，并向 Google 传输您的 IP 地址。未经同意时，网页使用系统字体显示。详情请参阅',
      privacy: '隐私政策', custom: '自定义', reject: '全部拒绝', accept: '全部接受', close: '关闭', settings: '自定义设置',
      instruction: '请选择允许使用的服务。您可以随时通过页脚的“Cookie 设置”更改选择。',
      necessary: '必要功能', always: '始终启用', local: '仅在此设备上保存您的选择（本地存储），不会设置 Cookie。',
      fonts: '字体（Google Fonts）', details: '从 Google LLC 的服务器（美国）加载 Playfair Display 和 Inter 字体。此过程会传输您的 IP 地址。', save: '保存选择'
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
  // Leiste beim Scrollen ausblenden (nur ohne gespeicherte Entscheidung); ganz oben wieder einblenden
  var away = false, ticking = false;
  function syncAway() {
    ticking = false;
    var want = window.scrollY > 20;
    if (want === away) return;
    away = want;
    banner.classList.toggle("cc-away", away);
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(syncAway); } }

  function decide(fonts) {
    write(fonts); apply(fonts); banner.hidden = true; modal.hidden = true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    build();
    function onClick(e) {
      var a = e.target.closest('[data-a]');
      if (!a) return;
      var act = a.getAttribute('data-a');
      if (act === 'all') decide(true);
      else if (act === 'none') decide(false);
      else if (act === 'custom') show('custom');
      else if (act === "close") { if (read()) modal.hidden = true; else show("main"); }
      else if (act === "save") decide(document.getElementById("cc-fonts").checked);
    }
    banner.addEventListener("click", onClick);
    modal.addEventListener("click", function (e) { if (e.target === modal) { if (read()) modal.hidden = true; else show("main"); } else onClick(e); });
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cookie-settings]')) { e.preventDefault(); show('custom'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === "Escape" && !modal.hidden) { if (read()) modal.hidden = true; else show("main"); }
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    var c = read();
    if (c) apply(c.fonts); else show('main');
    syncAway();
  });
})();
