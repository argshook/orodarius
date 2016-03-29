;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('ngScrollOn', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        scope: {
          ngScrollOn: '='
        },
        link: function(scope, element, attr) {
          // TODO: ngScrollOn should contain currentVideoItem
          // not good, this directive should not care about what it gets,
          // just catch change

          scope.$watch('ngScrollOn', function(newVal, oldVal) {
            $timeout(function() {
              var $currentItem = $(element).find('.current').parent().prev().prev();

              if($currentItem.length) {
                // scrollIntoView is native, believe it or not
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
                $currentItem[0].scrollIntoView({
                  block: 'start',
                  behavior: 'smooth'
                });
              }
            });
          });
        }
      };
    }]);
})();
