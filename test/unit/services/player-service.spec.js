'use strict';

describe('Service: PlayerService', function() {
  var service;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlayerService_) {
    service = _PlayerService_;
  }));

  it('should exist', function() {
    expect(service).toBeTruthy();
  });


  it('new method should create new player instance', function() {
    var player = service.newPlayer('main-video-player');
    expect(service.players.length).toBe(1);
  });
});
