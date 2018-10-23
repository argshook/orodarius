'use strict';

describe('Component: settingsPanel', function() {
  let compile;

  let parentScopeMock = {};

  let elementAttrsMock = {};

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = createCompiler('<settings-panel />', $rootScope, $compile);
  }));

  it('should compile successfully', () => {
    compile(function(scope, element) {
      expect(element.find('.settings-panel').length).toBe(1);
    });
  });

  describe('toggleStickySidebar()', function() {
    it('should toggle isSidebarSticky property using SettingsService', inject(SettingsService => {
      compile(scope => {
        spyOn(SettingsService, 'toggle').and.callThrough();
        scope.$ctrl.toggleStickySidebar();
        expect(SettingsService.toggle).toHaveBeenCalledWith('isSidebarSticky');
      });
    }));
  });

  describe('toggleFlashMode()', function() {
    it('should call SettingsService.toggle', inject(SettingsService => {
      spyOn(SettingsService, 'toggle');
      compile(scope => {
        scope.$ctrl.toggleFlashMode();
        expect(SettingsService.toggle).toHaveBeenCalledWith(
          'isFlashModeEnabled'
        );
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
        expect($window.addEventListener).toHaveBeenCalledWith(
          'blur',
          jasmine.any(Function)
        );
      });
    }));

    it('should remove blur event listener from window when isFocusForced is true', inject(function(
      $window
    ) {
      spyOn($window, 'removeEventListener');
      compile(function(scope) {
        scope.$ctrl.settings.isFocusForced = true;
        scope.$ctrl.toggleFocusForced();
        expect($window.removeEventListener).toHaveBeenCalledWith(
          'blur',
          jasmine.any(Function)
        );
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
});
