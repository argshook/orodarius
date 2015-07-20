'use strict';

describe('Filter: thumbnailUrlFilter', function() {
  var thumbnailUrlFilter;

  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$filter_) {
    thumbnailUrlFilter = _$filter_('thumbnailUrlFilter');
  }));

  describe('when non-special input given', function() {
    it('should return unchanged input', function() {
      expect(thumbnailUrlFilter('hello')).toBe('hello');
    });
  });

  describe('when special input given', function() {
    it('should return correct url for nsfw', function() {
      expect(thumbnailUrlFilter('nsfw')).toBe('images/nsfw-thumbnail.jpg');
    });

    it('should return correct url for default', function() {
      expect(thumbnailUrlFilter('default')).toBe('images/default-thumbnail.png');
    });
  });

});
