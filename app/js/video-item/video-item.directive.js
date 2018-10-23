(() => {
  'use strict';

  angular.module('orodarius').component('videoItem', {
    bindings: {
      item: '=videoItem',
      currentSubreddit: '=currentSubreddit',
      index: '='
    },
    templateUrl: 'views/video-item.html',
    controller: [
      'PlayerService',
      function(PlayerService) {
        /* properties */
        this.playerService = PlayerService;

        /* methods */
        this.getIsIdCurrent = getIsIdCurrent;

        function getIsIdCurrent(id = '') {
          return id === PlayerService.currentVideoItem.ownId;
        }
      }
    ]
  });
})();
