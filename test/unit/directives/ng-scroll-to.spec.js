'use strict'

describe("Directive: ngScrollTo", function() {
  let compile;

  let parentScopeMock = {
    ngScrollTo: '.current'
  };

  let elementAttrsMock = {
    'ng-scroll-to': 'ngScrollTo',
    'offset-top': '50'
  };

  beforeEach(module('orodarius'));
  beforeEach(inject(($compile, $rootScope) => {
    compile = createCompiler('<ul><li class="current"></li></ul>', $rootScope, $compile);
  }));

  describe('when orodariusScrollIntoView event occurs', () => {
    // TODO: figure this out later
    xit('should change element scroll top correctly', inject(($rootScope, $timeout) => {
      spyOn($.fn, 'position').and.returnValue({ top: 100 });

      compile(parentScopeMock, elementAttrsMock, (scope, element) => {
        element.height(100);
        $rootScope.$emit('orodariusScrollIntoView');
        $timeout.flush();
        expect(element.get(0).scrollTop).toBe(50);
      });
    }));

    it('should not call element.scrollTop if given element does not exist', inject(($rootScope, $timeout) => {
      spyOn($.fn, 'position').and.returnValue({ top: 100 });

      let parentScope = _.cloneDeep(parentScopeMock);
      parentScope.ngScrollTo = '.something-not-existing';

      compile(parentScope, elementAttrsMock, (scope, element) => {
        $rootScope.$emit('orodariusScrollIntoView');
        $timeout.flush();
        expect(element.get(0).scrollTop).toBe(0);
      });
    }));
  });
});

