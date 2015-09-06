;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function($http, $q, $log, LastSubredditsService,
                                         youtubeUrlParser, $filter, RedditService) {

      var redditAPIBaseUrl = 'http://www.reddit.com/r/',
          fetchRetries = 0,
          maxFetchRetries = 3; // how many times should I retry GETting from reddit api?

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

            this.isLoading = false;
          }, () => {
            this.isLoading = false;
          });
      }

      function clear() {
        this.playlist = [];
      }
    });
})();
