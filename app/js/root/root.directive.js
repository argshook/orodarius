;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('root', {
      bindings: {},
      templateUrl: 'views/root.html',
      controller: function($scope, PlayerService, PlaylistService, SidebarService) {
        this.keyboardEventsOptions = {
          38() { playPrevious(); }, // up
          37() { playPrevious(); }, // left
          39() { playNext(); }, // right
          40() { playNext(); }, // down
          32() { PlayerService.playOrPause(); }, // space
          16: event => { // shift
            SidebarService.toggle();
            $scope.$apply();
          },
          27: event => { // escape
            SidebarService.close();
            $scope.$apply();
          }
        };

        function playPrevious() {
          if(PlaylistService.playlist.length) {
            PlayerService.playPrevious();
            $scope.$apply();
          }
        }

        function playNext() {
          if(PlaylistService.playlist.length) {
            PlayerService.playNext();
            $scope.$apply();
          }
        }
      }
    });
})()

