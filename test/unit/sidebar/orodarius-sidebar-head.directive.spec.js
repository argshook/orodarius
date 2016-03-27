'use srict';

describe('Directive: orodariusSidebarHead', function() {
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
  beforeEach(inject(function($compile, $rootScope) {
    compile = createCompiler('<orodarius-sidebar-head />', $rootScope, $compile);
  }));

  it('should compile successfully', function() {
    compile(function (scope, element) {
      expect(element.find('.orodarius-sidebar-head').length).toBe(1);
    });
  });

  it('toggleSidebar should toggle isOpen flag', inject(SidebarService => {
    compile(scope => {
      scope.$ctrl.toggleSidebar();
      expect(scope.$ctrl.sidebarService.isOpen).toBe(false);

      scope.$ctrl.toggleSidebar();
      expect(scope.$ctrl.sidebarService.isOpen).toBe(true);
    });
  }));

  describe('toggleStickySidebar()', function() {
    it('should be defined on controller', function () {
      compile(scope => {
        expect(typeof scope.$ctrl.toggleStickySidebar).toBe('function');
      });
    });

    it('should toggle isSidebarSticky property using SettingsService', inject(SettingsService => {
      compile(scope => {
        spyOn(SettingsService, 'toggle').and.callThrough();
        scope.$ctrl.toggleStickySidebar();
        expect(SettingsService.toggle).toHaveBeenCalledWith('isSidebarSticky');
      });
    }));
  });

  describe('toggleFocusForced method', () => {
    it('should toggle $scope.isFocusForced when called', inject(SettingsService => {
      compile(scope => {
        scope.$ctrl.toggleFocusForced();
        expect(scope.$ctrl.settings.isFocusForced).toBe(true);
        scope.$ctrl.toggleFocusForced();
        expect(scope.$ctrl.settings.isFocusForced).toBe(false);
      });
    }));

    it('should attach blur event listener on window when isFocusForced is false', inject($window => {
      spyOn($window, 'addEventListener');
      compile(scope => {
        scope.$ctrl.settings.isFocusForced = false;
        scope.$ctrl.toggleFocusForced();
        expect($window.addEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
      });
    }));

    it('should remove blur event listener from window when isFocusForced is true', inject(function($window) {
      spyOn($window, 'removeEventListener');
      compile(function (scope) {
        scope.$ctrl.settings.isFocusForced = true;
        scope.$ctrl.toggleFocusForced();
        expect($window.removeEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
      });
    }));
  });

  describe('settings', () => {
    it('should contain default values', inject(SettingsService => {
      SettingsService.list.isSidebarSticky = false;
      compile(scope => {
        expect(scope.$ctrl.settings.isSidebarSticky).toBe(false);
        expect(scope.$ctrl.settings.isFocusForced).toBe(false);
      });
    }));
  });

  describe('toggleFlashMode()', function() {
    it('should call SettingsService.toggle', inject(SettingsService => {
      spyOn(SettingsService, 'toggle');
      compile(scope => {
        scope.$ctrl.toggleFlashMode();
        expect(SettingsService.toggle).toHaveBeenCalledWith('isFlashModeEnabled');
      });
    }));
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
});

