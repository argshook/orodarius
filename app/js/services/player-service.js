;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlayerService', function($window, $rootScope, PlaylistService) {
      var player,
          currentVideoItem = {},
          self = this; // :(

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
        currentVideoItem: {
          enumerable: true,
          configurable: true,
          get: function() {
            return currentVideoItem;
          },
          set: function(value) {
            currentVideoItem = value;
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
          self.playNext();
        }
      }

      function onPlayerError(event) {
        console.log(event);
        // https://developers.google.com/youtube/iframe_api_reference#Events
        if([2, 5, 100, 101, 150].indexOf(event.data) != -1) {
          // TODO: stop trying after n tries
          self.playNext();
        }
      }

      function currentItemMatcher(item) {
        return item.videoId === currentVideoItem.videoId &&
               item.name === currentVideoItem.name &&
               item.created === currentVideoItem.created;
      }

      this.isPlaying = false;

      this.createNewPlayer = function(elementId, options) {
        var defaultPlayerOptions = {
          width: $window.innerWidth, // TODO: perhaps move to settings value
          height: $window.innerHeight,
          videoId: 'DT2oAtQtFrg',
          playerVars: {
            autohide: 1,
            autoplay: 0,
            controls: 1,
            disablekb: 1,
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
      };

      this.playVideo = function(item) {
        if(item) {
          // TODO: skip misunderstood urls for now
          if(item.url === false) {
            this.playNext();
            return;
          }

          player.loadVideoById({
            videoId: item.videoId,
            startSeconds: item.starttime || 0,
            suggestedQuality: 'default'
          });
          currentVideoItem = item;
          this.isPlaying = true;
          $rootScope.$emit('videoPlay', currentVideoItem);
        }
      };

      this.playNext = function() {
        var nextVideoItemIndex = _.findIndex(PlaylistService.playlist, currentItemMatcher) + 1;

        if(nextVideoItemIndex === PlaylistService.playlist.length) {
          PlaylistService.fetchSubreddit(
            PlaylistService.currentSubreddit,
            PlaylistService.afterTag
          ).then(function(data) {
            self.playVideo(PlaylistService.playlist[nextVideoItemIndex]);
          });
        } else {
          this.playVideo(PlaylistService.playlist[nextVideoItemIndex]);
        }
      };

      this.playPrevious = function() {
        var previousVideoItemIndex = _.findIndex(PlaylistService.playlist, currentItemMatcher) - 1;
        this.playVideo(PlaylistService.playlist[previousVideoItemIndex < 0 ? 0 : previousVideoItemIndex], 'previous');
      };

      this.playOrPause = function() {
        if(this.isPlaying) {
          player.pauseVideo();
          this.isPlaying = false;
        } else {
          player.playVideo();
          this.isPlaying = true;
        }
      };

      this.resetCurrentVideoItem = function() {
        currentVideoItem = undefined;
      };
    });

})();
