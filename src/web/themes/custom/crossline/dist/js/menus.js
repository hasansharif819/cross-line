!((document, $) => {
  'use strict';

  $(document).ready(function () {
    if ($('.menu-filtr-container').length) {
      const simpleFilters = document.querySelectorAll('.simplefilter .fltr-controls');
      Array.from(simpleFilters).forEach(node => node.addEventListener('click', function () {
        simpleFilters.forEach(filter => filter.classList.remove('active'));
        node.classList.add('active');
      }));

      // Expose this filterizr as a global for debugging
      window.filterizr = new window.Filterizr('.menu-filtr-container', {
        controlsSelector: '.fltr-controls',
        gutterPixels: 30,
        spinner: {
          enabled: true
        }
      });
    }
  });
})(document, jQuery);
//# sourceMappingURL=menus.js.map
