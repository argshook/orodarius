;(function () {
  'use strict';

  angular
    .module('orodarius')
    .directive('orodariusSidebarHead', function() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/sidebar/sidebar-head.html',
        controllerAs: '$ctrl',
        controller: function(SettingsService, PlaylistService, PlayerService, SidebarService, $window, $timeout, $interval) {
          this.sidebarService = SidebarService;
          this.settings = SettingsService.list;

          this.toggleStickySidebar = function() {
            SettingsService.toggle('isSidebarSticky');
          };

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

          this.toggleSidebar = function() {
            SidebarService.toggle();
          };

          this.toggleFocusForced = function() {
            SettingsService.toggle('isFocusForced');
            $window[(SettingsService.list.isFocusForced ? 'add' : 'remove') + 'EventListener']('blur', windowBlurHanlder);
          };

          this.toggleFlashMode = function() {
            SettingsService.toggle('isFlashModeEnabled');
          }

          if(SettingsService.list.isFocusForced) {
            $window.addEventListener('blur', windowBlurHanlder);
          }

          // TODO: need better implementation for firefox. and maybe other browsers
          function windowBlurHanlder() {
            $timeout(() => $window.focus(), 100);
          }
        }
      };
    });
}());

