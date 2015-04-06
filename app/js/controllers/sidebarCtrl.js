;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('sidebarCtrl', function(PlaylistService, PlayerService, $q) {
      this.isOpen = false;
      this.currentSubreddit = 'videos';

      this.toggleSidebar = function() {
        this.isOpen = !this.isOpen;
      };

      this.list = PlaylistService.playlist;

      this.playVideo = function(item) {
        PlayerService.playVideo(item);
        this.isOpen = false;
      };

      this.reloadPlaylist = function() {
        PlaylistService.fetchSubreddit()
          .then((data) => {
            this.list = data;
          }, (error) => {
            console.error(error);
          });
      };

      this.fillPlaylistWith = function(subreddit = "videos") {
        PlaylistService.fetchSubreddit(subreddit).then(data => this.list = data);
        this.currentSubreddit = subreddit;
      };

      this.isListItemCurrentlyPlayed = function(item) {
        return item.videoId === PlayerService.currentVideoId;
      };
    });
})();
