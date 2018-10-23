(function() {
  'use strict';

  var DEFAULT_SETTINGS = {
    watchCount: 0,
    isSidebarSticky: false,
    isFocusForced: false,
    sources: [
      {
        name: 'reddit',
        apiUrl: 'https://www.reddit.com/r/',
        isEnabled: true
      }
    ]
  };

  angular.module('orodarius').service('SettingsService', [
    'localStorageService',
    function(localStorageService) {
      var settingsStorageName = 'settings',
        settings = localStorageService.get(settingsStorageName);

      if (settings === null) {
        settings = DEFAULT_SETTINGS;
        updateStorage();
      }

      _.defaultsDeep(settings, DEFAULT_SETTINGS);
      updateStorage();

      function add(name, setting) {
        settings[name] = setting;
        updateStorage();
      }

      function toggle(name) {
        if (typeof settings[name] !== 'undefined') {
          settings[name] = !settings[name];
          updateStorage();
        } else {
          settings[name] = true;
        }
      }

      function set(name, value) {
        settings[name] = value;
        updateStorage();
      }

      function updateStorage() {
        localStorageService.set(settingsStorageName, settings);
      }

      // TODO: refactor to use get instead of list
      return {list: settings, add, toggle, set};
    }
  ]);
})();
