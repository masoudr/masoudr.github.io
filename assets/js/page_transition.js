; (function ($) {
  'use strict';
  var $body = $('html, body'), // Define jQuery collection 
    content = $('#main').smoothState({
      prefetch: true,
      cacheLength: 2,
      onStart: {
        duration: 1000,
        render: function () {
          content.toggleAnimationClass('is-exiting');
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');

          // Inject the new content
          $container.html($newContent);

        }
      }
    }).data('smoothState');
})(jQuery);