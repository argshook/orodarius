'use strict';

describe('Directive: ngEnter', function() {
  var compile;

  var parentScopeMock = {
    calback: _.noop,
    options: {}
  };

  var elementAttributesMock = {
    'ng-enter': 'callback',
    'ng-enter-options': 'options'
  };

  beforeEach(module('orodarius'));
  beforeEach(inject(function($rootScope, $compile) {
    compile = createCompiler('<input type="text" ng-enter="callback" ng-enter-options="options" />', $rootScope, $compile);
  }));

  it('should invoke callback when enter key is pressed', function() {
    compile(parentScopeMock, function(scope, element) {
      spyOn(scope, 'ngEnter');
      let event = $.Event('keypress');
      event.which = 13;
      event.keyCode = 13;
      element.triggerHandler(event);
      expect(scope.ngEnter).toHaveBeenCalled();
    });
  });

  it('should blur element if ng-enter-options have blurOnEnter set to true', function() {
    compile(_.assign(parentScopeMock, { options: { blurOnEnter: true } }), function(scope, element) {
      spyOn(element[0], 'blur');
      var event = $.Event('keypress');
      event.which = 13;
      element.triggerHandler(event);
      expect(element[0].blur).toHaveBeenCalled();
    });
  });
});

