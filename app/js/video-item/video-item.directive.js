;() => {
  'use strict';

  angular.module('orodarius')
    .directive('videoItem', () => {
      return {
        restrict: 'E',
        scope: true,
        templateUrl: 'views/video-item.html'
      };
    });
}();
