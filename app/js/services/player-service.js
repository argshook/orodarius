;(function() {
  'use strict';

  angular.module('orodarius')
  .service('PlayerService', function($window) {
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
        // TODO: check for enqued item and play if it exists
        player.loadVideoById({
          videoId: '1DC2xc_Zul8',
          startSeconds: 0,
          // endSeconds,
          suggestedQuality: 'large'
        });
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

    this.createNewPlayer = createNewPlayer;

    // Exposed API is:
    // createNewPlayer
    // player
  });

})();
