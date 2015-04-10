;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('baseCtrl', function($scope, PlayerService, SidebarService) {
      this.keyboardEventsOptions = {
        37: function(event) { // left
          PlayerService.playPrevious();
          $scope.$apply();
        },
        39: function(event) { // right
          PlayerService.playNext();
          $scope.$apply();
        },
        32: function(event) { // space
          PlayerService.playOrPause();
        },
        16: event => { // shift
          SidebarService.toggle();
          $scope.$apply();
        }
      };
    });
})();
