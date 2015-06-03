;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('sidebarCtrl', function(
      $scope, $rootScope, $http, $timeout, $window,
      PlaylistService, PlayerService, SidebarService, LastSubredditsService
    ) {
      // TODO: shouldn't expose the whole service just the parts needed.
      $scope.sidebarService = SidebarService;
      $scope.playlistService = PlaylistService;
      $scope.playerService = PlayerService;
      $scope.lastSubreddits = LastSubredditsService.list;

      $scope.currentSubreddit = '';

      $scope.isSidebarSticky = false;
      $scope.isFocusForced = false;

      this.lastUpdatedData = {};

      // TODO: not nice
      $rootScope.$on('videoPlay', function(currentVideoItem) {
        $timeout(function() {
          $scope.$apply();
        });
      });

      this.toggleSidebar = function() {
        $scope.sidebarService.toggle();
      };

      this.toggleForceFocus = function() {
        $scope.isFocusForced = !$scope.isFocusForced;
        $window[($scope.isFocusForced ? 'add' : 'remove') + 'EventListener']('blur', windowBlurHanlder);
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

      this.getLastUpdated = function() {
        $http.get('https://api.github.com/repos/argshook/orodarius/commits/master')
          .then(data => this.lastUpdatedData = {
              url: data.data.html_url,
              date: data.data.commit.author.date,
              message: data.data.commit.message
            });
      };

      this.getLastUpdated();

      function windowBlurHanlder() {
        $timeout(function() {
          $window.focus();
        }, 100);
      }
    });
})();
