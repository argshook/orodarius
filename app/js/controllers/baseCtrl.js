;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('baseCtrl', function($scope, PlayerService, SidebarService) {
      this.keyboardEventsOptions = {
        37: function(event) {
          console.log('left!');
          PlayerService.playPrevious();
          $scope.$apply();
        },
        39: function(event) {
          console.log('right!');
          PlayerService.playNext();
          $scope.$apply();
        },
        32: function(event) {
          console.log('space!');
          PlayerService.playOrPause();
        },
        16: event => {
          console.log('shift');
          SidebarService.toggle();
          $scope.$apply();
        }
      };
    });
})();
