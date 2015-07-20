'use strict';

describe('Controller: baseCtrl', function() {
  var ctrl, scope, PlayerService, SidebarService, PlaylistService;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$controller_, _$rootScope_, _PlayerService_, _SidebarService_, _PlaylistService_) {
    scope = _$rootScope_.$new();
    ctrl = _$controller_('baseCtrl', { $scope: scope });
    PlayerService = _PlayerService_;
    SidebarService = _SidebarService_;
    PlaylistService = _PlaylistService_;
  }));

  it('should contain keyboardEventsOptions object', function() {
    expect(ctrl.keyboardEventsOptions).toBeDefined();
  });

  it('keyboardEventsOptions should contain at least left/right key functions', function() {
    expect(ctrl.keyboardEventsOptions[37]).toBeDefined();
    expect(ctrl.keyboardEventsOptions[39]).toBeDefined();
  });

  describe('keyboardEventsOptions', function() {
    beforeEach(function() {
      spyOn(scope, '$apply').and.callThrough();
    });

    describe('when playlist is not empty', function() {
      beforeEach(function() {
        PlaylistService.playlist = [1];
      });

      it('should call PlayerService.playPrevious on left key', function() {
        spyOn(PlayerService, 'playPrevious');
        ctrl.keyboardEventsOptions[37]();

        expect(PlayerService.playPrevious).toHaveBeenCalled();
        expect(scope.$apply).toHaveBeenCalled();
      });

      it('should call PlayerService.playPrevious on up key', function() {
        spyOn(PlayerService, 'playPrevious');
        ctrl.keyboardEventsOptions[38]();

        expect(PlayerService.playPrevious).toHaveBeenCalled();
        expect(scope.$apply).toHaveBeenCalled();
      });

      it('should call PlayerService.playNext on right key', function() {
        spyOn(PlayerService, 'playNext');
        ctrl.keyboardEventsOptions[39]();

        expect(PlayerService.playNext).toHaveBeenCalled();
        expect(scope.$apply).toHaveBeenCalled();
      });

      it('should call PlayerService.playPrevious on down key', function() {
        spyOn(PlayerService, 'playNext');
        ctrl.keyboardEventsOptions[40]();

        expect(PlayerService.playNext).toHaveBeenCalled();
        expect(scope.$apply).toHaveBeenCalled();
      });

      it('should call PlayerService.playOrPause on space key', function() {
        spyOn(PlayerService, 'playOrPause');
        ctrl.keyboardEventsOptions[32]();
        expect(PlayerService.playOrPause).toHaveBeenCalled();
      });

      it('should call SidebarService.toggle on space key', function() {
        spyOn(SidebarService, 'toggle');
        ctrl.keyboardEventsOptions[16]();
        expect(SidebarService.toggle).toHaveBeenCalled();
        expect(scope.$apply).toHaveBeenCalled();
      });

      it('should call SidebarService.close on escape key', function() {
        spyOn(SidebarService, 'close');
        ctrl.keyboardEventsOptions[27]();
        expect(SidebarService.close).toHaveBeenCalled();
        expect(scope.$apply).toHaveBeenCalled();
      });
    });

    describe('when playlist is empty', function() {
      it('should not do anything on arrow keys', function() {
        PlaylistService.clear();
        spyOn(PlayerService, 'playPrevious');
        spyOn(PlayerService, 'playNext');

        ctrl.keyboardEventsOptions[40](); // up
        ctrl.keyboardEventsOptions[37](); // left
        ctrl.keyboardEventsOptions[39](); // right
        ctrl.keyboardEventsOptions[40](); // down

        expect(PlayerService.playPrevious).not.toHaveBeenCalled();
        expect(PlayerService.playNext).not.toHaveBeenCalled();
      });
    });

  });
});
