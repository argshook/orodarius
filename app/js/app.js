(() => {
  angular.module('orodarius', ['LocalStorageModule', 'ngAnimate']);

  angular.module('orodarius').config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('orodarius');
  });

  angular.module('orodarius').run(function($window) {
    $($window).on(
      'resize',
      _.throttle(function() {
        $('#main-video-player')
          .attr('width', $window.innerWidth)
          .attr('height', $window.innerHeight);
      }, 400)
    );
  });
})();
