(() => {
  angular.module('orodarius').directive('ngEnter', () => {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        ngEnter: '&',
        ngEnterOptions: '='
      },
      link: (scope, element, attr) => {
        element.on('keypress', event => {
          if (event.which === 13 || event.keyCode === 13) {
            scope.ngEnter.call();

            if (scope.ngEnterOptions.blurOnEnter) {
              $(element).blur();
            }

            scope.$apply();
          }
        });
      }
    };
  });
})();
