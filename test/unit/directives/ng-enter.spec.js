'use strict';

describe('Directive: ngEnter', function() {
  var element, scope, $compile;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;

    scope.callback = angular.noop;
  }));

  function compileWith(callback) {
    var template = _.template('<input type="text" ng-enter="${callback}()" />', {
      callback: callback
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
});
