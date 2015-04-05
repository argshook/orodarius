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
            async: true
          });

          // this is suggested here:
          // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
          // not sure if it really needs to be first
          $('script').eq(0).before(tag);

          $window.onYouTubeIframeAPIReady = function() {
            // TODO: move player to service
            player = new YT.Player('main-video-player', {
              width: $window.innerWidth,
              height: $window.innerHeight,
              videoId: 'DT2oAtQtFrg',
              playerVars: {
                autohide: 1,
                autoplay: 1,
                // controls: 0,
                disablekb: 0,
                enablejsapi: 1
              },
              events: {
                onReady: function() {
                  console.log('onReady');
                  player.playVideo();
                },
                onStateChange: function(event) {
                  // event.data holds event type, one of the following:
                  // -1 (unstarted)
                  // 0 (ended)
                  // 1 (playing)
                  // 2 (paused)
                  // 3 (buffering)
                  // 5 (video cued).

                  // if event is 0 (ended), play another video.
                  if (event.data ===  0) {
                    player.loadVideoById({
                      videoId: '1DC2xc_Zul8',
                      startSeconds: 0,
                      // endSeconds,
                      suggestedQuality: 'large'
                    });
                  }
                }
              }
            });
          };
        }
      };
    });
})();
