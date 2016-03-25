;(() => {
  'use strict';

  angular.module('orodarius')
    .directive('videoItem', () => {
      return {
        restrict: 'E',
        scope: {
          item: '=videoItem'
        },
        templateUrl: 'views/video-item.html'
      };
    });
})();

