(() => {
  'use strict';

  angular.module('orodarius').component('root', {
    bindings: {},
    templateUrl: 'views/root.html',
    controller: [
      '$scope',
      'PlayerService',
      'PlaylistService',
      'SidebarService',
      function($scope, PlayerService, PlaylistService, SidebarService) {
        this.keyboardEventsOptions = {
          38() {
            playPrevious();
          }, // up
          37() {
            playPrevious();
          }, // left
          39() {
            playNext();
          }, // right
          40() {
            playNext();
          }, // down
          32() {
            PlayerService.playOrPause();
          }, // space
          16: event => {
            // shift
            SidebarService.toggle();
            $scope.$apply();
          },
          27: event => {
            // escape
            if (SidebarService.state.get() === 'settings') {
              SidebarService.state.set('main');
            } else {
              SidebarService.close();
            }

            $scope.$apply();
          },
          83: event => {
            // s
            if (SidebarService.state.get() !== 'settings') {
              SidebarService.state.set('settings');
              $scope.$apply();
            }
          }
        };

        function playPrevious() {
          if (PlaylistService.playlist.length) {
            PlayerService.playPrevious();
            $scope.$apply();
          }
        }

        function playNext() {
          if (PlaylistService.playlist.length) {
            PlayerService.playNext();
            $scope.$apply();
          }
        }
      }
    ]
  });
})();
