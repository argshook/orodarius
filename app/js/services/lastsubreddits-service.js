;() => {
  // TODO: this will eventually be lastQueriesService or something
  angular.module('orodarius')
    .service('LastSubredditsService', function(localStorageService) {
      let lastSubredditsStorageName = 'lastSubreddits',
          lastSubredditsLimit = 10;

      let lastSubreddits = localStorageService.get(lastSubredditsStorageName);

      if(!angular.isArray(lastSubreddits)) {
        lastSubreddits = [];
      }

      function addItem(item) {
        if(isItemDuplicate(item)) { return; }

        lastSubreddits.unshift(item);
        lastSubreddits = lastSubreddits.slice(0, lastSubredditsLimit);

        updateLocalStorage();
      }

      function isItemDuplicate(item) {
        return _.findIndex(lastSubreddits, obj => item.name === obj.name) !== -1;
      }

      function updateLocalStorage() {
        localStorageService.set('lastSubreddits', lastSubreddits);
      }

      function getList() {
        return lastSubreddits;
      }

      return {
        getList,
        add: addItem
      };
    });
}();
