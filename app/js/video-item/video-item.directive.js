;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('videoItem', {
      bindings: {
        item: '=videoItem',
        currentSubreddit: '=currentSubreddit'
      },
      templateUrl: 'views/video-item.html',
      controller: function(PlayerService) {
        this.playerService = PlayerService;
      }
    });
})();

