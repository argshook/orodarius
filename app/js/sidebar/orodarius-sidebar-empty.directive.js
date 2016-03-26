;(function () {
  'use strict';

  angular
    .module('orodarius')
    .directive('orodariusSidebarEmpty', function() {
      return {
        restrict: 'E',
        scope: {
          onSubredditClick: '&'
        },
        templateUrl: 'views/sidebar/sidebar-empty.html',
        bindToController: true,
        controllerAs: '$ctrl',
        controller: function(LastSubredditsService) {
          this.lastSubreddits = LastSubredditsService.getList();

          this.suggestedSubreddits = [
            { name: 'videos' },
            { name: 'youtubehaiku' },
            { name: 'artisanvideos' },
            { name: 'listentothis' },
            { name: 'gamephysics' },
            { name: 'music' },
            { name: 'videos+youtubehaiku' }
          ];
        }
      };
    });
}());


