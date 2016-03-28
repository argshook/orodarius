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
      controller: ['SettingsService', 'SidebarService', '$window', '$timeout', function(SettingsService, SidebarService, $window, $timeout) {
        /* properties */
        this.isSettingsPanelVisible = false;
        this.sidebarService = SidebarService;
        this.settings = SettingsService.list;

        /* methods */
        this.toggleIsSettingsPanelVisible = toggleIsSettingsPanelVisible.call(this);

        this.toggleSidebar = function() {
          SidebarService.toggle();
        };

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

