;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('settingsPanel', {
      bindings: {},
      templateUrl: 'views/sidebar/settings-panel.html',
      controller: function(SettingsService, $window, $timeout) {
        /* properties */
        this.settings = SettingsService.list;

        /* methods */
        this.toggleStickySidebar = toggleStickySidebar;
        this.toggleFlashMode = toggleFlashMode;
        this.toggleFocusForced = toggleFocusForced;

        if(SettingsService.list.isFocusForced) {
          $window.addEventListener('blur', windowBlurHanlder);
        }

        function toggleStickySidebar() {
          SettingsService.toggle('isSidebarSticky');
        }

        function toggleFlashMode() {
          SettingsService.toggle('isFlashModeEnabled');
        }

        function toggleFocusForced() {
          SettingsService.toggle('isFocusForced');
          $window[(SettingsService.list.isFocusForced ? 'add' : 'remove') + 'EventListener']('blur', windowBlurHanlder);
        }

        // TODO: need better implementation for firefox. and maybe other browsers
        function windowBlurHanlder() {
          $timeout(() => $window.focus(), 100);
        }

      }
    })
})();
