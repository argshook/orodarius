;(function() {
  'use strict';

  // TODO: this will eventually be lastQueriesService or something
  angular.module('orodarius')
    .service('LastSubredditsService', function(localStorageService) {
      var lastSubredditsStorageName = 'lastSubreddits',
          lastSubredditsLimit = 5;

      var lastSubreddits = localStorageService.get(lastSubredditsStorageName);

      if(!angular.isArray(lastSubreddits)) {
        lastSubreddits = [];
      }

      function addItem(item) {
        if(!isItemDuplicate(item)) {
          lastSubreddits.unshift(item);
          lastSubreddits.slice(0, lastSubredditsLimit);
          updateLocalStorage();
        }
      }

      function isItemDuplicate(item) {
        return _.findIndex(lastSubreddits, obj => item.name === obj.name) !== -1 ? true : false;
      }

      function updateLocalStorage() {
        localStorageService.set('lastSubreddits', lastSubreddits);
      }

      return {
        list: lastSubreddits,
        add: addItem
      };
    });
})();
