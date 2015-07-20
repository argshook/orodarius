'use strict';

describe('Controller: baseCtrl', function() {
  var ctrl, scope, PlayerService, SidebarService;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$controller_, _$rootScope_, _PlayerService_, _SidebarService_) {
    scope = _$rootScope_.$new();
    ctrl = _$controller_('baseCtrl', { $scope: scope });
    PlayerService = _PlayerService_;
    SidebarService = _SidebarService_;
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

    it('should call PlayerService.playPrevious on left key', function() {
      spyOn(PlayerService, 'playPrevious');
      ctrl.keyboardEventsOptions[37]();

      expect(PlayerService.playPrevious).toHaveBeenCalled();
      expect(scope.$apply).toHaveBeenCalled();
    });

    it('should call PlayerService.playNext on right key', function() {
      spyOn(PlayerService, 'playNext');
      ctrl.keyboardEventsOptions[39]();

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
    });
  });
});
