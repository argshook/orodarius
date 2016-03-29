;(() => {
  'use strict';

  angular.module('orodarius').service('RedditService', ['$http', '$q', 'youtubeUrlParser', '$filter', 'LastSubredditsService', '$log', function($http, $q, youtubeUrlParser, $filter, LastSubredditsService, $log) {
    let NUM_FETCH_RETRIES = 0,
        NUM_MAX_FETCH_RETRIES = 3, // means there might be at most 4 consecutive GETs until proper data received
        AFTER_TAG = '',
        IS_LOADING = false,
        CURRENT_SUBREDDIT = '';

    this.fetch = fetch;
    this.items = [];
    this.getNext = getNext;

    const API_ROOT_URL = 'http://www.reddit.com/r/';

    function fetch(subredditName = '', afterTag = '') {
      const deferred = $q.defer(),
            apiUrl = `${API_ROOT_URL}${subredditName}/hot.json?limit=50` + (afterTag ? `&after=${afterTag}` : '');

      AFTER_TAG = afterTag;
      CURRENT_SUBREDDIT = subredditName;
      IS_LOADING = true;

      if(_.isEmpty(subredditName)) {
        deferred.reject();
      } else {
        $http
          .get(apiUrl)
          .success(onFetchSuccess.bind(this))
          .error(onFetchFailure.bind(this));
      }

      function onFetchSuccess(data, status, headers, config) {
        const fetchedData = data.data;

        NUM_FETCH_RETRIES++;
        AFTER_TAG = fetchedData.after;
        IS_LOADING = false;

        let newItems = uniquefyVideoItems(subredditResultsFilter(fetchedData.children));

        if(newItems.length) {
          // TODO: move out of reddit service, this is will not be reddit specific in the
          // future when more sources will be available
          LastSubredditsService.add({ name: subredditName });
        }

        if(newItems.length === 0 && NUM_FETCH_RETRIES <= NUM_MAX_FETCH_RETRIES) {
          fetch.call(this, subredditName, AFTER_TAG, deferred);
        } else {
          let processNewItems = postProcess(newItems),
              uniqueNewItems = _.filter(newItems, item => compareOldTo.call(this, item));

          this.items = this.items.concat(uniqueNewItems);

          NUM_FETCH_RETRIES = 0;

          deferred.resolve(uniqueNewItems);
        }
      }

      function onFetchFailure(data, status, headers, config) {
        IS_LOADING = false;
        deferred.reject(data);
      }

      return deferred.promise;
    }

    // TODO: refactor to filter?
    function uniquefyVideoItems(videoItems) {
      var stringifiedArray = _(videoItems).map(item => JSON.stringify(item)).value();
      // console.log(_(_.uniq(stringifiedArray)).map(item => JSON.parse(item)).value().length);
      return _(_.uniq(stringifiedArray)).map(item => JSON.parse(item)).value();
    }

    function subredditResultsFilter(data) {
      // TODO: refactor to allow different sources but output same structure as now
      // TODO: move this to separate factory which would accept all kinds of sources but output
      // canonical object for the whole app to use
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

    function compareOldTo(newItem) {
      var duplicateItems = _(this.items).filter(item => item.videoId === newItem.videoId).value().length;

      return duplicateItems > 0 ? false : true;
    }

    function getNext() {
      let deferred = $q.defer();
      if(!IS_LOADING) {
        if(AFTER_TAG) {
          this.fetch(CURRENT_SUBREDDIT, AFTER_TAG).then(
            newItems => deferred.resolve(newItems),
            () => deferred.reject()
          );
        } else {
          $log.warn('cant expand playlist, no afterTag found!');
          deferred.reject();
        }
      }

      return deferred.promise;
    }
  }]);
})();

