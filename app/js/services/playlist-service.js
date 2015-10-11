;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function(RedditService) {
      let playlistSubscriberFns = [];

      // Public values
      this.playlist = [];
      this.isLoading = false;

      // Public methods
      this.add = add;
      this.clear = clear;
      this.fetchSubreddit = fetchSubreddit;
      this.expandPlaylist = expandPlaylist;
      this.subscribePlaylist = subscribePlaylist;

      function add(item) {
        this.playlist.push(item);
        publishSubscribers();
        return this.playlist;
      }

      function fetchSubreddit(subredditName = '') {
        this.isLoading = true;

        return RedditService
          .fetch(subredditName)
          .then(newItems => {
            if(newItems) {
              this.playlist = this.playlist.concat(newItems);
              publishSubscribers();
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
            }
          }, angular.noop)
          .finally(() => this.isLoading = false);
      }

      function clear() {
        this.playlist = [];
        publishSubscribers();
      }

      function subscribePlaylist(subscriberFn) {
        playlistSubscriberFns.push(subscriberFn);
      }

      function publishSubscribers() {
        playlistSubscriberFns.map(fn => fn());
      }
    });
})();
