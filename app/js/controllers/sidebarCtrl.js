;(function() {
  'use strict';

  angular.module('orodarius')
    // TODO: move to directive with template
    .controller('sidebarCtrl', function($scope, $rootScope, $timeout, PlaylistService, PlayerService, SidebarService) {
      $scope.sidebarService = SidebarService;
      $scope.playlistService = PlaylistService;
      $scope.playerService = PlayerService;

      $scope.isSidebarSticky = false;
      $scope.currentSubreddit = '';

      // TODO: not nice
      $rootScope.$on('videoPlay', function(currentVideoItem) {
        $timeout(function() {
          $scope.$apply();
        });
      });

      this.toggleSidebar = function() {
        $scope.sidebarService.toggle();
      };

      this.playVideo = function(item) {
        $scope.playerService.playVideo(item);

        if(!$scope.isSidebarSticky) {
          $scope.sidebarService.toggle();
        }
      };

      this.fillPlaylistWith = function(subreddit = "videos") {
        $scope.playlistService.clear();
        $scope.currentSubreddit = subreddit;
        $scope.playlistService.fetchSubreddit(subreddit).then(data => {
          $scope.playerService.playVideo($scope.playlistService.playlist[0]);
        });
      };

      this.expandPlaylist = function() {
        $scope.playlistService.expandPlaylist();
      };

      this.suggestedSubreddits = [
        { name: 'videos' },
        { name: 'youtubehaiku' },
        { name: 'artisanvideos' },
        { name: 'listentothis' },
        { name: 'gamephysics' },
        { name: 'music' },
        { name: 'videos+youtubehaiku' }
      ];

      $scope.isListItemCurrentlyPlayed = function(item) {
        return item.videoId === $scope.playerService.currentVideoItem.videoId;
      };
    });
})();
