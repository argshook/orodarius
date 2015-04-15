;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('playerOverlayCtrl', function($scope, PlayerService, PlaylistService) {
      $scope.playerService = PlayerService;
    });
})();
