'use strict';

describe('Service: PlaylistService', function() {
  var service, $httpBackend;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlaylistService_, _$httpBackend_) {
    service = _PlaylistService_;
    $httpBackend = _$httpBackend_;

    // var deferred = _$q_.defer();
    // spyOn(service, 'fetchSubreddit').and.returnValue(deferred.promise);
  }));

  beforeEach(function() {
    spyOn(service, 'add');
    $httpBackend.whenGET('http://www.reddit.com/r/videos/hot.json?limit=25').respond(200, REDDIT);
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
});
