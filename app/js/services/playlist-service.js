;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function($http, $q) {
      // Reddit APIs:
      // http://www.reddit.com/r/videos/about.json
      // http://www.reddit.com/r/videos/hot.json?limit=1

      var playlist = [],
          redditAPIBaseUrl = 'http://www.reddit.com/r/';

      Object.defineProperty(this, 'playlist', {
        enumerable: true,
        configurable: true,
        get: function() {
          return playlist;
        },
        set: function(value) {
          playlist = value;
        }
      });

      function add(item) {
        playlist.push(item);
        return playlist;
      }

      function getVideoIdFromUrl(url) {
        var videoIdRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(videoIdRegExp);
        if (match && match[2].length == 11) {
          return match[2];
        } else {
          console.warn("Couldn't find video ID for this url:", url);
          return false;
        }
      }

      function subredditResultsFilter(data) {
        return _(data)
                  .filter((item) => item.kind === 't3' && item.data.domain === 'youtube.com') // t3 - link posts
                  .map((item) => {
                    return {
                      title: item.data.title,
                      url: item.data.url,
                      videoId: getVideoIdFromUrl(item.data.url),
                      thumbnailUrl: item.data.thumbnail
                    };
                  })
                  .value();
      }

      function fetchSubreddit(subredditName = 'videos') {
        var deferred = $q.defer();

        $http.get(`${redditAPIBaseUrl}${subredditName}/hot.json`)
          .then(function(data) {
            playlist = subredditResultsFilter(data.data.data.children);
            deferred.resolve(playlist);
          }, function(error) {
            deferred.reject(error);
          });

        return deferred.promise;
      }

      this.add = add;
      this.fetchSubreddit = fetchSubreddit;
    });
})();
