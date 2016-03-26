;(function () {
  'use strict';

  angular
    .module('orodarius')
    .directive('orodariusSidebarHead', function() {
      return {
        restrict: 'E',
        scope: {
          onSearchStart: '&',
          isLoading: '='
        },
        templateUrl: 'views/sidebar/sidebar-head.html',
        bindToController: true,
        controllerAs: '$ctrl',
        controller: function(SettingsService, SidebarService, $window, $timeout) {
          this.sidebarService = SidebarService;
          this.settings = SettingsService.list;

          this.toggleStickySidebar = function() {
            SettingsService.toggle('isSidebarSticky');
          };

          this.toggleSidebar = function() {
            SidebarService.toggle();
          };

          this.toggleFocusForced = function() {
            SettingsService.toggle('isFocusForced');
            $window[(SettingsService.list.isFocusForced ? 'add' : 'remove') + 'EventListener']('blur', windowBlurHanlder);
          };

          this.toggleFlashMode = function() {
            SettingsService.toggle('isFlashModeEnabled');
          }

          if(SettingsService.list.isFocusForced) {
            $window.addEventListener('blur', windowBlurHanlder);
          }

          // TODO: need better implementation for firefox. and maybe other browsers
          function windowBlurHanlder() {
            $timeout(() => $window.focus(), 100);
          }
        }
      };
    });
}());

