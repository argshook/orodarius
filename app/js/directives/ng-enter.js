;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('ngEnter', function() {
      return {
        restrict: 'A',
        replace: false,
        scope: {
          ngEnter: '&'
        },
        link: function(scope, element, attr) {
          element.on('keypress', function(event) {
            if(event.which === 13 || event.keyCode === 13) {
              scope.ngEnter.call();
            }
          });
        }
      };
    });
})();
