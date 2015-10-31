'use strict';

describe('Service: LastSubredditsService', function() {
  var service, localStorageService;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(LastSubredditsService, _localStorageService_) {
    service = LastSubredditsService;
    localStorageService = _localStorageService_;
  }));

  it('should be defined', function() {
    expect(service).toBeDefined();
  });

  it('should expose list property as an array', function() {
    expect(angular.isArray(service.list)).toBe(true);
  });

  describe('add()', function() {
    var mockItem = { name: 'item' };

    afterEach(function() {
      localStorageService.clearAll();
    });

    it('should add item to list', function() {
      service.add(mockItem);
      expect(service.list[0]).toEqual(mockItem);
    });

    it('should call updateStorage', function() {
      spyOn(localStorageService, 'set');
      service.add(mockItem);
      expect(localStorageService.set).toHaveBeenCalledWith('lastSubreddits', jasmine.any(Object));
    });

    it('should not save duplicates', function() {
      service.add(mockItem);
      service.add(mockItem);
      expect(service.list.length).toBe(1);
    });

    it('should not allow more than 10 subreddits', () => {
      _.range(1, 15).map(i => {
        service.add({ name: `item-${i}` });
      });

      expect(service.getList().length).toBe(10);
    });
  });
});

