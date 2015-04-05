;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('youtubePlayer', function($window, PlayerService) {
      return {
        restrict: 'A',
        replace: false,
        link: function(scope, element, attrs) {
          var tag = $('<script>').attr({
            src: 'https://www.youtube.com/iframe_api',
            async: true
          });

          // this is suggested here:
          // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
          // not sure if it really needs to be first
          $('script').eq(0).before(tag);

          $window.onYouTubeIframeAPIReady = function() {
            PlayerService.newPlayer(attrs.youtubePlayer || 'main-video-player');
          };
        }
      };
    });
})();
