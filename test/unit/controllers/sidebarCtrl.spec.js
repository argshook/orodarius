'use strict';

describe('Controller: sidebarCtrl', function() {
  var ctrl;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$controller_) {
    ctrl = _$controller_('sidebarCtrl', {});
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
});
