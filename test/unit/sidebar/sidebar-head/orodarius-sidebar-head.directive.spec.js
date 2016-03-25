'use srict';

describe('Directive: orodariusSidebarHead', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($compile, $rootScope) {
    compile = createCompiler('<orodarius-sidebar-head />', $rootScope, $compile);
  }));

  it('should compile successfully', function() {
    compile(function (scope, element) {
      expect(element.find('.orodarius-sidebar-head').length).toBe(1);
    });
  });
});

