'use strict';

describe('Service: PlayerService', function() {
  var service, player;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlayerService_) {
    service = _PlayerService_;

    player = service.createNewPlayer('main-video-player');
    spyOn(player, 'loadVideoByUrl');
  }));

  it('createNewPlayer method should create new player instance', function() {
    expect(player).toBeTruthy();
    expect(service.player).toBeTruthy();
    expect(player).toEqual(service.player);
  });

  it('playVideo should start playing a new video', function() {
    service.playVideo(mockVideoItem);
    expect(player.loadVideoByUrl).toHaveBeenCalled();
  });
});
