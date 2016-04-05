'use srict';

describe('Directive: sidebarHead', () => {
  let compile;

  let parentScopeMock = {
    currentSubreddit: 'something-really-bad-as-usual',
    onSearchStart: jasmine.createSpy('onSearchStartSpy'),
    isLoading: false,
    currentState: ''
  };

  let elementAttrsMock = {
    'current-subreddit': 'currentSubreddit',
    'current-state': 'currentState',
    'is-loading': 'isLoading',
    'on-search-start': 'onSearchStart(subreddit)',
  };

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(($compile, $rootScope) => {
    compile = createCompiler('<sidebar-head />', $rootScope, $compile);
  }));

  it('should compile successfully', () => {
    compile((scope, element) => {
      expect(element.find('.sidebar-head').length).toBe(1);
    });
  });

  describe('when search icon clicked', () => {
    it('should call parentScope.onSearchStart with correct subreddit', () => {
      compile(parentScopeMock, elementAttrsMock, (scope, element) => {
        scope.$ctrl.currentSubreddit = 'expected sub';
        element.find('.sidebar-now-playing-btn').click();
        expect(parentScopeMock.onSearchStart).toHaveBeenCalledWith(scope.$ctrl.currentSubreddit);
      });
    });
  });

  describe('when focused input received enter key press', () => {
    it('should call parentScope.onSearchStart with correct subreddit', () => {
      compile(parentScopeMock, elementAttrsMock, (scope, element) => {
        scope.$ctrl.currentSubreddit = 'expected sub';
        element.find('.sidebar-now-playing-input').triggerHandler({ type: 'keypress', which: 13 });
        scope.$digest();
        expect(parentScopeMock.onSearchStart).toHaveBeenCalledWith(scope.$ctrl.currentSubreddit);
      });
    });
  });

  it('should receive isLoading from attribute', () => {
    let parentScope = { isLoading: true };
    compile(parentScope, { 'is-loading': parentScope.isLoading }, scope => {
      expect(scope.$ctrl.isLoading).toBe(parentScope.isLoading);
    });
  });

  describe('$ctrl.currentSubreddit', () => {
    it('should be exposed from parentScope', () => {
      compile(parentScopeMock, elementAttrsMock, scope => {
        expect(scope.$ctrl.currentSubreddit).toBe(parentScopeMock.currentSubreddit);
      });
    });
  });

  describe('settings panel toggle btn', () => {
    describe('when clicked', () => {
      it('should call scope.$ctrl.onSettingsClick', () => {
        compile(parentScopeMock, elementAttrsMock, (scope, element) => {
          spyOn(scope.$ctrl, 'onSettingsClick');
          element.find('.sidebar-settings-panel-toggle').click();
          expect(scope.$ctrl.onSettingsClick).toHaveBeenCalled();
        })
      });
    });
  });

  describe('settings state btn', () => {
    describe('when expected state is given', () => {
      it('should have specific class', () => {
        let parentScope = _.cloneDeep(parentScopeMock);
        parentScope.currentState = 'settings';

        compile(parentScope, elementAttrsMock, function (scope, element) {
          expect(element.find('.sidebar-settings-panel-toggle')
            .hasClass('sidebar-now-playing-btn--active')).toBe(true);
        });

        parentScope.currentState = 'shit';
        compile(parentScope, elementAttrsMock, function (scope, element) {
          expect(element.find('.sidebar-settings-panel-toggle')
            .hasClass('sidebar-now-playing-btn--active')).toBe(false);
        });
      });
    });
  });
});

