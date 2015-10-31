'use strict';

describe('Service: LastSubredditsService', function() {
  let service, localStorageService,
      mockItem = { name: 'item' };

  beforeEach(module('orodarius'));
  beforeEach(inject(function(LastSubredditsService, _localStorageService_) {
    service = LastSubredditsService;
    localStorageService = _localStorageService_;
  }));

  afterEach(function() {
    localStorageService.clearAll();
  });

  describe('getList()', () => {
    it('should return array', () => {
      expect(angular.isArray(service.getList())).toBe(true);
    });

    it('should return added items', () => {
      service.add(mockItem);
      expect(service.getList()).toEqual([mockItem]);
    });
  });

  describe('add()', function() {
    it('should add item to list', function() {
      service.add(mockItem);
      expect(service.getList()[0]).toEqual(mockItem);
    });

    it('should call updateStorage', function() {
      spyOn(localStorageService, 'set');
      service.add(mockItem);
      expect(localStorageService.set).toHaveBeenCalledWith('lastSubreddits', jasmine.any(Object));
    });

    it('should not save duplicates', function() {
      service.add(mockItem);
      service.add(mockItem);
      expect(service.getList().length).toBe(1);
    });

    it('should not allow more than 10 subreddits', () => {
      _.range(1, 15).map(i => {
        service.add({ name: `item-${i}` });
      });

      expect(service.getList().length).toBe(10);
    });
  });
});

