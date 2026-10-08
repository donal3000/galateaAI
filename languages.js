/* Preserve the current section when choosing another language.
   The language is carried in the page URL, without extra browser storage. */
(function () {
  var links = document.querySelectorAll('[data-language]');
  function updateLinks() {
    links.forEach(function (link) {
      var target = new URL(link.getAttribute('href'), window.location.href);
      target.hash = window.location.hash;
      link.href = target.href;
    });
  }
  updateLinks();
  window.addEventListener('hashchange', updateLinks);
})();
