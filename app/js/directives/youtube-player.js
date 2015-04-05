;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('youtubePlayer', function($window) {
      return {
        restrict: 'A',
        replace: false,
        link: function(scope, element, attrs) {
          var player;

          var tag = $('<script>').attr({
            src: 'https://www.youtube.com/iframe_api',
            // async: true
          });
          $('script').eq(0).before(tag);

          $window.onYouTubeIframeAPIReady = function() {
            console.log('ho');
            player = new YT.Player('main-video-player', {
              width: 640, // TODO: change to viewport values
              height: 480,
              videoId: 'M7lc1UVf-VE',
              events: {
                onReady() {
                  console.log('onPlayerReady');
                },
                onStatechange() {
                  console.log('onStateChange');
                }
              }
            });
            console.log(player);
          };
        }
      };
    });
})();
