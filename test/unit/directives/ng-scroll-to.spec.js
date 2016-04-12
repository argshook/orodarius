'use strict'

describe("Directive: ngScrollTo", function() {
  let compile;

  beforeEach(module('orodarius'));
  beforeEach(inject(($compile, $rootScope) => {
    compile = createCompiler('<ul ng-scroll-to="\'.current\'"><li class="current"></li></ul>', $rootScope, $compile);
  }));

  describe('when orodariusScrollIntoView event occurs', () => {
    it('should call $window.scrollIntoView on element given through attribute', inject($rootScope => {
      compile((scope, element) => {
        spyOn(Element.prototype, 'scrollIntoView');

        $rootScope.$emit('orodariusScrollIntoView');
        scope.$digest();
        expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
      });
    }));
  });
});

