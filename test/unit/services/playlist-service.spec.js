'use strict';

/* global REDDIT */

describe('Service: PlaylistService', function() {
  var service,
    LastSubredditsService,
    localStorageService,
    RedditService,
    $httpBackend,
    $q;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(
    _PlaylistService_,
    _LastSubredditsService_,
    _localStorageService_,
    _$httpBackend_,
    _$q_,
    _RedditService_
  ) {
    $q = _$q_;
    service = _PlaylistService_;
    LastSubredditsService = _LastSubredditsService_;
    localStorageService = _localStorageService_;
    $httpBackend = _$httpBackend_;
    RedditService = _RedditService_;
  }));

  beforeEach(function() {
    $httpBackend.whenGET(/.*\/(videos|birbir)\/.*/).respond(200, REDDIT);
  });

  it('should expose playlist array', function() {
    expect(angular.isArray(service.playlist)).toBe(true);
  });

  describe('add()', function() {
    it('should add item to playlist', function() {
      service.add(mockVideoItem);
      expect(service.playlist).toEqual([mockVideoItem]);
    });

    it('should publish playlist subscribers', function() {
      var published = false;
      service.subscribePlaylist(function() {
        published = true;
      });
      service.add(mockVideoItem);
      expect(published).toBe(true);
    });
  });

  describe('fetchSubreddit()', function() {
    beforeEach(function() {
      localStorageService.clearAll();
    });

    it('should call RedditService.fetch with correct parameters', function() {
      spyOn(RedditService, 'fetch').and.callThrough();
      service.fetchSubreddit('videos');
      expect(RedditService.fetch).toHaveBeenCalledWith('videos');
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

    // saving for upcoming fetchQuery() which will be similar
    // it('should change current subreddit on successful promise resolve', function() {
    //   service.fetchSubreddit('videos').then(function(playlist) {
    //     expect(service.currentSubreddit).toBe('videos');
    //   });

    //   service.fetchSubreddit('birbir').then(function(playlist) {
    //     expect(service.currentSubreddit).toBe('birbir');
    //   });

    //   $httpBackend.flush();
    //   expect(service.currentSubreddit).toBe('birbir');
    // });

    it('should set isLoading to false when successful', function() {
      $httpBackend.whenGET(/whatever/).respond(200, REDDIT);
      service.fetchSubreddit('whatever');
      expect(service.isLoading).toBe(true);
      $httpBackend.flush();
      expect(service.isLoading).toBe(false);
    });

    it('should set isLoading to false when unsuccessful', function() {
      $httpBackend.whenGET(/whatever/).respond(500);
      service.fetchSubreddit('whatever');
      expect(service.isLoading).toBe(true);
      $httpBackend.flush();
      expect(service.isLoading).toBe(false);
    });

    describe('when resolved', function() {
      it('should return new items', function() {
        var expectedItems;
        $httpBackend.whenGET(/whatever/).respond(200, REDDIT);

        service.fetchSubreddit('whatever').then(function(newItems) {
          expectedItems = newItems;
        });

        $httpBackend.flush();
        expect(expectedItems.length).toBeGreaterThan(0);
      });

      it('should call each subscriber set with observerPlaylist', function() {
        $httpBackend.whenGET(/whatever/).respond(200, REDDIT);
        var called = false;
        service.subscribePlaylist(function() {
          called = true;
        });
        service.fetchSubreddit('whatever');
        $httpBackend.flush();
        expect(called).toBe(true);
      });
    });
  });

  describe('expandPlaylist()', function() {
    it('should call RedditService.getNext and return promise', function() {
      spyOn(RedditService, 'getNext').and.callThrough();
      var promise = service.expandPlaylist();
      expect(RedditService.getNext).toHaveBeenCalled();
      expect(typeof promise.then).toBe('function');
    });

    describe('when successful', function() {
      beforeEach(function() {
        $httpBackend.whenGET(/whatever/).respond(200, REDDIT);
        service.fetchSubreddit('whatever');
        $httpBackend.flush();
      });

      it('should set isLoading to false', function() {
        expect(service.isLoading).toBe(false);
        service.expandPlaylist();
        expect(service.isLoading).toBe(true);
        $httpBackend.flush();
        expect(service.isLoading).toBe(false);
      });

      it('should publish playlist subscribers', function() {
        var published = false;
        service.subscribePlaylist(function() {
          published = true;
        });
        service.expandPlaylist();
        $httpBackend.flush();
        expect(published).toBe(true);
      });
    });

    describe('when unsuccessful', function() {
      it('should set isLoading to false', inject(function($timeout) {
        $httpBackend.whenGET(/whatever/).respond(500);
        service.fetchSubreddit('whatever');
        $httpBackend.flush();
        expect(service.isLoading).toBe(false);
        service.expandPlaylist();
        expect(service.isLoading).toBe(true);
        $timeout.flush();
        expect(service.isLoading).toBe(false);
      }));
    });
  });

  describe('clear()', function() {
    it('should reset playlist to empty array', function() {
      service.playlist = [1, 2, 3];
      service.clear();
      expect(service.playlist.length).toBe(0);
    });

    it('should publish playlist subscribers', function() {
      var published = false;
      service.subscribePlaylist(function() {
        published = true;
      });
      service.clear();
      expect(published).toBe(true);
    });

    it('should call RedditService.clear()', function() {
      spyOn(RedditService, 'clear');
      service.clear();
      expect(RedditService.clear).toHaveBeenCalled();
    });
  });

  describe('isLoading value', function() {
    it('should be exposed and set to false initially', function() {
      expect(service.isLoading).toBe(false);
    });

    it('calling fetchSubreddit should set isLoading to true and then to false on promise resolve', function() {
      service.fetchSubreddit('videos').then(function() {
        expect(service.isLoading).toBe(false);
      });

      expect(service.isLoading).toBe(true);
      $httpBackend.flush();
    });
  });

  describe('subscribePlaylist', function() {
    it('should be defined', function() {
      expect(service.subscribePlaylist).toBeDefined();
    });
  });
});
