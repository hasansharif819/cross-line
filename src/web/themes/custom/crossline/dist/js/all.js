
//# sourceMappingURL=global.js.map

!((document, $) => {
  'use strict';

  /**
   * Sticky header finctionality
   * @returns {Version}
   **/
  function stickyHeader() {
    var toolbarHeight = 0;
    if ($('#toolbar-bar').length) {
      toolbarHeight = $('#toolbar-bar').height();
    }
    if ($('.toolbar-tray-open #toolbar-bar').length) {
      toolbarHeight = toolbarHeight + 40;
    }
    $('.header').css({
      top: toolbarHeight
    });
  }
  $(document).ready(function () {
    stickyHeader();
    const header = $('.header');
    // Add a scroll event listener
    $(window).scroll(function () {
      // Get the current scroll position
      const scrollPosition = $(window).scrollTop();
      if (scrollPosition > 80) {
        header.addClass('sticky-header');
      } else {
        header.removeClass('sticky-header');
      }
    });
  });
})(document, jQuery);
//# sourceMappingURL=header.js.map

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
