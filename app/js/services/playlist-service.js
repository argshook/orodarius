;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function($http, $q) {
      // Reddit APIs:
      // http://www.reddit.com/r/videos/about.json
      // http://www.reddit.com/r/videos/hot.json?limit=1

      var playlist = [],
          redditAPIBaseUrl = 'http://www.reddit.com/r/',
          currentSubreddit,
          afterTag;

      Object.defineProperties(this, {
        playlist: {
          enumerable: true,
          configurable: true,
          get: function() {
            return playlist;
          },
          set: function(value) {
            playlist = value;
          }
        },
        afterTag: {
          enumerable: true,
          configurable: true,
          get: function() {
            return afterTag;
          },
          set: function(value) {
            afterTag = value;
          }
        },
        currentSubreddit: {
          enumerable: true,
          configurable: true,
          get: () => currentSubreddit,
          set: (value) => { currentSubreddit = value; }
        }
      });

      function add(item) {
        playlist.push(item);
        return playlist;
      }

      function getVideoInfoFromUrl(elem) {
        var hashRe = /^https?:\/\/(?:www\.|m\.)?youtube\.com\/watch\?.*v=([\w\-]+)/i,
            altHashRe = /^https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+)/i;

        var groups = hashRe.exec(elem.href);
        if(!groups) {
          groups = altHashRe.exec(elem.href);
        }

        if(groups) {
          // Check url for timecode e.g t=1h23m15s
          var timecodeRe = /t=(.*?)&|t=(.*?)$/i,
              starttime = 0,
              timecodeResult = timecodeRe.exec(elem.href);

          if(timecodeResult !== null) {
            var time_blocks = {'h':3600, 'm':60, 's':1},
                timeRE = /[0-9]+[h|m|s]/ig;

            // Get each segment e.g. 8m and calculate its value in seconds
            var timeMatch = timecodeResult[0].match(timeRE);

            if(timeMatch) {
              timeMatch.forEach(function(ts){
                var unit = time_blocks[ts.charAt(ts.length-1)],
                    amount = parseInt(ts.slice(0, - 1), 10);

                // Add each unit to starttime
                starttime += unit * amount;
              });
            } else {
              // support direct timestamp e.g. t=200
              starttime = parseInt(timecodeResult[0].replace('t=',''), 10);
              if (isNaN(starttime)) {
                starttime = 0;
              }
            }
          }

          return {
            id: groups[1],
            starttime: starttime
          };
        } else {
          return false;
        }
      }

      function subredditResultsFilter(data) {
        return _(data)
                  .filter((item) => item.kind === 't3' && item.data.domain === 'youtube.com') // t3 - link posts
                  .map((item) => {
                    var videoInfo = getVideoInfoFromUrl(item.data.url);

                    // this is where playlist
                    // item is built
                    return {
                      title: item.data.title,
                      url: item.data.url,
                      videoId: videoInfo.id,
                      starttime: videoInfo.starttime,
                      thumbnailUrl: item.data.thumbnail
                    };
                  })
                  .value();
      }

      function fetchSubreddit(subredditName, after) {
        var deferred = $q.defer();

        var apiUrl = `${redditAPIBaseUrl}${subredditName}/hot.json?limit=25` + (after ? `&after=${after}` : '');

        $http.get(apiUrl)
          .then(function(data) {
            afterTag = data.data.data.after;
            currentSubreddit = subredditName;
            if(after) { // after is a key for next paginated list, with it we concat playlists
              playlist = playlist.concat(subredditResultsFilter(data.data.data.children));
            } else {
              playlist = subredditResultsFilter(data.data.data.children);
            }
            deferred.resolve(playlist);
          }, function(error) {
            deferred.reject(error);
          });

        return deferred.promise;
      }

      this.add = add;
      this.fetchSubreddit = fetchSubreddit;
      this.afterTag = afterTag;
    });
})();
