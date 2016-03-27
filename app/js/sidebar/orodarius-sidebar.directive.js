;(function() {
  'use strict';

  angular
    .module('orodarius')
    .component('orodariusSidebar', {
      bindings: {},
      templateUrl: 'views/sidebar/sidebar.html',
      controller: function(PlaylistService, PlayerService, SidebarService, SettingsService) {
        /* properties */
        this.currentSubreddit = '';
        this.isLoading = false;
        this.playlist = PlaylistService.playlist;

        /* methods */
        this.getIsOpen = getIsOpen;
        this.getCurrentVideoItem = getCurrentVideoItem;
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

        function getCurrentVideoItem() {
          return PlayerService.currentVideoItem;
        }
      }
    }
  );
})();

