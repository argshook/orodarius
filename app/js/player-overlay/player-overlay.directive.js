;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('playerOverlay', playerOverlayComponent());

  function playerOverlayComponent() {
    return {
      bindings: {},
      templateUrl: 'views/player-overlay.html',
      controller: function(PlayerService) {
        this.getCurrentVideoItem = () => PlayerService.currentVideoItem;
      }
    };
  }
})();

