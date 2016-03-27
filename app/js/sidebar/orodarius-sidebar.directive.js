;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('orodariusSidebar', function() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/sidebar/sidebar.html',
        controllerAs: '$ctrl',
        bindToController: true,
        controller: function($scope, PlaylistService, PlayerService, SidebarService, SettingsService) {
          // TODO: shouldn't expose the whole service just the parts needed.
          $scope.playerService = PlayerService;

          /* properties */
          this.currentSubreddit = '';
          this.isLoading = false;
          this.playlist = PlaylistService.playlist;

          /* methods */
          this.getIsOpen = getIsOpen;
          this.toggle = toggle;
          this.playVideo = playVideo;
          this.expandPlaylist = expandPlaylist;
          this.fillPlaylistWith = fillPlaylistWith;

          PlaylistService.subscribePlaylist(() => {
            this.playlist = PlaylistService.playlist;
          });

          function playVideo(item) {
            PlayerService.playVideo(item);

            if(!SettingsService.list.isSidebarSticky) {
              SidebarService.toggle();
            }
          };

          function expandPlaylist() {
            this.isLoading = true;

            PlaylistService
              .expandPlaylist()
              .then(() =>  this.isLoading = false);
          };

          function fillPlaylistWith(subreddit) {
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

          function getIsOpen() {
            return SidebarService.isOpen;
          }

          function toggle() {
            SidebarService.toggle();
          }
        }
      };
    });
})();

