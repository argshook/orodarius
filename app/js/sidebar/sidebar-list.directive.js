(function() {
  'use strict';

  angular.module('orodarius').component('sidebarList', {
    bindings: {
      list: '=',
      currentSubreddit: '=',
      isLoading: '=',
      onItemClick: '&',
      onExpandClick: '&'
    },
    templateUrl: 'views/sidebar/sidebar-list.html'
  });
})();
