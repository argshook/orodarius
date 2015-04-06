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

  it('should expose isOpen flag and be set to true initially', function() {
    expect(ctrl.isOpen).toBe(true);
  });

  it('toggleSidebar should toggle isOpen flag', function() {
    ctrl.toggleSidebar();
    expect(ctrl.isOpen).toBe(false);

    ctrl.toggleSidebar();
    expect(ctrl.isOpen).toBe(true);
  });

  it('list should contain items from PlaylistService.playlist', function() {
    expect(ctrl.list).toEqual([mockVideoItem, mockVideoItem]);
  });

  it('playVideo method should tell PlayerService to play video', function() {
    ctrl.playVideo(mockVideoItem);
    expect(PlayerService.playVideo).toHaveBeenCalledWith(mockVideoItem);
  });

  it('isOpen should be false after playVideo has been invoked', function() {
    ctrl.toggleSidebar();
    ctrl.playVideo(mockVideoItem);
    expect(ctrl.isOpen).toBe(false);
  });

  it("fillPlaylistWith should fill sidebar.list with fetched items from reddit", function() {
    spyOn(PlaylistService, 'fetchSubreddit').and.returnValue({then: angular.noop});
    ctrl.fillPlaylistWith('artisanvideos');
    expect(PlaylistService.fetchSubreddit).toHaveBeenCalledWith('artisanvideos');
  });

  it("fillPlaylistWith should update currentSubreddit when invoked", function() {
    ctrl.fillPlaylistWith('artisanvideos');
    expect(ctrl.currentSubreddit).toBe('artisanvideos');
  });
});
