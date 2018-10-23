'use strict';

describe('Directive: ngBindKeys', function() {
  var compile, $document;

  var parentScopeMock = {
    options: {
      37: _.noop, // left
      38: _.noop, // up
      39: _.noop, // right
      40: _.noop, // down
      106: _.noop, // j
      107: _.noop, // k
      32: _.noop, // space
      16: _.noop // shift
    }
  };

  beforeEach(module('orodarius'));
  beforeEach(inject(function($compile, $rootScope, _$document_) {
    compile = createCompiler(
      '<div ng-bind-keys="options" />',
      $rootScope,
      $compile
    );
    $document = _$document_;
  }));

  function triggerEventWithKeyCode(keyCode) {
    var event = $.Event('keydown');
    event.which = keyCode;
    $document.triggerHandler(event);
  }

  it('should compile successfully', function() {
    compile(parentScopeMock, function(scope, element) {
      expect(element).toBeTruthy();
    });
  });

  it('should bind event listeners to element from passed object', function() {
    compile(parentScopeMock, function(scope) {
      _.forOwn(scope.ngBindKeysOptions, function(keyFunction, keyCode) {
        spyOn(scope.ngBindKeysOptions, keyCode);
        triggerEventWithKeyCode(keyCode);
        expect(scope.ngBindKeysOptions[keyCode]).toHaveBeenCalled();
      });
    });
  });
});
