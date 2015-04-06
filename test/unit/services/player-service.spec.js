'use strict';

describe('Service: PlayerService', function() {
  var service, player, PlaylistService;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlayerService_, _PlaylistService_) {
    service = _PlayerService_;
    PlaylistService = _PlaylistService_;

    player = service.createNewPlayer('main-video-player');

    spyOn(player, 'loadVideoById');
  }));

  it('createNewPlayer method should create new player instance', function() {
    expect(player).toBeTruthy();
    expect(service.player).toBeTruthy();
    expect(player).toEqual(service.player);
  });

  it('playVideo should start playing a new video', function() {
    service.playVideo(mockVideoItem);
    expect(player.loadVideoById).toHaveBeenCalled();
  });

  it('playNext should call playVideo with next videoId in row', function() {
    PlaylistService.playlist = [
      { videoId: 'currentId' },
      { videoId: 'next-in-row' }
    ];

    service.currentVideoId = PlaylistService.playlist[0].videoId;

    service.playNext();
    expect(service.currentVideoId).toBe('next-in-row');
  });
});
