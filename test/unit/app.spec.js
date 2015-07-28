'use strict';

describe("Module: orodarius", function() {
  var $window, $rootScope;

  beforeEach(inject(function(_$window_, _$rootScope_) {
    $window = _$window_;
    $rootScope = _$rootScope_;
  }));

  describe('run block', function() {
    var orodariusModule = angular.module('orodarius'),
        runBlock = orodariusModule._runBlocks[0];

    it('should attach resize event event', function() {
      spyOn($.fn, 'on').and.callThrough();
      runBlock();
      expect($.fn.on).toHaveBeenCalledWith('resize', jasmine.any(Function));
    });
  });
});
