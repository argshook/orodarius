'use strict';

describe('Directive: ngEnter', function() {
  var element, scope, $compile;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;

    scope.callback = angular.noop;
  }));

  function compileWith(callback, options) {
    options = options || {};
    var template = _.template('<input type="text" ng-enter="${callback}()" ng-enter-options="${options}" />', {
      callback: callback,
      options: JSON.stringify(options).replace(/"/g, "'")
    });
    element = $compile(template)(scope);
    scope.$digest();
  }

  it('should invoke callback when enter key is pressed', function() {
    spyOn(scope, 'callback');
    compileWith('callback');
    var event = $.Event('keypress');
    event.which = 13;
    event.keyCode = 13;
    element.triggerHandler(event);
    expect(scope.callback).toHaveBeenCalled();
  });

  it('should blur element if ng-enter-options have blurOnEnter set to true', function() {
    compileWith('callback', { blurOnEnter: true });
    spyOn(element[0], 'blur');
    var event = $.Event('keypress');
    event.which = 13;
    element.triggerHandler(event);
    expect(element[0].blur).toHaveBeenCalled();
  });
});
