'use strict';

describe('Service: PlayerService', function() {
  var service;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlayerService_) {
    service = _PlayerService_;
  }));

  it('createNewPlayer method should create new player instance', function() {
    var player = service.createNewPlayer('main-video-player');
    expect(player).toBeTruthy();
    expect(service.player).toBeTruthy();
    expect(player).toEqual(service.player);
  });
});
