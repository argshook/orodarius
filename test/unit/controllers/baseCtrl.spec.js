'use strict';

describe('Controller: baseCtrl', function() {
  var ctrl, scope;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$controller_, _$rootScope_) {
    scope = _$rootScope_.$new();
    ctrl = _$controller_('baseCtrl', { $scope: scope });
  }));

  it('should contain keyboardEventsOptions object', function() {
    expect(ctrl.keyboardEventsOptions).toBeDefined();
  });

  it('keyboardEventsOptions should contain at least left/right key functions', function() {
    expect(ctrl.keyboardEventsOptions[37]).toBeDefined();
    expect(ctrl.keyboardEventsOptions[39]).toBeDefined();
  });
});
