(function() {
  'use strict';

  angular.module('orodarius').component('sidebar', {
    bindings: {},
    templateUrl: 'views/sidebar/sidebar.html',
    controller: [
      'PlaylistService',
      'PlayerService',
      'SidebarService',
      'SettingsService',
      '$rootScope',
      function(
        PlaylistService,
        PlayerService,
        SidebarService,
        SettingsService,
        $rootScope
      ) {
        /* properties */
        this.currentSubreddit = '';
        this.isLoading = false;
        this.playlist = PlaylistService.playlist;
        this.currentState = SidebarService.state.get();

        /* methods */
        this.getIsOpen = getIsOpen;
        this.toggle = toggle;
        this.playVideo = playVideo;
        this.expandPlaylist = expandPlaylist;
        this.fillPlaylistWith = fillPlaylistWith;
        this.toggleSettingsState = toggleSettingsState;

        PlaylistService.subscribePlaylist(() => {
          this.playlist = PlaylistService.playlist;
        });

        SidebarService.state.subscribe(state => {
          this.currentState = state;

          if (state === 'main') {
            $rootScope.$broadcast('orodariusScrollIntoView');
          }
        });

        function playVideo(item) {
          PlayerService.playVideo(item);

          if (!SettingsService.list.isSidebarSticky) {
            SidebarService.toggle();
          }
        }

        function expandPlaylist() {
          this.isLoading = true;

          PlaylistService.expandPlaylist().then(() => (this.isLoading = false));
        }

        function fillPlaylistWith(subreddit) {
          PlaylistService.clear();

          if (!!subreddit && !this.isLoading) {
            this.currentSubreddit = subreddit;
            this.isLoading = true;

            PlaylistService.fetchSubreddit(subreddit).then(playlist => {
              this.isLoading = false;
              this.playlist = playlist;

              PlayerService.playVideo(PlaylistService.playlist[0]);
            });
          }

          if (!subreddit) {
            this.isLoading = false;
          }
        }

        function getIsOpen() {
          return SidebarService.isOpen;
        }

        function toggle() {
          SidebarService.toggle();
        }

        function toggleSettingsState(state) {
          let current = SidebarService.state.get();
          SidebarService.state.set(current === 'main' ? 'settings' : 'main');
        }
      }
    ]
  });
})();
