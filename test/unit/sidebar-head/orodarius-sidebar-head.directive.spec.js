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

  it('toggleSidebar should toggle isOpen flag', inject(SidebarService => {
    compile(scope => {
      scope.orodariusSidebarHead.toggleSidebar();
      expect(scope.orodariusSidebarHead.sidebarService.isOpen).toBe(false);

      scope.orodariusSidebarHead.toggleSidebar();
      expect(scope.orodariusSidebarHead.sidebarService.isOpen).toBe(true);
    });
  }));

  describe('toggleStickySidebar()', function() {
    it('should be defined on controller', function () {
      compile(scope => {
        expect(typeof scope.orodariusSidebarHead.toggleStickySidebar).toBe('function');
      });
    });

    it('should toggle isSidebarSticky property using SettingsService', inject(SettingsService => {
      compile(scope => {
        spyOn(SettingsService, 'toggle').and.callThrough();
        scope.orodariusSidebarHead.toggleStickySidebar();
        expect(SettingsService.toggle).toHaveBeenCalledWith('isSidebarSticky');
      });
    }));
  });

  describe('toggleFocusForced method', () => {
    it('should toggle $scope.isFocusForced when called', inject(SettingsService => {
      compile(scope => {
        scope.orodariusSidebarHead.toggleFocusForced();
        expect(scope.orodariusSidebarHead.settings.isFocusForced).toBe(true);
        scope.orodariusSidebarHead.toggleFocusForced();
        expect(scope.orodariusSidebarHead.settings.isFocusForced).toBe(false);
      });
    }));

    it('should attach blur event listener on window when isFocusForced is false', inject($window => {
      spyOn($window, 'addEventListener');
      compile(scope => {
        scope.orodariusSidebarHead.settings.isFocusForced = false;
        scope.orodariusSidebarHead.toggleFocusForced();
        expect($window.addEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
      });
    }));

    it('should remove blur event listener from window when isFocusForced is true', inject(function($window) {
      spyOn($window, 'removeEventListener');
      compile(function (scope) {
        scope.orodariusSidebarHead.settings.isFocusForced = true;
        scope.orodariusSidebarHead.toggleFocusForced();
        expect($window.removeEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
      });
    }));
  });

  describe('settings', () => {
    it('should contain default values', inject(SettingsService => {
      SettingsService.list.isSidebarSticky = false;
      compile(scope => {
        expect(scope.orodariusSidebarHead.settings.isSidebarSticky).toBe(false);
        expect(scope.orodariusSidebarHead.settings.isFocusForced).toBe(false);
      });
    }));
  });

  describe('toggleFlashMode()', function() {
    it('should call SettingsService.toggle', inject(SettingsService => {
      spyOn(SettingsService, 'toggle');
      compile(scope => {
        scope.orodariusSidebarHead.toggleFlashMode();
        expect(SettingsService.toggle).toHaveBeenCalledWith('isFlashModeEnabled');
      });
    }));
  });

  it('isOpen should be true after PlayerService.playVideo has been invoked when isSidebarSticky is true', inject(PlayerService => {
    spyOn(PlayerService, 'playVideo');

    compile(scope => {
      scope.orodariusSidebarHead.sidebarService.isOpen = true;
      scope.orodariusSidebarHead.settings.isSidebarSticky = true;
      PlayerService.playVideo();
      expect(scope.orodariusSidebarHead.sidebarService.isOpen).toBe(true);
    });
  }));
});

