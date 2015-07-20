'use strict';

describe("Service: SidebarService", function() {
  var service;

  beforeEach(function() {
    module('orodarius');
    inject(function (SidebarService) {
      service = SidebarService;
    });
  });

  it('should expose isOpen value set to true initially', function() {
    expect(service.isOpen).toBe(true);
  });

  describe('toggle()', function() {
    it('should toggle isOpen value', function() {
      service.toggle();
      expect(service.isOpen).toBe(false);

      service.toggle();
      expect(service.isOpen).toBe(true);
    });
  });

  describe('close()', function() {
    it('should set isOpen value to false', function() {
      service.isOpen = true;
      service.close();
      expect(service.isOpen).toBe(false);
    });
  });

});
