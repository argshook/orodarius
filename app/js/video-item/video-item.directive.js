;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('videoItem', {
      bindings: {
        item: '=videoItem',
        currentSubreddit: '=currentSubreddit',
        index: '='
      },
      templateUrl: 'views/video-item.html',
      controller: ['PlayerService', function(PlayerService) {
        this.playerService = PlayerService;
      }]
    });
})();

