;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function($http, $q, $log, LastSubredditsService) {
      var playlist = [],
          redditAPIBaseUrl = 'http://www.reddit.com/r/',
          currentSubreddit,
          afterTag,
          fetchRetries = 0,
          maxFetchRetries = 3; // how many times should I retry GETting from reddit api?

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

      function getVideoInfoFromUrl(url) {
        // inspiration or, basically, stealing from:
        // https://github.com/honestbleeps/Reddit-Enhancement-Suite/blob/ebf015e5b78780f7c86e0c9ae5fde45af2c68fff/lib/modules/hosts/youtube.js#L11
        var hashRe = /^https?:\/\/(?:www\.|m\.)?youtube\.com\/watch\?.*v=([\w\-]+)/i,
            altHashRe = /^https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+)/i;

        var groups = hashRe.exec(url);
        if(!groups) {
          groups = altHashRe.exec(url);
        }

        if(groups) {
          // Check url for timecode e.g t=1h23m15s
          var timecodeRe = /t=(.*?)&|t=(.*?)$/i,
              starttime = 0,
              timecodeResult = timecodeRe.exec(url);

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

      function checkThumbnailValidity(thumbnailUrl) {
        switch(thumbnailUrl) {
          case 'nsfw':
            thumbnailUrl = 'images/nsfw-thumbnail.jpg';
            break;
          case 'default':
          case '':
            thumbnailUrl = 'images/default-thumbnail.png';
            break;
        }

        return thumbnailUrl;
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
                      thumbnailUrl: checkThumbnailValidity(item.data.thumbnail),
                      created: item.data.created,
                      redditUrl: `http://reddit.com${item.data.permalink}`,
                      redditScore: item.data.score,
                      subreddit: item.data.subreddit,
                      error: null
                    };
                  })
                  .value();
      }

      function uniquefyVideoItems(videoItems) {
        var stringifiedArray = _(videoItems).map(item => JSON.stringify(item)).value();

        return _(_.uniq(stringifiedArray)).map(item => JSON.parse(item)).value();
      }

      function compareOldTo(newItem) {
        var duplicateItems = _(playlist).filter(item => item.videoId === newItem.videoId).value().length;
        return duplicateItems > 0 ? false : true;
      }

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

      this.fetchSubreddit = function(subredditName, after, deferred = $q.defer()) {
        var apiUrl = `${redditAPIBaseUrl}${subredditName}/hot.json?limit=50` + (after ? `&after=${after}` : '');
        this.isLoading = true;

        $http.get(apiUrl)
          .then(data => {
            afterTag = data.data.data.after;
            currentSubreddit = subredditName;
            fetchRetries++;

            var newItems = uniquefyVideoItems(subredditResultsFilter(data.data.data.children));

            if(newItems.length !== 0) {
              LastSubredditsService.add({ name: subredditName });
            }

            if(newItems.length === 0 && fetchRetries <= maxFetchRetries) {
              this.fetchSubreddit(currentSubreddit, afterTag, deferred);
            } else {
              this.isLoading = false;
              newItems = postProcess(newItems);

              playlist = after ?
                        playlist.concat(_(newItems).filter(item => compareOldTo(item)).value()) :
                        newItems;

              fetchRetries = 0;
              deferred.resolve(playlist);

              return deferred.promise;
            }
          }, error => {
            this.isLoading = false;
            deferred.reject(error);
          });

        return deferred.promise;
      };

      this.expandPlaylist = function() {
        if(!this.isLoading) {
          var deferred = $q.defer();

          if(afterTag) {
            this.fetchSubreddit(currentSubreddit, afterTag).then(
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
      };

      this.clear = function() {
        playlist = [];
      };

      this.add = add;
      this.afterTag = afterTag;
      this.isLoading = false;
    });
})();
