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
    });
})();
