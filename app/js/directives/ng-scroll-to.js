;(function() {
  'use strict';

  angular
    .module('orodarius')
    .directive('ngScrollTo', ['$rootScope', function($rootScope) {
      return {
        restrict: 'A',
        scope: {
          ngScrollTo: '=',
        },
        link: function(scope, element) {
          $rootScope.$on('orodariusScrollIntoView', () => {
            element.find(scope.ngScrollTo).get(0).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      };
    }]);
})();

