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
  function viewMain() {
    banner.innerHTML =
      "<div class=\"cc-inner\"><div class=\"cc-text\">" +
      "<div class=\"cc-title\" id=\"cc-title\">Ihre Privatsphäre zählt</div>" +
      "<p>Wir setzen keine Tracking- oder Werbe-Cookies ein. Mit Ihrer Einwilligung laden wir die Schriftarten Playfair Display und Inter von Google Fonts; dabei wird Ihre IP-Adresse an Google übertragen. Ohne Einwilligung zeigen wir die Seite mit Systemschriften. Details in unserer <a href=\"datenschutz.html\">Datenschutzerklärung</a>.</p></div>" +
      "<div class=\"cc-actions\">" +
      "<button type=\"button\" class=\"cc-btn\" data-a=\"custom\">Anpassen</button>" +
      "<button type=\"button\" class=\"cc-btn\" data-a=\"none\">Alle ablehnen</button>" +
      "<button type=\"button\" class=\"cc-btn cc-btn-primary\" data-a=\"all\">Alle akzeptieren</button></div></div>";
  }
  function viewCustom() {
    var c = read();
    modal.innerHTML =
      "<div class=\"cc-dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"cc-mtitle\">" +
      "<button type=\"button\" class=\"cc-close\" data-a=\"close\" aria-label=\"Schließen\">×</button>" +
      "<h2 id=\"cc-mtitle\">Einstellungen anpassen</h2>" +
      "<p>Wählen Sie, welche Dienste Sie zulassen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Seitenfuß ändern.</p>" +
      "<div class=\"cc-opt\"><div class=\"cc-opt-head\"><b>Notwendig</b><small>Immer aktiv</small></div>" +
      "<p>Speichert nur Ihre Auswahl auf diesem Gerät (lokaler Speicher). Es werden keine Cookies gesetzt.</p></div>" +
      "<div class=\"cc-opt\"><div class=\"cc-opt-head\"><b>Schriftarten (Google Fonts)</b>" +
      "<label class=\"cc-switch\"><input type=\"checkbox\" id=\"cc-fonts\" aria-label=\"Schriftarten (Google Fonts)\"" + (c && c.fonts ? " checked" : "") + "><i></i></label></div>" +
      "<p>Lädt Playfair Display und Inter von Servern der Google LLC (USA). Dabei wird Ihre IP-Adresse übertragen.</p></div>" +
      "<div class=\"cc-actions\">" +
      "<button type=\"button\" class=\"cc-btn cc-btn-primary\" data-a=\"save\">Auswahl speichern</button>" +
      "<button type=\"button\" class=\"cc-btn\" data-a=\"none\">Alle ablehnen</button></div></div>";
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
