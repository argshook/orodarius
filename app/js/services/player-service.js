;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlayerService', function($window) {
      var players = [];

      function registerPlayer(player) {
        players.push(player);
      }

      function newPlayer(elementId, options) {
        var player,
            defaultPlayerOptions = {
              width: $window.innerWidth, // TODO: perhaps move to settings value
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
            };

        angular.extend(defaultPlayerOptions, options);

        player = new YT.Player(elementId || 'main-video-player', defaultPlayerOptions);

        registerPlayer(player);
      }

      return {
        newPlayer,
        players
      };
    });

})();
