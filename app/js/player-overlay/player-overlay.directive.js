;(() => {
  'use strict';

  angular
    .module('orodarius')
    .directive('playerOverlay', playerOverlayDirective);

  function playerOverlayDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'views/player-overlay.html',
      controllerAs: '$ctrl',
      controller: ['PlayerService', function(PlayerService) {
        this.PlayerService = PlayerService;
      }]
    };
  }
})();

