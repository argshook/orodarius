(() => {
  'use strict';

  angular.module('orodarius').component('sidebarEmpty', {
    bindings: {
      onSubredditClick: '&'
    },
    templateUrl: 'views/sidebar/sidebar-empty.html',
    controller: [
      'LastSubredditsService',
      function(LastSubredditsService) {
        this.lastSubreddits = LastSubredditsService.getList();

        this.suggestedSubreddits = [
          {name: 'videos'},
          {name: 'youtubehaiku'},
          {name: 'artisanvideos'},
          {name: 'listentothis'},
          {name: 'gamephysics'},
          {name: 'music'},
          {name: 'videos+youtubehaiku'}
        ];
      }
    ]
  });
})();
