'use srict';

describe('Directive: sidebarHead', () => {
  let compile;

  let parentScopeMock = {
    currentSubreddit: 'something-really-bad-as-usual',
    onSearchStart: jasmine.createSpy('onSearchStartSpy'),
    isLoading: false
  };

  let elementAttrsMock = {
    'current-subreddit': 'currentSubreddit',
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
      it('should call scope.$ctrl.toggleIsSettingsPanelVisible()', () => {
        compile(parentScopeMock, elementAttrsMock, (scope, element) => {
          spyOn(scope.$ctrl, 'toggleIsSettingsPanelVisible');
          element.find('.sidebar-settings-panel-toggle').click();
          expect(scope.$ctrl.toggleIsSettingsPanelVisible).toHaveBeenCalled();
        })
      });
    });
  });

  describe('$ctrl.toggleIsSettingsPanelVisible', () => {
    it('should call $ctrl.onStateSet correctly', () => {
      compile(parentScopeMock, elementAttrsMock, scope => {
        spyOn(scope.$ctrl, 'onStateSet');
        scope.$ctrl.toggleIsSettingsPanelVisible();
        expect(scope.$ctrl.onStateSet).toHaveBeenCalledWith({ state: 'settings' });
        scope.$ctrl.toggleIsSettingsPanelVisible();
        expect(scope.$ctrl.onStateSet).toHaveBeenCalledWith({ state: 'main' });
      });
    });

    it('should toggle $ctrl.isSettingsPanelVisible', () => {
      compile(parentScopeMock, elementAttrsMock, scope => {
        scope.$ctrl.isSettingsPanelVisible = false;
        scope.$ctrl.toggleIsSettingsPanelVisible();
        expect(scope.$ctrl.isSettingsPanelVisible).toBe(true);
        scope.$ctrl.toggleIsSettingsPanelVisible();
        expect(scope.$ctrl.isSettingsPanelVisible).toBe(false);
      });
    });
  });
});

