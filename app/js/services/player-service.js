;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlayerService', function($window, PlaylistService) {
      var player;

      Object.defineProperty(this, 'player', {
        enumerable: true,
        configurable: true,
        get: function() {
          return player;
        },
        set: function(value) {
          player = value;
        }
      });

      function onPlayerReady() {
        player.playVideo();
      }

      function onPlayerStateChange(event) {
        // event.data holds event type, one of the following:
        // -1 (unstarted)
        // 0 (ended)
        // 1 (playing)
        // 2 (paused)
        // 3 (buffering)
        // 5 (video cued).

        // if event is 0 (ended), play another video.
        if (event.data === 0) {
          playVideo(PlaylistService.playlist.shift());
        }
      }

      function createNewPlayer(elementId, options) {
        var defaultPlayerOptions = {
          width: $window.innerWidth, // TODO: perhaps move to settings value
          height: $window.innerHeight,
          videoId: 'DT2oAtQtFrg',
          playerVars: {
            autohide: 1,
            autoplay: 1,
            controls: 0,
            disablekb: 0,
            enablejsapi: 1
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        };

        angular.extend(defaultPlayerOptions, options);

        // YT should be available since it comes from iframe_api
        player = new YT.Player(elementId || 'main-video-player', defaultPlayerOptions);
        return player;
      }

      function playVideo(item) {
        if(item) {
          player.loadVideoById({
            videoId: item.videoId,
            startSeconds: 0,
            // endSeconds: 0,
            suggestedQuality: 'large'
          });
        }
      }

      this.createNewPlayer = createNewPlayer;
      this.playVideo = playVideo;

      // Exposed API is:
      // createNewPlayer
      // player
      // playVide
    });

})();
