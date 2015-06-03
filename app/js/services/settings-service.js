;(function() {
  'use strict';

  angular.module('orodarius')
    .service('SettingsService', function(localStorageService) {
      var settingsStorageName = 'settings',
          settings = localStorageService.get(settingsStorageName);

      if(!angular.isArray(settings)) {
        settings = {
          isSidebarSticky: false,
          isFocusForced: false
        };
      }

      function add(name, setting) {
        settings[name] = setting;
        updateStorage();
      }

      function updateStorage() {
        localStorageService.set(settingsStorageName, settings);
      }

      return { list: settings, add };
    });

})();
