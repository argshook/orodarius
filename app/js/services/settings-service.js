;(function() {
  'use strict';

  angular.module('orodarius')
    .service('SettingsService', function(localStorageService) {
      var settingsStorageName = 'settings',
          settings = localStorageService.get(settingsStorageName);

      if(settings === null) {
        settings = {
          isSidebarSticky: false,
          isFocusForced: false
        };
      }

      function add(name, setting) {
        settings[name] = setting;
        updateStorage();
      }

      function toggle(name) {
        if(typeof settings[name] !== 'undefined') {
          settings[name] = !settings[name];
          updateStorage();
        } else {
          settings[name] = true;
        }
      }

      function updateStorage() {
        localStorageService.set(settingsStorageName, settings);
      }

      return { list: settings, add, toggle };
    });

})();
