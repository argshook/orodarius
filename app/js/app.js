;(function() {
  'use strict';

  angular.module('orodarius', ['LocalStorageModule'])
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('orodarius');
  })
  .run(function($window) {
    $($window).on('resize', _.throttle(function() {
      $('#main-video-player')
        .attr('width', $window.innerWidth)
        .attr('height', $window.innerHeight);
    }, 400));
  });
})();
