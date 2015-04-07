;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('ngBindKeys', function($document) {
      return {
        restrict: 'A',
        scope: {
          ngBindKeysOptions: '=ngBindKeys'
        },
        link: function(scope, element, attr) {
          var keyCodes = _(scope.ngBindKeysOptions).map((fn, keyCode) => keyCode).value();

          $document.on('keydown', function(event) {
            var currentKeyCode = event.which || event.keyCode;

            if(scope.ngBindKeysOptions[currentKeyCode]) {
              scope.ngBindKeysOptions[currentKeyCode].call({}, event);
            }
          });
        }
      };
    });

})();
