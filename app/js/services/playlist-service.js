;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function(RedditService) {
      // Public values
      this.playlist = [];
      this.currentSubreddit = '';
      this.isLoading = false;

      // Public methods
      this.add = add;
      this.clear = clear;
      this.fetchSubreddit = fetchSubreddit;
      this.expandPlaylist = expandPlaylist;

      function add(item) {
        this.playlist.push(item);
        return this.playlist;
      }

      function fetchSubreddit(subredditName = '') {
        this.isLoading = true;

        return RedditService
          .fetch(subredditName)
          .then(
            (newItems) => {
              this.currentSubreddit = subredditName;

              if(newItems) {
                this.playlist = this.playlist.concat(newItems);
              }
            },
            angular.noop
          )
          .finally(() => this.isLoading = false);
      }

      function expandPlaylist() {
        this.isLoading = true;
        return RedditService.getNext().
          then(newItems => {
            if(newItems) {
              this.playlist = this.playlist.concat(newItems);
            }
          },
          angular.noop)
          .finally(() => this.isLoading = false);
      }

      function clear() {
        this.playlist = [];
      }
    });
})();
