;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('youtubePlayer', function($window, PlayerService) {
      return {
        restrict: 'A',
        replace: false,
        link: function(scope, element, attrs) {
          // scope.isDisabled comes from karma tests.
          // TODO: nothing like that should be done, figure out how to
          // prevent script src loading during karma tests
          if(!scope.isDisabled) {
            var tag = $('<script>').attr({
              src: 'https://www.youtube.com/iframe_api',
              async: true
            });

            // this is suggested here:
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            // not sure if it really needs to be first
            $('script').eq(0).before(tag);
          }

          $window.onYouTubeIframeAPIReady = function() {
            PlayerService.createNewPlayer(attrs.youtubePlayer || 'main-video-player');
          };
        }
      };
    });
})();
