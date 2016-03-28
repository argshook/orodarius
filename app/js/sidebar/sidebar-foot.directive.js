;(() => {
  'use strict';

  angular
    .module('orodarius')
    .component('sidebarFoot', {
      bindings: {},
      templateUrl: 'views/sidebar/sidebar-foot.html',
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
    });
})();

