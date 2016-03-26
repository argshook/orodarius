;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('orodariusSidebar', function() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/orodarius-sidebar.html',
        controllerAs: 'sidebarCtrl',
        bindToController: true,
        controller: function($scope, PlaylistService, PlayerService, SidebarService, SettingsService) {
          // TODO: shouldn't expose the whole service just the parts needed.
          $scope.sidebarService = SidebarService;
          $scope.playerService = PlayerService;

          this.currentSubreddit = '';
          this.isLoading = false;
          this.playlist = PlaylistService.playlist;

          PlaylistService.subscribePlaylist(() => {
            this.playlist = PlaylistService.playlist;
          });

          this.playVideo = function(item) {
            PlayerService.playVideo(item);

            if(!SettingsService.list.isSidebarSticky) {
              SidebarService.toggle();
            }
          };

          this.expandPlaylist = function() {
            this.isLoading = true;

            PlaylistService
              .expandPlaylist()
              .then(() =>  this.isLoading = false);
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

          this.isListItemCurrentlyPlayed = item => item.videoId === PlayerService.currentVideoItem.videoId;

          this.fillPlaylistWith = function(subreddit) {
            PlaylistService.clear();

            if(!!subreddit) {
              this.currentSubreddit = subreddit;
              this.isLoading = true;

              PlaylistService
              .fetchSubreddit(subreddit)
              .then(playlist => {
                this.isLoading = false;
                this.playlist = playlist;
                PlayerService.playVideo(PlaylistService.playlist[0]);
              });
            }
          };
        }
      };
    });
})();

