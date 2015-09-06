;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlayerService', function($window, $rootScope, PlaylistService) {
      this.youtubePlayer = null; // youtube iframe api instance
      this.isPlaying = false;
      this.currentVideoItem = {};

      this.markCurrentVideoItemWithError = function(errorCode) {
        var currentItemIndex = _.findIndex(PlaylistService.playlist, item => item.ownId === this.currentVideoItem.ownId);

        PlaylistService.playlist[currentItemIndex].error = {
          code: errorCode,
          message: errorMessage()
        };

        function errorMessage() {
          switch (errorCode) {
            case 2:
              return "can't parse video ID";
            case 5:
              return "problem with HTML5 Youtube player";
            case 100:
              return "video is private or removed";
            case 101:
            case 150:
              return "uploader does not allow embedded playback";
          }
        }
      };

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
          }
        };

        angular.extend(defaultPlayerOptions, options);

        // YT should be available since it comes from iframe_api
        this.youtubePlayer = new YT.Player(elementId || 'main-video-player', defaultPlayerOptions);

        this.youtubePlayer.addEventListener('onReady', onPlayerReady.bind(this));
        this.youtubePlayer.addEventListener('onError', onPlayerError.bind(this));
        this.youtubePlayer.addEventListener('onStateChange', onPlayerStateChange.bind(this));

        return this.youtubePlayer;
      };

      this.playVideo = function(item) {
        if(this.youtubePlayer && this.youtubePlayer.loadVideoById && item) {
          // TODO: skip misunderstood urls for now
          if(item.url === false) {
            this.playNext();
            return;
          }

          this.youtubePlayer.loadVideoById({
            videoId: item.videoId,
            startSeconds: item.starttime || 0,
            suggestedQuality: 'default'
          });

          this.currentVideoItem = item;
          this.isPlaying = true;
        }
      };

      this.playNext = function() {
        var nextVideoItemIndex = _.findIndex(PlaylistService.playlist, currentItemMatcher.bind(this)) + 1;

        if(nextVideoItemIndex === PlaylistService.playlist.length) {
          PlaylistService.expandPlaylist().then(data => {
            this.playVideo(PlaylistService.playlist[nextVideoItemIndex]);
          });
        } else {
          this.playVideo(PlaylistService.playlist[nextVideoItemIndex]);
        }
      };

      this.playPrevious = function() {
        var previousVideoItemIndex = _.findIndex(PlaylistService.playlist, currentItemMatcher.bind(this)) - 1;
        this.playVideo(PlaylistService.playlist[previousVideoItemIndex < 0 ? 0 : previousVideoItemIndex], 'previous');
      };

      this.playOrPause = function() {
        if(this.isPlaying) {
          this.youtubePlayer.pauseVideo();
          this.isPlaying = false;
        } else {
          this.youtubePlayer.playVideo();
          this.isPlaying = true;
        }
      };

      this.resetCurrentVideoItem = function() {
        this.currentVideoItem = undefined;
      };

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
          this.playNext();
        }
      }

      function onPlayerError(event) {
        // https://developers.google.com/youtube/iframe_api_reference#onError
        if([2, 5, 100, 101, 150].indexOf(event.data) != -1) {
          this.markCurrentVideoItemWithError(event.data);
          // TODO: stop trying after n tries
          this.playNext();
        }
      }

      function currentItemMatcher(item) {
        return item.ownId === this.currentVideoItem.ownId;
      }
    });
})();
