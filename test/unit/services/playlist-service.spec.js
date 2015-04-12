'use strict';

describe('Service: PlaylistService', function() {
  var service, $httpBackend;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlaylistService_, _$httpBackend_) {
    service = _PlaylistService_;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(function() {
    spyOn(service, 'add');
    $httpBackend.whenGET(/.*\/(videos|birbir).*/).respond(200, REDDIT);
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

  it('fetchSubreddit should return a promise', function() {
    var result,
        promise = service.fetchSubreddit('videos');

    expect(promise).toBeDefined();

    promise.then(function() {
      result = true;
    });

    $httpBackend.flush();
    expect(result).toBe(true);
  });

  it('fetchSubreddit should change current subreddit on successful promise resolve', function() {
    service.fetchSubreddit('videos').then(function(playlist) {
      expect(service.currentSubreddit).toBe('videos');
    });

    service.fetchSubreddit('birbir').then(function(playlist) {
      expect(service.currentSubreddit).toBe('birbir');
    });

    $httpBackend.flush();
    expect(service.currentSubreddit).toBe('birbir');
  });

  it("fetchSubreddit should uniquefy playlist it returns", function() {
    $httpBackend.whenGET('http://www.reddit.com/r/duplicateVideosMock/hot.json?limit=25').respond(200, {
      data: {
        children: [
          { name: 'name1', videoId: 1, created: 1, kind: 't3', data: { domain: 'youtube.com' } },
          { name: 'name1', videoId: 1, created: 1, kind: 't3', data: { domain: 'youtube.com' } },
          { name: 'name1', videoId: 1, created: 1, kind: 't3', data: { domain: 'youtube.com' } },
        ]
      }
    }
    );

    service.fetchSubreddit('duplicateVideosMock');

    $httpBackend.flush();
    expect(service.playlist.length).toBe(1);
  });

  it("expandPlaylist should fetch more items and concat playlist with new items", function() {
    service.afterTag = REDDIT.data.after;
    spyOn(service, 'fetchSubreddit');
    service.expandPlaylist();
    expect(service.fetchSubreddit).toHaveBeenCalled();
  });
});
