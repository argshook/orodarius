;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlayerService', function($window, PlaylistService) {
      var player,
          currentVideoId,
          isPlaying = false;

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
        },
        isPlaying: {
          enumerable: true,
          configurable: true,
          get: function() {
            return isPlaying;
          },
          set: function(value) {
            isPlaying = value;
          }
        },
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
          playNext();
        }
      }

      function onPlayerError(event) {
        // https://developers.google.com/youtube/iframe_api_reference#Events
        if([2, 5, 100, 101, 150].indexOf(event.data) != -1) {
          playNext();
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
          // TODO: skip misunderstood urls for now
          if(item.url === false) {
            playNext();
            return;
          }

          player.loadVideoById({
            videoId: item.videoId,
            startSeconds: 0,
            // endSeconds: 0,
            suggestedQuality: 'large'
          });
          currentVideoId = item.videoId;
          isPlaying = true;
        }
      }

      function playNext() {
        var nextVideoItemIndex = _.findIndex(PlaylistService.playlist, function(item) {
          return item.videoId === currentVideoId;
        }) + 1;

        if(nextVideoItemIndex === PlaylistService.playlist.length) {
          PlaylistService.fetchSubreddit(
            PlaylistService.currentSubreddit,
            PlaylistService.afterTag
          ).then(function(data) {
            playVideo(PlaylistService.playlist[nextVideoItemIndex]);
          });
        } else {
          playVideo(PlaylistService.playlist[nextVideoItemIndex]);
        }
      }

      function playPrevious() {
        var previousVideoItemIndex = _.findIndex(PlaylistService.playlist, function(item) {
          return item.videoId === currentVideoId;
        }) - 1;

        playVideo(PlaylistService.playlist[previousVideoItemIndex < 0 ? 0 : previousVideoItemIndex]);
      }

      function playOrPause() {
        if(isPlaying) {
          player.pauseVideo();
          isPlaying = false;
        } else {
          player.playVideo();
          isPlaying = true;
        }
      }

      // TODO: not nice, refactor
      this.createNewPlayer = createNewPlayer;
      this.playVideo = playVideo;
      this.playNext = playNext;
      this.playPrevious = playPrevious;
      this.playOrPause = playOrPause;

      // Exposed API is:
      // createNewPlayer
      // player
      // currentVideoId
      // isPlaying
      // playVideo
      // playPrevious
      // playNext
    });

})();
