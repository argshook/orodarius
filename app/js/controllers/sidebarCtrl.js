;(function() {
  'use strict';

  angular.module('orodarius')
    // TODO: move to directive with template
    .controller('sidebarCtrl', function($scope, PlaylistService, PlayerService, SidebarService) {
      $scope.isOpen = SidebarService.isOpen;
      this.currentSubreddit = 'videos';
      this.isListLoading = false;

      $scope.$watch(
        () => SidebarService.isOpen,
        (isOpen) => {
          $scope.isOpen = isOpen;
        }
      );

      this.toggleSidebar = function() {
        SidebarService.toggle();
        $scope.$digest();
        this.list = PlaylistService.playlist;
      };

      this.list = PlaylistService.playlist;

      this.playVideo = function(item) {
        PlayerService.playVideo(item);
        SidebarService.toggle();
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

      function init() {
        this.fillPlaylistWith('videos');
        this.subredditQuery = 'videos';
      }

      // init.call(this);
    });
})();
