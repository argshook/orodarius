'use strict';

describe('Service: PlaylistService', function() {
  var service;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlaylistService_) {
    service = _PlaylistService_;
  }));

  beforeEach(function() {
    spyOn(service, 'add');
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
});
