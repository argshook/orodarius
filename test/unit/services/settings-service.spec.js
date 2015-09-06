'use strict';

describe('Service: SettingsService', function() {
  var service, localStorageService;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_SettingsService_, _localStorageService_) {
    service = _SettingsService_;
    localStorageService = _localStorageService_;
  }));

  // TODO: maybe better to expose settings as direct service properties rather
  // than nesting them under list? Who knows, maybe
  describe('list', function() {
    it('should contain some default items', function() {
      expect(service.list.isSidebarSticky).toBeDefined();
      expect(service.list.isFocusForced).toBeDefined();
    });

    describe('sources array', function() {
      var mockSourceObject = {
        name: 'reddit',
        apiUrl: 'http://www.reddit.com/r/',
        isEnabled: true
      };

      it('should contain at least one source object', function() {
        expect(service.list.sources[0]).toEqual(mockSourceObject);
      });
    });
  });

  describe('add()', function() {
    var mockItemName = 'dummySetting';

    it('should add passed item to the list', function() {
      service.add(mockItemName, true);
      expect(service.list[mockItemName]).toEqual(true);
    });

    it('should call localStorageService after adding item', function() {
      spyOn(localStorageService, 'set');
      service.add(mockItemName, true);
      expect(localStorageService.set).toHaveBeenCalledWith('settings', jasmine.any(Object));
    });
  });

  describe('toggle()', function() {
    it('should toggle boolean setting value', function() {
      service.toggle('isSidebarSticky');
      expect(service.list.isSidebarSticky).toBe(true);
      service.toggle('isSidebarSticky');
      expect(service.list.isSidebarSticky).toBe(false);
    });

    it('should add new item if its not defined yet and set it to true', function() {
      service.toggle('shitheads');
      expect(service.list.shitheads).toBe(true);
    });
  });
});
