;(function() {
  'use strict';

  angular
    .module('orodarius')
    .directive('ngScrollTo', ['$rootScope', '$timeout', function($rootScope, $timeout) {
      return {
        restrict: 'A',
        scope: {
          ngScrollTo: '=',
          offsetTop: '@'
        },
        link: function(scope, element) {
          let $element = $(element);

          $rootScope.$on('orodariusScrollIntoView', () => {
            $timeout(() => {
              let elementToScrollTo = $(element).find(scope.ngScrollTo);

              if(elementToScrollTo.length) {
                $element.get(0).scrollTop = 0;
                $element.get(0).scrollTop = elementToScrollTo.position().top - (parseInt($element.css('padding-top'), 10) || 0) - parseInt(scope.offsetTop, 10);
              }
            }, 100);
          });
        }
      };
    }]);
})();

