;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('ngInputChange', function() {
      return {
        restrict: 'A',
        scope: {
          ngInputChange: '&'
        },
        replace: false,
        link: function(scope, element, attrs) {
          $(element).on('change input', function() {
            scope.ngInputChange.call(null);
          });

          scope.$on('$destroy', function() {
            $(element).off('change input');
          });
        }
      };
    });

})();
