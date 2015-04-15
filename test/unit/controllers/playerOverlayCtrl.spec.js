'use strict';

describe("Controller: playerOverlayCtrl", function() {
  var ctrl, scope, PlayerService, PlaylistService;

  beforeEach(module('orodarius'));
  beforeEach(inject(function($controller, $rootScope, PlayerService, PlaylistService) {
    scope = $rootScope.$new();
    ctrl = $controller('playerOverlayCtrl', { $scope: scope });
  }));

  it("should be defined", function() {
    expect(ctrl).toBeTruthy();
  });

  it("should attach playerService to scope", function() {
    expect(scope.playerService).toBeDefined();
  });
});
