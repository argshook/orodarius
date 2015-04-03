'use strict';

describe("Directive: ngInputChange", function() {
  var element, scope, dscope, $compile;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;

    scope.changeFunction = angular.noop;
    spyOn(scope, 'changeFunction');
  }));

  function compile() {
    var validTemplate = '<input type="range" min="0" max="10" value="5" ng-input-change="changeFunction()" />';
    element = $compile(validTemplate)(scope);
  }

  it("should compile successfully", function() {
    compile();
    expect(element.find('input')).toBeTruthy();
  });

  it("should execute passed function on value change", function() {
    compile();
    element.val(10);
    element.triggerHandler({ type: 'change' }); // TODO: this should not be within test IMO
    expect(scope.changeFunction).toHaveBeenCalled();
    expect(element.val()).toBe('10');
  });
});