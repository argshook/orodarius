;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('sidebarCtrl', function($scope, PlaylistService, PlayerService) {
      this.isOpen = true;
      this.currentSubreddit = 'videos';
      this.isListLoading = false;

      this.toggleSidebar = function() {
        this.isOpen = !this.isOpen;
        this.list = PlaylistService.playlist;
        $scope.$apply();
      };

      this.list = PlaylistService.playlist;

      this.playVideo = function(item) {
        PlayerService.playVideo(item);
        this.isOpen = false;
      };

      this.fillPlaylistWith = function(subreddit = "videos") {
        this.isListLoading = true;
        PlaylistService.fetchSubreddit(subreddit).then(data => {
          this.isListLoading = false;
          this.list = data;
        });
        this.currentSubreddit = subreddit;
      };

      this.isListItemCurrentlyPlayed = function(item) {
        return item.videoId === PlayerService.currentVideoId;
      };

      this.keyBindOptions = {
        16: event => {
          this.toggleSidebar();
        }
      };

      function init() {
        this.fillPlaylistWith('videos');
        this.subredditQuery = 'videos';
      }

      init.call(this);
    });
})();
