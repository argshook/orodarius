(() => {
  'use strict';

  angular.module('orodarius').component('sidebarHead', {
    bindings: {
      isLoading: '=',
      currentSubreddit: '=',
      currentState: '=',
      onSearchStart: '&',
      onSettingsClick: '&'
    },
    templateUrl: 'views/sidebar/sidebar-head.html'
  });
})();
