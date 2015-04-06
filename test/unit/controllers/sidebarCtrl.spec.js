'use strict';

describe('Controller: sidebarCtrl', function() {
  var ctrl, PlaylistService, PlayerService;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$controller_, _PlaylistService_, _PlayerService_) {
    ctrl = _$controller_('sidebarCtrl', { PlaylistService: _PlaylistService_ });
    PlaylistService = _PlaylistService_;
    PlayerService = _PlayerService_;

    spyOn(PlayerService, 'playVideo');

    PlaylistService.add(mockVideoItem);
    PlaylistService.add(mockVideoItem);
  }));

  it('should expose isOpen flag and be set to false initially', function() {
    expect(ctrl.isOpen).toBe(false);
  });

  it('toggleSidebar should toggle isOpen flag', function() {
    ctrl.toggleSidebar();
    expect(ctrl.isOpen).toBe(true);

    ctrl.toggleSidebar();
    expect(ctrl.isOpen).toBe(false);
  });

  it('list should contain items from PlaylistService.playlist', function() {
    expect(ctrl.list).toEqual([mockVideoItem, mockVideoItem]);
  });

  it('playVideo method should tell PlayerService to play video', function() {
    ctrl.playVideo(mockVideoItem);
    expect(PlayerService.playVideo).toHaveBeenCalledWith(mockVideoItem);
  });

  it('reloadPlaylist should call PlaylistService.fetchSubreddit', function() {
    ctrl.reloadPlaylist();
    expect(ctrl.list).toEqual(PlaylistService.playlist);
  });
});