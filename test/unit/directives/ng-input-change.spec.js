'use strict';

describe('Directive: ngInputChange', function() {
  var element, scope, dscope, $compile;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;

    scope.changeFunction = angular.noop;
    spyOn(scope, 'changeFunction');
  }));

  function compile() {
    var validTemplate =
      '<input type="range" min="0" max="10" value="5" ng-input-change="changeFunction()" />';
    element = $compile(validTemplate)(scope);
  }

  it('should compile successfully', function() {
    compile();
    expect(element.find('input')).toBeTruthy();
  });

  it('should execute passed function on value change', function() {
    compile();
    $(element).val(10);
    $(element).triggerHandler('change');
    expect(scope.changeFunction).toHaveBeenCalled();
    expect(element.val()).toBe('10');
  });

  it('should detach event listeners on $destroy', function() {
    compile();
    spyOn($.fn, 'off').and.callThrough();
    scope.$broadcast('$destroy');
    scope.$digest();
    //$.fn.off.calls.allArgs()[0]
    expect($.fn.off).toHaveBeenCalledWith('change input');
  });
});
