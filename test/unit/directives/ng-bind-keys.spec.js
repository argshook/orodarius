'use strict';

describe('Directive: ngBindKeys', function() {
  var element, scope, $compile, $document;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$compile_, _$rootScope_, _$document_) {
    $compile = _$compile_;
    scope = _$rootScope_.$new();
    $document = _$document_;

    scope.ngBindKeysOptions = {
      37: angular.noop, // left
      38: angular.noop, // up
      39: angular.noop, // right
      40: angular.noop, // down
      106: angular.noop, // j
      107: angular.noop, // k
      32: angular.noop, // space
      16: angular.noop // shift
    };
  }));

  function compile(functionName) {
    var template = _.template('<div ng-bind-keys="${functionName}"></div>', {
      functionName: functionName || 'ngBindKeysOptions'
    });
    element = $compile(template)(scope);
    scope.$digest();
  }

  function triggerEventWithKeyCode(keyCode) {
    var event = $.Event('keydown');
    event.which = keyCode;
    $document.triggerHandler(event);
  }

  it('should compile successfully', function() {
    compile();
    expect(element).toBeTruthy();
  });

  it('should bind event listeners to element from passed object', function() {
    var keyCodes = _(scope.ngBindKeysOptions).map(function(fn, keyCode) { return keyCode; }).value();
    compile()
    keyCodes.forEach(function(code) {
      spyOn(scope.ngBindKeysOptions, code);
      triggerEventWithKeyCode(code);
      expect(scope.ngBindKeysOptions[code]).toHaveBeenCalled();
    })
  });
});
