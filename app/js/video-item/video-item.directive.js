;(() => {
  'use strict';

  angular.module('orodarius')
    .directive('videoItem', () => {
      return {
        restrict: 'E',
        scope: {
          item: '=videoItem',
          currentSubreddit: '=currentSubreddit'
        },
        templateUrl: 'views/video-item.html',
        bindToController: true,
        controllerAs: '$ctrl',
        controller: function(PlayerService) {
          this.playerService = PlayerService;
        } 
      };
    });
})();

