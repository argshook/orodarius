;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('sidebarHead', {
      bindings: {
        onSearchStart: '&',
        isLoading: '=',
        currentSubreddit: '='
      },
      templateUrl: 'views/sidebar/sidebar-head.html',
      controller: ['SettingsService', 'SidebarService', '$window', '$timeout', function(SettingsService, SidebarService, $window, $timeout) {
        /* properties */
        this.isSettingsPanelVisible = false;
        this.sidebarService = SidebarService;
        this.settings = SettingsService.list;

        /* methods */
        this.toggleIsSettingsPanelVisible = toggleIsSettingsPanelVisible;

        this.toggleSidebar = function() {
          SidebarService.toggle();
        };

        function toggleIsSettingsPanelVisible() {
          this.isSettingsPanelVisible = !this.isSettingsPanelVisible;
        }
      }]
    });
})();

