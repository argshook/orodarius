;(function () {
  'use strict';

  angular.module('orodarius', ['LocalStorageModule']).config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('orodarius');
  }).run(function ($window) {
    $($window).on('resize', _.throttle(function () {
      $('#main-video-player').attr('width', $window.innerWidth).attr('height', $window.innerHeight);
    }, 400));
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').controller('baseCtrl', function ($scope, PlayerService, SidebarService, PlaylistService) {
    this.keyboardEventsOptions = {
      38: function _() {
        playPrevious();
      }, // up
      37: function _() {
        playPrevious();
      }, // left
      39: function _() {
        playNext();
      }, // right
      40: function _() {
        playNext();
      }, // down
      32: function _() {
        PlayerService.playOrPause();
      }, // space
      16: function _(event) {
        // shift
        SidebarService.toggle();
        $scope.$apply();
      },
      27: function _(event) {
        // escape
        SidebarService.close();
        $scope.$apply();
      }
    };

    function playPrevious() {
      if (PlaylistService.playlist.length) {
        PlayerService.playPrevious();
        $scope.$apply();
      }
    }

    function playNext() {
      if (PlaylistService.playlist.length) {
        PlayerService.playNext();
        $scope.$apply();
      }
    }
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').controller('playerOverlayCtrl', function ($scope, PlayerService, PlaylistService) {
    $scope.playerService = PlayerService;
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').directive('ngBindKeys', function ($document) {
    return {
      restrict: 'A',
      scope: {
        ngBindKeysOptions: '=ngBindKeys'
      },
      link: function link(scope, element, attr) {
        var keyCodes = _(scope.ngBindKeysOptions).map(function (fn, keyCode) {
          return keyCode;
        }).value();

        $document.on('keydown', function (event) {
          if (event.target.nodeName !== 'INPUT') {
            var currentKeyCode = event.which || event.keyCode;

            if (scope.ngBindKeysOptions[currentKeyCode]) {
              event.preventDefault();
              scope.ngBindKeysOptions[currentKeyCode].call({}, event);
            }
          }
        });
      }
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').directive('ngEnter', function () {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        ngEnter: '&',
        ngEnterOptions: '='
      },
      link: function link(scope, element, attr) {
        element.on('keypress', function (event) {
          if (event.which === 13 || event.keyCode === 13) {
            scope.ngEnter.call();

            if (scope.ngEnterOptions.blurOnEnter) {
              $(element).blur();
            }
          }
        });
      }
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').directive('ngInputChange', function () {
    return {
      restrict: 'A',
      scope: {
        ngInputChange: '&'
      },
      replace: false,
      link: function link(scope, element, attrs) {
        $(element).on('change input', function () {
          scope.ngInputChange.call(null);
        });

        scope.$on('$destroy', function () {
          $(element).off('change input');
        });
      }
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').directive('ngScrollOn', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        ngScrollOn: '='
      },
      link: function link(scope, element, attr) {
        // TODO: ngScrollOn should contain currentVideoItem
        // not good, this directive should not care about what it gets,
        // just catch change

        scope.$watch('ngScrollOn', function (newVal, oldVal) {
          $timeout(function () {
            var $currentItem = $(element).find('.current').prev().prev();

            if ($currentItem.length) {
              // scrollIntoView is native, believe it or not
              // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
              $currentItem[0].scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            }
          });
        });
      }
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').directive('youtubePlayer', function ($window, PlayerService) {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        // scope.isDisabled comes from karma tests.
        // TODO: nothing like that should be done, figure out how to
        // prevent script src loading during karma tests
        if (!scope.isDisabled) {
          var tag = $('<script>').attr({
            src: 'https://www.youtube.com/iframe_api',
            async: true
          });

          // this is suggested here:
          // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
          // not sure if it really needs to be first
          $('script').eq(0).before(tag);
        }

        $window.onYouTubeIframeAPIReady = function () {
          PlayerService.createNewPlayer(attrs.youtubePlayer || 'main-video-player');
        };
      }
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').factory('youtubeUrlParser', function () {
    // inspiration or, basically, stealing from:
    // https://github.com/honestbleeps/Reddit-Enhancement-Suite/blob/ebf015e5b78780f7c86e0c9ae5fde45af2c68fff/lib/modules/hosts/youtube.js#L11

    var hashRe = /^(?:https?:)?(?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?.*v=([\w\-]+)/i,
        altHashRe = /^https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+)/i;

    function getVideoInfoFromUrl(url) {
      var groups = hashRe.exec(url);

      if (!groups) {
        groups = altHashRe.exec(url);
      }

      if (groups) {
        // Check url for timecode e.g t=1h23m15s
        var timecodeRe = /t=(.*?)&|t=(.*?)$/i,
            starttime = 0,
            timecodeResult = timecodeRe.exec(url);

        if (timecodeResult !== null) {
          var time_blocks = { 'h': 3600, 'm': 60, 's': 1 },
              timeRE = /[0-9]+[h|m|s]/ig;

          // Get each segment e.g. 8m and calculate its value in seconds
          var timeMatch = timecodeResult[0].match(timeRE);

          if (timeMatch) {
            timeMatch.forEach(function (ts) {
              var unit = time_blocks[ts.charAt(ts.length - 1)],
                  amount = parseInt(ts.slice(0, -1), 10);

              // Add each unit to starttime
              starttime += unit * amount;
            });
          } else {
            // support direct timestamp e.g. t=200
            starttime = parseInt(timecodeResult[0].replace('t=', ''), 10);
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
        return '';
      }
    }

    return getVideoInfoFromUrl;
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').filter('thumbnailUrlFilter', function () {
    return function (thumbnailUrl) {
      switch (thumbnailUrl) {
        case 'nsfw':
          return 'images/nsfw-thumbnail.jpg';
        case 'default':
          return 'images/default-thumbnail.png';
      }

      return thumbnailUrl;
    };
  });
})();
;(function () {
  'use strict';

  // TODO: this will eventually be lastQueriesService or something
  angular.module('orodarius').service('LastSubredditsService', function (localStorageService) {
    var lastSubredditsStorageName = 'lastSubreddits',
        lastSubredditsLimit = 5;

    var lastSubreddits = localStorageService.get(lastSubredditsStorageName);

    if (!angular.isArray(lastSubreddits)) {
      lastSubreddits = [];
    }

    function addItem(item) {
      if (!isItemDuplicate(item)) {
        lastSubreddits.unshift(item);
        lastSubreddits.slice(0, lastSubredditsLimit);
        updateLocalStorage();
      }
    }

    function isItemDuplicate(item) {
      return _.findIndex(lastSubreddits, function (obj) {
        return item.name === obj.name;
      }) !== -1 ? true : false;
    }

    function updateLocalStorage() {
      localStorageService.set('lastSubreddits', lastSubreddits);
    }

    return {
      list: lastSubreddits,
      add: addItem
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').service('PlayerService', function ($window, $rootScope, PlaylistService) {
    var player,
        currentVideoItem = {};

    Object.defineProperties(this, {
      player: {
        enumerable: true,
        configurable: true,
        get: function get() {
          return player;
        },
        set: function set(value) {
          player = value;
        }
      },
      currentVideoItem: {
        enumerable: true,
        configurable: true,
        get: function get() {
          return currentVideoItem;
        },
        set: function set(value) {
          currentVideoItem = value;
        }
      }
    });

    function onPlayerReady() {}

    function onPlayerStateChange(event) {
      // event.data holds event type, one of the following:
      // -1 (unstarted)
      // 0 (ended)
      // 1 (playing)
      // 2 (paused)
      // 3 (buffering)
      // 5 (video cued).

      // if event is 0 (ended), play another video.
      if (event.data === 0) {
        this.playNext();
      }
    }

    function onPlayerError(event) {
      // https://developers.google.com/youtube/iframe_api_reference#onError
      if ([2, 5, 100, 101, 150].indexOf(event.data) != -1) {
        this.markCurrentVideoItemWithError(event.data);
        // TODO: stop trying after n tries
        this.playNext();
      }
    }

    function currentItemMatcher(item) {
      return item.ownId === currentVideoItem.ownId;
    }

    this.isPlaying = false;

    this.markCurrentVideoItemWithError = function (errorCode) {
      var currentItemIndex = _.findIndex(PlaylistService.playlist, function (item) {
        return item.ownId === currentVideoItem.ownId;
      });

      PlaylistService.playlist[currentItemIndex].error = {
        code: errorCode,
        message: errorMessage()
      };

      function errorMessage() {
        switch (errorCode) {
          case 2:
            return 'can\'t parse video ID';
          case 5:
            return 'problem with HTML5 Youtube player';
          case 100:
            return 'video is private or removed';
          case 101:
          case 150:
            return 'uploader does not allow embedded playback';
        }
      }
    };

    this.createNewPlayer = function (elementId, options) {
      var defaultPlayerOptions = {
        width: $window.innerWidth, // TODO: perhaps move to settings value
        height: $window.innerHeight,
        videoId: 'DT2oAtQtFrg',
        playerVars: {
          autohide: 1,
          autoplay: 0,
          controls: 1,
          disablekb: 1,
          enablejsapi: 1
        }
      };

      angular.extend(defaultPlayerOptions, options);

      // YT should be available since it comes from iframe_api
      player = new YT.Player(elementId || 'main-video-player', defaultPlayerOptions);

      player.addEventListener('onReady', onPlayerReady.bind(this));
      player.addEventListener('onError', onPlayerError.bind(this));
      player.addEventListener('onStateChange', onPlayerStateChange.bind(this));

      return player;
    };

    this.playVideo = function (item) {
      if (player && player.loadVideoById && item) {
        // TODO: skip misunderstood urls for now
        if (item.url === false) {
          this.playNext();
          return;
        }

        player.loadVideoById({
          videoId: item.videoId,
          startSeconds: item.starttime || 0,
          suggestedQuality: 'default'
        });
        currentVideoItem = item;
        this.isPlaying = true;
        $rootScope.$emit('videoPlay', currentVideoItem);
      }
    };

    this.playNext = function () {
      var _this = this;

      var nextVideoItemIndex = _.findIndex(PlaylistService.playlist, currentItemMatcher) + 1;

      if (nextVideoItemIndex === PlaylistService.playlist.length) {
        PlaylistService.expandPlaylist().then(function (data) {
          _this.playVideo(PlaylistService.playlist[nextVideoItemIndex]);
        });
      } else {
        this.playVideo(PlaylistService.playlist[nextVideoItemIndex]);
      }
    };

    this.playPrevious = function () {
      var previousVideoItemIndex = _.findIndex(PlaylistService.playlist, currentItemMatcher) - 1;
      this.playVideo(PlaylistService.playlist[previousVideoItemIndex < 0 ? 0 : previousVideoItemIndex], 'previous');
    };

    this.playOrPause = function () {
      if (this.isPlaying) {
        player.pauseVideo();
        this.isPlaying = false;
      } else {
        player.playVideo();
        this.isPlaying = true;
      }
    };

    this.resetCurrentVideoItem = function () {
      currentVideoItem = undefined;
    };
  });
})();

// player.playVideo();
;(function () {
  'use strict';

  angular.module('orodarius').service('PlaylistService', function ($http, $q, $log, LastSubredditsService, youtubeUrlParser, $filter, RedditService) {

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

    function fetchSubreddit() {
      var _this = this;

      var subredditName = arguments[0] === undefined ? '' : arguments[0];

      this.isLoading = true;

      return RedditService.fetch(subredditName).then(function (newItems) {
        _this.currentSubreddit = subredditName;

        if (newItems) {
          _this.playlist = _this.playlist.concat(newItems);
        }

        _this.isLoading = false;
      }, function () {
        _this.isLoading = false;
      });
    }

    function expandPlaylist() {
      var _this2 = this;

      this.isLoading = true;
      return RedditService.getNext().then(function (newItems) {
        if (newItems) {
          _this2.playlist = _this2.playlist.concat(newItems);
        }

        _this2.isLoading = false;
      }, function () {
        _this2.isLoading = false;
      });
    }

    function clear() {
      this.playlist = [];
    }
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').service('RedditService', function ($http, $q, youtubeUrlParser, $filter, LastSubredditsService, $log) {
    var NUM_FETCH_RETRIES = 0,
        NUM_MAX_FETCH_RETRIES = 3,
        // means there might be at most 4 consecutive GETs until proper data received
    AFTER_TAG = '',
        IS_LOADING = false,
        CURRENT_SUBREDDIT = '';

    this.fetch = fetch;
    this.items = [];
    this.getNext = getNext;

    var API_ROOT_URL = 'http://www.reddit.com/r/';

    function fetch() {
      var subredditName = arguments[0] === undefined ? '' : arguments[0];
      var afterTag = arguments[1] === undefined ? '' : arguments[1];

      var deferred = $q.defer(),
          apiUrl = '' + API_ROOT_URL + '' + subredditName + '/hot.json?limit=50' + (afterTag ? '&after=' + afterTag : '');

      AFTER_TAG = afterTag;
      CURRENT_SUBREDDIT = subredditName;
      IS_LOADING = true;

      if (_.isEmpty(subredditName)) {
        deferred.reject();
      } else {
        $http.get(apiUrl).success(onFetchSuccess.bind(this)).error(onFetchFailure.bind(this));
      }

      function onFetchSuccess(data, status, headers, config) {
        var _this = this;

        var fetchedData = data.data;

        NUM_FETCH_RETRIES++;
        AFTER_TAG = fetchedData.after;
        IS_LOADING = false;

        var newItems = uniquefyVideoItems(subredditResultsFilter(fetchedData.children));

        if (newItems.length) {
          // TODO: move out of reddit service, this is will not be reddit specific in the
          // future when more sources will be available
          LastSubredditsService.add({ name: subredditName });
        }

        if (newItems.length === 0 && NUM_FETCH_RETRIES <= NUM_MAX_FETCH_RETRIES) {
          fetch.call(this, subredditName, AFTER_TAG, deferred);
        } else {
          var processNewItems = postProcess(newItems),
              uniqueNewItems = _.filter(newItems, function (item) {
            return compareOldTo.call(_this, item);
          });

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
      var stringifiedArray = _(videoItems).map(function (item) {
        return JSON.stringify(item);
      }).value();
      // console.log(_(_.uniq(stringifiedArray)).map(item => JSON.parse(item)).value().length);
      return _(_.uniq(stringifiedArray)).map(function (item) {
        return JSON.parse(item);
      }).value();
    }

    function subredditResultsFilter(data) {
      // TODO: refactor to allow different sources but output same structure as now
      // TODO: move this to separate factory which would accept all kinds of sources but output
      // canonical object for the whole app to use
      return _(data).filter(function (item) {
        return item.kind === 't3' && item.data.domain === 'youtube.com';
      }) // t3 - link posts
      .map(function (item) {
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
          redditUrl: 'http://reddit.com' + item.data.permalink,
          redditScore: item.data.score,
          subreddit: item.data.subreddit,
          error: null
        };
      }).value();
    }

    // TODO: refactor to filter?
    function postProcess(newItems) {
      var sanitizers = {
        '&amp;': '&',
        '&copy;': '©',
        '&reg;': '®'
      };

      return _(newItems).map(function (item) {
        item.title = item.title.replace(/(&amp;|&copy;|&reg;)/g, function (match) {
          return sanitizers[match];
        }), item.ownId = _.uniqueId('orodarius_video-item_');
        return item;
      }).value();
    }

    function compareOldTo(newItem) {
      var duplicateItems = _(this.items).filter(function (item) {
        return item.videoId === newItem.videoId;
      }).value().length;

      return duplicateItems > 0 ? false : true;
    }

    function getNext() {
      var deferred = $q.defer();
      if (!IS_LOADING) {
        if (AFTER_TAG) {
          this.fetch(CURRENT_SUBREDDIT, AFTER_TAG).then(function (newItems) {
            return deferred.resolve(newItems);
          }, function () {
            return deferred.reject();
          });
        } else {
          $log.warn('cant expand playlist, no afterTag found!');
          deferred.reject();
        }
      }

      return deferred.promise;
    }
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').service('SettingsService', function (localStorageService) {
    var settingsStorageName = 'settings',
        settings = localStorageService.get(settingsStorageName);

    if (settings === null) {
      settings = {
        isSidebarSticky: false,
        isFocusForced: false
      };
      updateStorage();
    }

    function add(name, setting) {
      settings[name] = setting;
      updateStorage();
    }

    function toggle(name) {
      if (typeof settings[name] !== 'undefined') {
        settings[name] = !settings[name];
        updateStorage();
      } else {
        settings[name] = true;
      }
    }

    function updateStorage() {
      localStorageService.set(settingsStorageName, settings);
    }

    return { list: settings, add: add, toggle: toggle };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').service('SidebarService', function () {
    this.isOpen = true;

    this.toggle = function (toggleValue) {
      this.isOpen = toggleValue || !this.isOpen;
    };

    this.close = function () {
      this.isOpen = false;
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').directive('orodariusSidebar', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/orodarius-sidebar.html',
      controller: 'sidebarCtrl',
      controllerAs: 'sidebar',
      bindToController: true
    };
  });
})();
;(function () {
  'use strict';

  angular.module('orodarius').controller('sidebarCtrl', function ($scope, $rootScope, $http, $timeout, $window, PlaylistService, PlayerService, SidebarService, LastSubredditsService, SettingsService) {
    // TODO: shouldn't expose the whole service just the parts needed.
    $scope.sidebarService = SidebarService;
    $scope.playlistService = PlaylistService;
    $scope.playerService = PlayerService;
    $scope.lastSubreddits = LastSubredditsService.list;

    $scope.currentSubreddit = '';
    $scope.isLoading = false;

    $scope.settings = SettingsService;

    this.lastUpdatedData = {};

    // TODO: not nice
    $rootScope.$on('videoPlay', function (currentVideoItem) {
      $timeout(function () {
        $scope.$apply();
      });
    });

    this.toggleSidebar = function () {
      $scope.sidebarService.toggle();
    };

    this.toggleFocusForced = function () {
      SettingsService.toggle('isFocusForced');
      $window[(SettingsService.list.isFocusForced ? 'add' : 'remove') + 'EventListener']('blur', windowBlurHanlder);
    };

    this.playVideo = function (item) {
      $scope.playerService.playVideo(item);

      if (!SettingsService.list.isSidebarSticky) {
        $scope.sidebarService.toggle();
      }
    };

    this.fillPlaylistWith = function () {
      var subreddit = arguments[0] === undefined ? 'videos' : arguments[0];

      $scope.playlistService.clear();
      $scope.currentSubreddit = subreddit;
      $scope.isLoading = true;
      $scope.playlistService.fetchSubreddit(subreddit).then(function (data) {
        $scope.playerService.playVideo($scope.playlistService.playlist[0]);
        $scope.isLoading = false;
      });
    };

    this.expandPlaylist = function () {
      $scope.isLoading = true;
      $scope.playlistService.expandPlaylist().then(function () {
        $scope.isLoading = false;
      });
    };

    this.suggestedSubreddits = [{ name: 'videos' }, { name: 'youtubehaiku' }, { name: 'artisanvideos' }, { name: 'listentothis' }, { name: 'gamephysics' }, { name: 'music' }, { name: 'videos+youtubehaiku' }];

    $scope.isListItemCurrentlyPlayed = function (item) {
      return item.videoId === $scope.playerService.currentVideoItem.videoId;
    };

    if (SettingsService.list.isFocusForced) {
      $window.addEventListener('blur', windowBlurHanlder);
    }

    this.getLastUpdated = function () {
      var _this = this;

      $http.get('https://api.github.com/repos/argshook/orodarius/commits/gh-pages').then(function (data) {
        return _this.lastUpdatedData = {
          url: data.data.html_url,
          date: data.data.commit.author.date,
          message: data.data.commit.message
        };
      });
    };

    this.getLastUpdated();

    function windowBlurHanlder() {
      $timeout(function () {
        $window.focus();
      }, 100);
    }
  });
})();

//# sourceMappingURL=app.js.map