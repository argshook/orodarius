;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function($http, $q) {
      // Reddit APIs:
      // http://www.reddit.com/r/videos/about.json
      // http://www.reddit.com/r/videos/hot.json?limit=1

      var playlist = [],
          redditAPIBaseUrl = 'http://www.reddit.com/r/';

      function add(item) {
        playlist.push(item);
        return playlist;
      }

      function fetchSubreddit(subredditName = 'videos') {
        var deferred = $q.defer();

        $http.get(`${redditAPIBaseUrl}${subredditName}/hot.json?limit=1`)
          .then(function(data) {
            playlist = data.data.data.children;
            playlist = _.map(playlist, function(item) {
              return {
                title: item.data.title,
                url: item.data.url
              };
            });
            deferred.resolve(playlist);
          }, function(error) {
            deferred.reject(error);
          });

        return deferred.promise;
      }

      return {
        playlist,
        add,
        fetchSubreddit
      };
    });
})();
