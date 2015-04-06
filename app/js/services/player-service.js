;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlayerService', function($window, PlaylistService) {
      var player,
          currentVideoId;

      Object.defineProperties(this, {
        player: {
          enumerable: true,
          configurable: true,
          get: function() {
            return player;
          },
          set: function(value) {
            player = value;
          }
        },
        currentVideoId: {
          enumerable: true,
          configurable: true,
          get: function() {
            return currentVideoId;
          },
          set: function(value) {
            currentVideoId = value;
          }
        }
      });

      function onPlayerReady() {
        // player.playVideo();
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
          // TODO: play next video in playlist
          playVideo(PlaylistService.playlist.shift());
        }
      }

      function onPlayerError(event) {
        // https://developers.google.com/youtube/iframe_api_reference#Events
        // 101 – The owner of the requested video does not allow it to be played in embedded players.
        // 150 – This error is the same as 101. It's just a 101 error in disguise!
        if(event.data === 101 || event.data === 150) {
          // TODO: play next video in playlist
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
            autoplay: 0,
            controls: 1,
            disablekb: 0,
            enablejsapi: 1
          },
          events: {
            onReady: onPlayerReady,
            onError: onPlayerError,
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
          currentVideoId = item.videoId;
        }
      }

      // TODO: not nice, refactor
      this.createNewPlayer = createNewPlayer;
      this.playVideo = playVideo;

      // Exposed API is:
      // createNewPlayer
      // player
      // currentVideoId
      // playVideo
    });

})();
