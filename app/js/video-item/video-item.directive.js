;() => {
  'use strict';

  angular.module('orodarius')
    .directive('videoItem', () => {
      return {
        restrict: 'E',
        templateUrl: 'views/video-item.html'
      };
    });
}();
