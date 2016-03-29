;(function() {
  'use strict';

  angular
    .module('orodarius')
    .component('sidebarList', {
      bindings: {
        list: '=',
        currentSubreddit: '=',
        isLoading: '=',
        onItemClick: '&',
        onExpandClick: '&'
      },
      templateUrl: 'views/sidebar/sidebar-list.html',
      controller: ['PlayerService', function(PlayerService) {
        this.getCurrentVideoItem = function() {
          return PlayerService.currentVideoItem;
        };
      }]
    }
  );
})();

