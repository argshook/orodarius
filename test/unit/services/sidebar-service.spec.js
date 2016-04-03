'use strict';

describe("Service: SidebarService", function() {
  var SidebarService;

  beforeEach(function() {
    module('orodarius');
    inject(_SidebarService_ => {
      SidebarService = _SidebarService_;
    });
  });

  it('should expose isOpen value set to true initially', function() {
    expect(SidebarService.isOpen).toBe(true);
  });

  describe('toggle()', function() {
    it('should toggle isOpen value', function() {
      SidebarService.toggle();
      expect(SidebarService.isOpen).toBe(false);

      SidebarService.toggle();
      expect(SidebarService.isOpen).toBe(true);
    });
  });

  describe('close()', function() {
    it('should set isOpen value to false', function() {
      SidebarService.isOpen = true;
      SidebarService.close();
      expect(SidebarService.isOpen).toBe(false);
    });
  });

  describe('state', () => {
    it('should be an object with expected methods', () => {
      expect(SidebarService.state).toEqual(jasmine.objectContaining({
        get: jasmine.any(Function),
        set: jasmine.any(Function),
        subscribe: jasmine.any(Function)
      }));
    });

    describe('set() & get()', function() {
      it('should set and return state.current', function() {
        SidebarService.state.set('anotherState');
        expect(SidebarService.state.get()).toBe('anotherState');
      });
    });

    describe('subscribe()', function() {
      it('should register listener to be called on set()', function() {
        let listenerSpy = jasmine.createSpy('listenerSpy');
        SidebarService.state.subscribe(listenerSpy);
        SidebarService.state.set('something');
        expect(listenerSpy).toHaveBeenCalled();
      });

      it('should return listener deregisterer', function() {
        let listenerSpy = jasmine.createSpy('listenerSpy');
        let deregisterer = SidebarService.state.subscribe(listenerSpy);

        SidebarService.state.set('something');
        expect(listenerSpy.calls.count()).toBe(1);
        deregisterer();
        SidebarService.state.set('something else');
        expect(listenerSpy.calls.count()).toBe(1);
      });
    });
  });
});

