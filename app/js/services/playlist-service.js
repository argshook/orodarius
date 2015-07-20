;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function($http, $q, $log, LastSubredditsService,
                                         youtubeUrlParser, $filter) {

      var redditAPIBaseUrl = 'http://www.reddit.com/r/',
          fetchRetries = 0,
          maxFetchRetries = 3; // how many times should I retry GETting from reddit api?

      // Public values
      this.playlist = [];
      this.afterTag = '';
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

      function subredditResultsFilter(data) {
        // TODO: refactor to allow different sources but output same structure as now
        return _(data)
                  .filter((item) => item.kind === 't3' && item.data.domain === 'youtube.com') // t3 - link posts
                  .map((item) => {
                    var videoInfo = youtubeUrlParser(item.data.url);

                    // this is where playlist
                    // item is built
                    return {
                      title: item.data.title,
                      url: item.data.url,
                      videoId: videoInfo.id,
                      starttime: videoInfo.starttime,
                      thumbnailUrl: $filter('thumbnailUrlFilter')(item.data.thumbnail),
                      created: item.data.created,
                      redditUrl: `http://reddit.com${item.data.permalink}`,
                      redditScore: item.data.score,
                      subreddit: item.data.subreddit,
                      error: null
                    };
                  })
                  .value();
      }

      function compareOldTo(newItem) {
        var duplicateItems = _(this.playlist).filter(item => item.videoId === newItem.videoId).value().length;
        return duplicateItems > 0 ? false : true;
      }

      // TODO: refactor, make this smaller
      function fetchSubreddit(subredditName, after, deferred = $q.defer()) {
        // TODO: extract URL to be configurable in order to allow different sources
        var apiUrl = `${redditAPIBaseUrl}${subredditName}/hot.json?limit=50` + (after ? `&after=${after}` : '');
        this.isLoading = true;

        $http.get(apiUrl)
          .then(data => {
            this.afterTag = data.data.data.after;
            this.currentSubreddit = subredditName;
            fetchRetries++;

            var newItems = uniquefyVideoItems(subredditResultsFilter(data.data.data.children));

            if(newItems.length !== 0) {
              LastSubredditsService.add({ name: subredditName });
            }

            if(newItems.length === 0 && fetchRetries <= maxFetchRetries) {
              this.fetchSubreddit(this.currentSubreddit, this.afterTag, deferred);
            } else {
              this.isLoading = false;
              newItems = postProcess(newItems);

              this.playlist = after ?
                              this.playlist.concat(_(newItems).filter(item => compareOldTo(item)).value()) :
                              newItems;

              fetchRetries = 0;
              deferred.resolve(this.playlist);

              return deferred.promise;
            }
          }, error => {
            this.isLoading = false;
            deferred.reject(error);
          });

        return deferred.promise;
      }

      function expandPlaylist() {
        if(!this.isLoading) {
          var deferred = $q.defer();

          if(this.afterTag) {
            this.fetchSubreddit(this.currentSubreddit, this.afterTag).then(
              () => deferred.resolve(),
              () => deferred.reject()
            );
          } else {
            $log.warn('cant expand playlist, no afterTag found!');
            deferred.reject();
          }

          return deferred.promise;
        }

        return false;
      }

      function clear() {
        this.playlist = [];
      }

      // TODO: refactor to filter?
      function uniquefyVideoItems(videoItems) {
        var stringifiedArray = _(videoItems).map(item => JSON.stringify(item)).value();

        return _(_.uniq(stringifiedArray)).map(item => JSON.parse(item)).value();
      }

      // TODO: refactor to filter?
      function postProcess(newItems) {
        var sanitizers = {
          '&amp;': '&',
          '&copy;': '©',
          '&reg;': '®'
        };

        return _(newItems)
                .map(item => {
                  item.title = item.title.replace(/(&amp;|&copy;|&reg;)/g, match => sanitizers[match]),
                  item.ownId = _.uniqueId('orodarius_video-item_');
                  return item;
                })
                .value();
      }
    });
})();
