;(() => {
  'use strict';

  angular
    .module('orodarius')
    .service('RedditService', [
      '$http',
      '$q',
      'youtubeUrlParser',
      '$filter',
      'LastSubredditsService',
      '$log',
      RedditService
    ]);

  const NUM_MAX_FETCH_RETRIES = 3; // do at most 4 consecutive GETs until expected data received
  const API_ROOT_URL = 'https://www.reddit.com/r/';

  function RedditService($http, $q, youtubeUrlParser, $filter, LastSubredditsService, $log) {
    let NUM_FETCH_RETRIES = 0;
    let AFTER_TAG = '';
    let IS_LOADING = false;
    let CURRENT_SUBREDDIT = '';

    return {
      fetch,
      getNext,
      clear,
      items: []
    };

    function fetch(subredditName = '', afterTag = '') {
      const API_URL = `${API_ROOT_URL}${subredditName}/hot.json?limit=50${afterTag ? `&after=${afterTag}` : ''}`;

      AFTER_TAG = afterTag;
      CURRENT_SUBREDDIT = subredditName;
      IS_LOADING = true;

      return _.isEmpty(subredditName) ? $q.reject() : $http
        .get(API_URL)
        .then(onFetchSuccess.bind(this))
        .catch(() => $q.reject())
        .finally(() => IS_LOADING = false);
    }

    function onFetchSuccess({ data: { data } }) {
      NUM_FETCH_RETRIES++;
      AFTER_TAG = data.after;

      let newItems = uniquefyVideoItems(subredditResultsFilter(data.children));

      if (newItems.length === 0 && NUM_FETCH_RETRIES <= NUM_MAX_FETCH_RETRIES) {
        return fetch.call(this, CURRENT_SUBREDDIT, AFTER_TAG);
      }

      let uniqueNewItems =
        postProcess(newItems)
          .filter(i => !isVideoItemInList(this.items, i));

      this.items = this.items.concat(uniqueNewItems);

      NUM_FETCH_RETRIES = 0;

      // TODO: move out of reddit service, this is will not be reddit specific in the
      // future when more sources will be available
      // haha yeah, when more sources haha
      LastSubredditsService.add({ name: CURRENT_SUBREDDIT });

      return $q.resolve(uniqueNewItems);
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
      return data
        .filter(({ kind }) => kind === 't3') // t3 - link posts
        .filter(({ data }) => /^(m\.)?youtu\.?be/.test(data.domain))
        .map(item => {
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
            redditUrl: `https://reddit.com${item.data.permalink}`,
            redditScore: item.data.score,
            subreddit: item.data.subreddit,
            error: null
          };
        });
    }

    // TODO: refactor to filter?
    function postProcess(newItems) {
      var sanitizers = {
        '&amp;': '&',
        '&copy;': '©',
        '&reg;': '®'
      };

      return newItems
        .map(item => {
          item.title = item.title.replace(/(&amp;|&copy;|&reg;)/g, match => sanitizers[match]),
          item.ownId = _.uniqueId('orodarius_video-item_');
          return item;
        });
    }

    function isVideoItemInList(list, item) {
      return list.some(i => i.videoId === item.videoId);
    }

    function getNext() {
      if(IS_LOADING) {
        return $q.reject();
      }

      if(AFTER_TAG) {
        return this.fetch(CURRENT_SUBREDDIT, AFTER_TAG);
      } else {
        $log.warn('cant expand playlist, no afterTag found!');
        return $q.reject();
      }
    }

    function clear() {
      this.items = [];
    }
  }
})();

