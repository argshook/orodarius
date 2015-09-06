;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('sidebarCtrl', function(
      $scope, $rootScope, $http, $timeout, $window,
      PlaylistService, PlayerService, SidebarService, LastSubredditsService,
      SettingsService
    ) {
      // TODO: shouldn't expose the whole service just the parts needed.
      $scope.sidebarService = SidebarService;
      $scope.playlistService = PlaylistService;
      $scope.playerService = PlayerService;
      $scope.lastSubreddits = LastSubredditsService.list;

      this.currentSubreddit = '';
      this.isLoading = false;
      this.settings = SettingsService.list;
      this.lastUpdatedData = {};

      this.toggleSidebar = function() {
        SidebarService.toggle();
      };

      this.toggleFocusForced = function() {
        SettingsService.toggle('isFocusForced');
        $window[(SettingsService.list.isFocusForced ? 'add' : 'remove') + 'EventListener']('blur', windowBlurHanlder);
      };

      this.toggleStickySidebar = function() {
        SettingsService.toggle('isSidebarSticky');
      };

      this.playVideo = function(item) {
        PlayerService.playVideo(item);

        if(!SettingsService.list.isSidebarSticky) {
          SidebarService.toggle();
        }
      };

      this.fillPlaylistWith = function(subreddit = "videos") {
        PlaylistService.clear();
        this.currentSubreddit = subreddit;
        this.isLoading = true;

        PlaylistService
          .fetchSubreddit(subreddit)
          .then(data => {
            PlayerService.playVideo(PlaylistService.playlist[0]);
            this.isLoading = false;
          });
      };

      this.expandPlaylist = function() {
        this.isLoading = true;

        PlaylistService
          .expandPlaylist()
          .then(() => this.isLoading = false);
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

      this.isListItemCurrentlyPlayed = function(item) {
        return item.videoId === PlayerService.currentVideoItem.videoId;
      };

      if(SettingsService.list.isFocusForced) {
        $window.addEventListener('blur', windowBlurHanlder);
      }

      this.getLastUpdated = function() {
        $http.get('https://api.github.com/repos/argshook/orodarius/commits/gh-pages')
          .then(data => this.lastUpdatedData = {
              url: data.data.html_url,
              date: data.data.commit.author.date,
              message: data.data.commit.message
            });
      };

      this.getLastUpdated();

      // TODO: need better implementation for firefox. and maybe other browsers
      function windowBlurHanlder() {
        $timeout(function() {
          $window.focus();
        }, 100);
      }
    });
})();
