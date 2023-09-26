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
