/**
 * @file
 * Wayfinder integration.
 */

(function ($) {
  "use strict";

  var click_handler = function (e) {
    e.preventDefault();
    embedOS2($(this).data('wayfinder-faust'), $(this).data('wayfinder-branch'));
  };

  Drupal.behaviors.ding_wayfinder_links = {
    attach: function (context) {
      $('[data-wayfinder-faust]', context).click(click_handler);
    }
  };
}(jQuery));
