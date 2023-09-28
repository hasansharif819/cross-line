!((document, $) => {
  'use strict';

  //Webform submission on vendor page
  $(document).on(
    'click',
    '.path-product .training-details-container .training-btn',
    function(evt) {
      evt.preventDefault();
      let trainingId = $(
        '.path-product .training-details-container .training-btn'
      ).attr('id');
      $.ajax({
        url: '/enquiry/training/' + trainingId,
        type: 'get', //send it through get method
        success: function(response) {
          $(
            '.path-product .training-details-container #trainingModal .modal-body'
          ).html('');
          $(
            '.path-product .training-details-container #trainingModal .modal-body'
          ).append(response.data);
        },
        error: function() {
          console.log('Error loading user checklist data');
        },
        complete: function() {
          //Hide spinner
        }
      });
      return false;
    }
  );
})(document, jQuery);
