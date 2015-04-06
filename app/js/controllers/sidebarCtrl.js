;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('sidebarCtrl', function(PlaylistService, PlayerService) {
      this.isOpen = false;

      this.toggleSidebar = function() {
        this.isOpen = !this.isOpen;
      };

      this.list = PlaylistService.playlist;

      this.playVideo = function(item) {
        PlayerService.playVideo(item);
      };

      this.reloadPlaylist = function() {
        PlaylistService.fetchSubreddit()
          .then((data) => {
            this.list = data;
          }, (error) => {
            console.error(error);
          });
      };
    });
})();
