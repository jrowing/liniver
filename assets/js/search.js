// Live filter for resource cards (#search + .card[data-search]).
(function () {
  var input = document.getElementById('search');
  if (!input) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card[data-search]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var noResults = document.getElementById('no-results');
  var status = document.getElementById('search-status');

  function inFocus(el) { return !el.closest('.out-of-focus'); }

  function apply() {
    var terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var shown = 0;
    cards.forEach(function (c) {
      var hay = c.getAttribute('data-search');
      var match = terms.every(function (t) { return hay.indexOf(t) !== -1; });
      c.hidden = !match;
      if (match && inFocus(c)) shown++;
    });
    sections.forEach(function (s) {
      var visible = s.querySelectorAll('.card[data-search]:not([hidden])').length;
      s.hidden = terms.length > 0 && visible === 0;
    });
    if (noResults) noResults.style.display = (terms.length && shown === 0) ? 'block' : 'none';
    if (status) status.textContent = terms.length ? shown + ' result' + (shown === 1 ? '' : 's') : '';
  }
  window.liniverSearch = apply;

  input.addEventListener('input', apply);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var first = cards.filter(function (c) { return !c.hidden && inFocus(c); })[0];
      if (first) { e.preventDefault(); first.querySelector('a').click(); }
    } else if (e.key === 'Escape') {
      input.value = ''; apply(); input.blur();
    }
  });

  // "/" focuses search from anywhere
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input &&
        !/input|textarea|select/i.test(document.activeElement.tagName)) {
      var splash = document.getElementById('splash-screen');
      if (splash && !splash.classList.contains('dismissed') &&
          document.documentElement.classList.contains('splash-open')) return;
      e.preventDefault(); input.focus();
    }
  });
})();
