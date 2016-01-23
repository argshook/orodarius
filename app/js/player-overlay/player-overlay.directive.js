;(() => {
  'use strict';

  angular
    .module('orodarius')
    .directive('playerOverlay', playerOverlayDirective);

  function playerOverlayDirective() {
    return {
      restrict: 'E',
      scope: false,
      templateUrl: 'views/player-overlay.html',
      controllerAs: 'vm',
      controller: ['PlayerService', function(PlayerService) {
        this.PlayerService = PlayerService;
      }]
    };
  }
})();

