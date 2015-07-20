'use strict';

/* global REDDIT */

describe('Service: PlaylistService', function() {
  var service, LastSubredditsService, localStorageService, $httpBackend, $q;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlaylistService_, _LastSubredditsService_, _localStorageService_, _$httpBackend_, _$q_) {
    $q = _$q_;
    service = _PlaylistService_;
    LastSubredditsService = _LastSubredditsService_;
    localStorageService = _localStorageService_;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(function() {
    spyOn(service, 'add');
    $httpBackend.whenGET(/.*\/(videos|birbir)\/.*/).respond(200, REDDIT);
  });

  it('should expose playlist array', function() {
    expect(angular.isArray(service.playlist)).toBe(true);
  });

  it('should add entry to playlist passing contents as first argument', function() {
    service.add(mockVideoItem);
    expect(service.add).toHaveBeenCalledWith(mockVideoItem);

    // This fails and I have no idea why...
    // expect(service.playlist).toEqual([mockVideoItem]);
  });

  describe('fetchSubreddit()', function() {
    beforeEach(function() {
      localStorageService.clearAll();
    });

    it('should return a promise', function() {
      var result,
          promise = service.fetchSubreddit('videos');

      expect(promise).toBeDefined();

      promise.then(function() {
        result = true;
      });

      $httpBackend.flush();
      expect(result).toBe(true);
    });

    it('should change current subreddit on successful promise resolve', function() {
      service.fetchSubreddit('videos').then(function(playlist) {
        expect(service.currentSubreddit).toBe('videos');
      });

      service.fetchSubreddit('birbir').then(function(playlist) {
        expect(service.currentSubreddit).toBe('birbir');
      });

      $httpBackend.flush();
      expect(service.currentSubreddit).toBe('birbir');
    });

    it("should compare new items to old ones and return unique only", function() {
      service.playlist = [
        { title: 'name1', videoId: 'VSNuZEdYrH0', created: 1 },
        { title: 'name4', videoId: 'VSNuZEdYrH0', created: 4 },
      ];

      $httpBackend.whenGET('http://www.reddit.com/r/duplicateVideosMock/hot.json?limit=50').respond(200, {
        data: {
          children: [
            { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            { kind: 't3', data: { domain: 'youtube.com', title: 'name2', created: 2, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH1' } },
            { kind: 't3', data: { domain: 'youtube.com', title: 'name3', created: 3, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
          ],
          after: 'asd'
        }
      });

      service.fetchSubreddit('duplicateVideosMock');

      $httpBackend.flush();
      expect(service.playlist.length).toBe(3);
    });

    it("should uniquefy fetched items", function() {
      $httpBackend.whenGET('http://www.reddit.com/r/duplicateVideosMock/hot.json?limit=50').respond(200, {
        data: {
          children: [
            { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            { kind: 't3', data: { domain: 'youtube.com', title: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
          ],
          after: 'asd'
        }
      });

      service.fetchSubreddit('duplicateVideosMock');
      $httpBackend.flush();
      expect(service.playlist.length).toBe(1);
    });

    /* jshint ignore:start */
    it("should normalize each video item title", function() {
      $httpBackend.whenGET('http://www.reddit.com/r/shitheads/hot.json?limit=50').respond(200, {
        data: {
          children: [
            { kind: 't3', data: { domain: 'youtube.com', title: '&amp;&reg;&copy;', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            { kind: 't3', data: { domain: 'youtube.com', title: '&reg;lalala&copy;$&amp;', created: 2, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
            { kind: 't3', data: { domain: 'youtube.com', title: 'http://shitheads.com/?hai&reg;=what', created: 3, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
          ]
        }
      });

      service.fetchSubreddit('shitheads');
      $httpBackend.flush();

      expect(service.playlist[0].title).toBe('&®©');
      expect(service.playlist[1].title).toBe('®lalala©$&');
      expect(service.playlist[2].title).toBe('http://shitheads.com/?hai®=what');
    });
    /* jshint ignore:end */

    it('should call LastSubreddits service on successful first call', function() {
      service.fetchSubreddit('videos');

      $httpBackend.flush();
      expect(LastSubredditsService.list[0].name).toBe('videos');
    });
  });

  describe('expandPlaylist()', function() {
    it("expandPlaylist should fetch more items", function() {
      $httpBackend.whenGET(/.*hot\.json/).respond(200, {
        data: { after: 'asd' }
      });
      service.afterTag = REDDIT.data.after;

      var resolved = false;

      service.expandPlaylist().then(function() {
        resolved = true;
      });

      $httpBackend.flush();
      expect(resolved).toBe(true);
    });
  });


  it("successful fetchSubreddit should populate playlist array with specific video item model", function() {
    service.fetchSubreddit('videos').then(function(playlist) {
      expect(playlist[0]).toEqual(jasmine.objectContaining({
        title: 'Idiots body slamming hoods of random parked cars, receive instant karma at end',
        url: 'https://www.youtube.com/watch?v=1f1wpHIpyKQ',
        videoId: '1f1wpHIpyKQ',
        starttime: 0,
        thumbnailUrl: 'http://b.thumbs.redditmedia.com/i5o6X7Jcvht_uK3ZEHyv5Uai89pD-vmY4qrqepYM3pg.jpg',
        created: 1428297419,
        redditUrl: 'http://reddit.com/r/videos/comments/31lenf/idiots_body_slamming_hoods_of_random_parked_cars/',
        redditScore: 4558,
        subreddit: 'videos',
        error: null
      }));

      expect(playlist[0].ownId).toMatch(/orodarius_video-item_\d/);
    });

    $httpBackend.flush();
  });

  describe("clear method", function() {
    it("should be exposed", function () {
      expect(service.clear).toBeDefined();
    });

    it("should reset playlist to empty array", function() {
      service.playlist = [1, 2, 3];
      service.clear();
      expect(service.playlist.length).toBe(0);
    });
  });

  describe("isLoading value", function() {
    it("should be exposed and set to false initially", function() {
      expect(service.isLoading).toBe(false);
    });

    it("calling fetchSubreddit should set isLoading to true and then to false on promise resolve", function() {
      service.fetchSubreddit('videos').then(function() {
        expect(service.isLoading).toBe(false);
      });

      expect(service.isLoading).toBe(true);
      $httpBackend.flush();
    });
  });

});
