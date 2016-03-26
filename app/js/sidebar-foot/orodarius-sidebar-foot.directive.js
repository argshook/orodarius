;(function () {
  'use strict';

  angular
    .module('orodarius')
    .directive('orodariusSidebarFoot', function() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/orodarius-sidebar-foot.html',
        controllerAs: '$ctrl',
        controller: function($http) {
          this.lastUpdatedData = {};

          this.getLastUpdated = function() {
            $http.get('https://api.github.com/repos/argshook/orodarius/commits/gh-pages')
            .then(data => this.lastUpdatedData = {
              url: data.data.html_url,
              date: data.data.commit.author.date,
              message: data.data.commit.message
            });
          };

          this.getLastUpdated();
        }
      };
    });
}());

