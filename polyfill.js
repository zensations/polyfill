(function ($) {
  Drupal.behaviors.wyniwyg = {
    attach: function(context, settings) {
      $('input, textarea').placeholder();
    }
  }
})(jQuery);
