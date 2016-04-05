;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('sidebarHead', {
      bindings: {
        isLoading: '=',
        currentSubreddit: '=',
        onSearchStart: '&',
        onStateSet: '&'
      },
      templateUrl: 'views/sidebar/sidebar-head.html',
      controller: ['SettingsService', function(SettingsService) {
        /* properties */
        this.isSettingsPanelVisible = false;
        this.settings = SettingsService.list;

        /* methods */
        this.toggleIsSettingsPanelVisible = toggleIsSettingsPanelVisible.call(this);

        function toggleIsSettingsPanelVisible() {
          let currentState = 'main';

          return () => {
            currentState = currentState === 'main' ? 'settings' : 'main';
            this.isSettingsPanelVisible = !this.isSettingsPanelVisible;
            this.onStateSet({ state: currentState });
          }
        }
      }]
    });
})();

