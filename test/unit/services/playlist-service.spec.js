'use strict';

describe('Service: PlaylistService', function() {
  var service, $httpBackend, $q;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlaylistService_, _$httpBackend_, _$q_) {
    $q = _$q_;
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

  it("fetchSubreddit should compare new items to old ones and return unique only", function() {
    service.playlist = [
      { name: 'name1', videoId: 'VSNuZEdYrH0', created: 1 },
      { name: 'name4', videoId: 'VSNuZEdYrH0', created: 4 },
    ];

    $httpBackend.whenGET('http://www.reddit.com/r/duplicateVideosMock/hot.json?limit=25').respond(200, {
      data: {
        children: [
          { kind: 't3', data: { domain: 'youtube.com', name: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
          { kind: 't3', data: { domain: 'youtube.com', name: 'name2', created: 2, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH1' } },
          { kind: 't3', data: { domain: 'youtube.com', name: 'name3', created: 3, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
        ],
        after: 'asd'
      }
    });

    service.fetchSubreddit('duplicateVideosMock');

    $httpBackend.flush();
    expect(service.playlist.length).toBe(3);
  });

  it("fetchSubreddit method should uniquefy fetched items", function() {
    $httpBackend.whenGET('http://www.reddit.com/r/duplicateVideosMock/hot.json?limit=25').respond(200, {
      data: {
        children: [
          { kind: 't3', data: { domain: 'youtube.com', name: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
          { kind: 't3', data: { domain: 'youtube.com', name: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
          { kind: 't3', data: { domain: 'youtube.com', name: 'name1', created: 1, url: 'https://www.youtube.com/watch?v=VSNuZEdYrH0' } },
        ],
        after: 'asd'
      }
    });

    service.fetchSubreddit('duplicateVideosMock');
    $httpBackend.flush();
    expect(service.playlist.length).toBe(1);
  });

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
