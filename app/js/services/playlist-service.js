;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function(RedditService, $q) {
      var PLAYLIST_OBSERVE_PROMISE = $q.defer();

      // Public values
      this.playlist = [];
      this.isLoading = false;

      // Public methods
      this.add = add;
      this.clear = clear;
      this.fetchSubreddit = fetchSubreddit;
      this.expandPlaylist = expandPlaylist;
      this.observePlaylist = observePlaylist;

      function add(item) {
        this.playlist.push(item);
        PLAYLIST_OBSERVE_PROMISE.resolve(this.playlist);
        return this.playlist;
      }

      function fetchSubreddit(subredditName = '') {
        this.isLoading = true;

        return RedditService
          .fetch(subredditName)
          .then(newItems => {
            if(newItems) {
              this.playlist = this.playlist.concat(newItems);
              PLAYLIST_OBSERVE_PROMISE.resolve();
              return newItems;
            }
          }, angular.noop)
          .finally(() => this.isLoading = false);
      }

      function expandPlaylist() {
        this.isLoading = true;

        return RedditService
          .getNext()
          .then(newItems => {
            if(newItems) {
              this.playlist = this.playlist.concat(newItems);
              PLAYLIST_OBSERVE_PROMISE.resolve();
            }
          }, angular.noop)
          .finally(() => this.isLoading = false);
      }

      function observePlaylist() {
        return PLAYLIST_OBSERVE_PROMISE.promise;
      }

      function clear() {
        this.playlist = [];
      }
    });
})();
