'use strict';

describe("Service: SidebarService", function() {
  var service;

  beforeEach(function() {
    module('orodarius');
    inject(function (SidebarService) {
      service = SidebarService;
    })
  });

  it('should expose isOpen value set to true initially', function() {
    expect(service.isOpen).toBe(true);
  });

  it('should expose toggle method', function() {
    expect(service.toggle).toBeDefined();
    expect(typeof service.toggle).toBe('function');
  });

  it('toggle method should toggle isOpen value', function() {
    service.toggle();
    expect(service.isOpen).toBe(false);

    service.toggle();
    expect(service.isOpen).toBe(true);
  });

});
