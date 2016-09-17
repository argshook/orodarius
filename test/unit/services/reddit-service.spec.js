'use strict';

/* global REDDIT */

describe('Service: RedditService', function() {
  var RedditService, LastSubredditsService, $httpBackend, $http, localStorageService;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_RedditService_, _$httpBackend_, _$http_, _LastSubredditsService_, _localStorageService_) {
    RedditService         = _RedditService_;
    $http                 = _$http_;
    $httpBackend          = _$httpBackend_;
    LastSubredditsService = _LastSubredditsService_;
    localStorageService   = _localStorageService_;
  }));

  describe('fetch()', function() {
    beforeEach(function() {
      localStorageService.clearAll();
    });

    describe('when successful', function() {
      it('should call correct api url and return response on promise resolve', function() {
        var responseData;
        $httpBackend.whenGET(/.*reddit.*\/videos\/.*/).respond(200, REDDIT);

        RedditService.fetch('videos').then(function(response) {
          responseData = response;
        });

        $httpBackend.flush();

        expect(responseData.length).toBeGreaterThan(0);
      });

      it('should add fetched data to `items` array', function() {
        $httpBackend.whenGET(/.*reddit.*\/videos\/.*/).respond(200, REDDIT);
        RedditService.fetch('videos');
        $httpBackend.flush();
        expect(RedditService.items.length).toBeGreaterThan(0);
      });

      it("should compare new items to old ones and return unique only", function() {
        RedditService.items = [
          { title: 'name1', videoId: 'VSNuZEdYrH0', created: 1 },
          { title: 'name4', videoId: 'VSNuZEdYrH0', created: 4 },
        ];

        $httpBackend.whenGET('https://www.reddit.com/r/duplicateVideosMock/hot.json?limit=50').respond(200, {
          data: {
            children: [
              { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
              { kind: 't3', data: { domain: 'youtube.com', title: 'name2', created: 2, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH1' } },
              { kind: 't3', data: { domain: 'youtube.com', title: 'name3', created: 3, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            ],
            after: 'asd'
          }
        });

        RedditService.fetch('duplicateVideosMock');

        $httpBackend.flush();
        expect(RedditService.items.length).toBe(3);
      });

      it("should uniquefy fetched items", function() {
        $httpBackend.whenGET('https://www.reddit.com/r/duplicateVideosMock/hot.json?limit=50').respond(200, {
          data: {
            children: [
              { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
              { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
              { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            ],
            after: 'asd'
          }
        });

        RedditService.fetch('duplicateVideosMock');
        $httpBackend.flush();
        expect(RedditService.items.length).toBe(1);
      });

      /* jshint ignore:start */
      it("should normalize each video item title", function() {
        $httpBackend.whenGET('https://www.reddit.com/r/shitheads/hot.json?limit=50').respond(200, {
          data: {
            children: [
              { kind: 't3', data: { domain: 'youtube.com', title: '&amp;&reg;&copy;', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
              { kind: 't3', data: { domain: 'youtube.com', title: '&reg;lalala&copy;$&amp;', created: 2, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
              { kind: 't3', data: { domain: 'youtube.com', title: 'https://shitheads.com/?hai&reg;=what', created: 3, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            ]
          }
        });

        RedditService.fetch('shitheads');
        $httpBackend.flush();

        expect(RedditService.items[0].title).toBe('&®©');
        expect(RedditService.items[1].title).toBe('®lalala©$&');
        expect(RedditService.items[2].title).toBe('https://shitheads.com/?hai®=what');
      });
      /* jshint ignore:end */

      it('should call LastSubreddits service on successful first call', function() {
        $httpBackend.whenGET(/.*/).respond(200, REDDIT);
        RedditService.fetch('videos');

        $httpBackend.flush();
        expect(LastSubredditsService.getList()[0].name).toBe('videos');
      });

      it("should populate playlist array with specific video item model", function() {
        $httpBackend.whenGET(/.*\/videos/).respond(200, REDDIT);

        RedditService.fetch('videos').then(function(playlist) {
          expect(playlist[0]).toEqual(jasmine.objectContaining({
            title: 'Idiots body slamming hoods of random parked cars, receive instant karma at end',
            url: 'https://www.youtube.com/watch?v=1f1wpHIpyKQ',
            videoId: '1f1wpHIpyKQ',
            starttime: 0,
            thumbnailUrl: 'https://b.thumbs.redditmedia.com/i5o6X7Jcvht_uK3ZEHyv5Uai89pD-vmY4qrqepYM3pg.jpg',
            created: 1428297419,
            redditUrl: 'https://reddit.com/r/videos/comments/31lenf/idiots_body_slamming_hoods_of_random_parked_cars/',
            redditScore: 4558,
            subreddit: 'videos',
            error: null
          }));

          expect(playlist[0].ownId).toMatch(/orodarius_video-item_\d/);
        });

        $httpBackend.flush();
      });
    });

    describe('when unsuccessful', function() {
      beforeEach(function() {
        $httpBackend.whenGET(/.*reddit.*\/videos\/.*/).respond(500);
      });

      it('should reject promise', function() {
        var rejected = false;
        RedditService.fetch('videos').then(angular.noop, function() {
          rejected = true;
        });
        $httpBackend.flush();
        expect(rejected).toBe(true);
      });
    });

    describe('when no usable video items are returned on first fetch', function() {
      it('should call fetch again with correct afterTag', function() {
        var badResponse = {
          data: {
            children: [],
            after: 'correctAfterTag'
          }
        };

        var goodResponse = {
          data: {
            children: [
              { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            ],
            after: 'correctAfterTag2'
          }
        };

        $httpBackend.whenGET(/hot.json\?limit=50$/).respond(200, badResponse);
        $httpBackend.whenGET(/&after=correctAfterTag/).respond(200, goodResponse);

        RedditService.fetch('videos');
        $httpBackend.flush();

        expect(RedditService.items.length).toBeGreaterThan(0);
      });
    });

    describe('when no subreddit name given', function() {
      it('should reject promise and dont fetch anything', inject(function($timeout) {
        var rejected = false;
        RedditService.fetch().then(angular.noop, function() {
          rejected = true;
        });
        $timeout.flush();
        expect(rejected).toBe(true);
      }));
    });
  });

  describe('items', function() {
    it('should be set to empty array initially', function() {
      expect(Array.isArray(RedditService.items)).toBe(true);
      expect(RedditService.items.length).toBe(0);
    });
  });

  describe('getNext()', function() {
    describe('when AFTER_TAG non empty', function() {
      it("should fetch more items", function() {
        $httpBackend.whenGET(/whatever/).respond(200, {
          data: {
            children: [
              { kind: 't3', data: { domain: 'youtube.com', title: '&amp;&reg;&copy;', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            ],
            after: 'asd'
          }
        });

        var resolved = false;

        RedditService.fetch('whatever');
        $httpBackend.flush();

        RedditService.getNext().then(function() {
          resolved = true;
        });

        $httpBackend.flush();
        expect(resolved).toBe(true);
      });

      it('should keep existing items if no more items where fetched', function() {
        $httpBackend.whenGET(/.*hot\.json/).respond(200, {
          data: { children: [], after: 'asd' }
        });

        RedditService.items = ['hello this is me'];

        RedditService.fetch('whatever');
        RedditService.getNext();
        $httpBackend.flush();
        expect(RedditService.items).toEqual(['hello this is me']);
      });
    });

    describe('when AFTER_TAG is empty', function() {
      it('should reject promise', inject(function($timeout) {
        $httpBackend.whenGET(/whatever/).respond(200, {
          data: {
            children: [
              { kind: 't3', data: { domain: 'youtube.com', title: '&amp;&reg;&copy;', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            ],
            after: ''
          }
        });

        var rejected = false;
        RedditService.fetch('whatever');
        $httpBackend.flush();

        RedditService.getNext().then(angular.noop, function() {
          rejected = true;
        });
        $timeout.flush();

        expect(rejected).toBe(true);
      }));
    });
  });

  describe('clear()', function() {
    it('should set items to empty array', function() {
      RedditService.items = [1, 2, 3];
      RedditService.clear();
      expect(RedditService.items).toEqual([]);
    });
  });
});

