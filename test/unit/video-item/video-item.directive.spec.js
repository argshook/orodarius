'use strict';

describe('Directive: video-item', function() {
  var scope, $compile, $rootScope;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should compile successfully', function() {
    compile({}, function(scope, element) {
      expect(element.find('.list-group-item').length).toBe(1);
    });
  });

  describe('when parent scope has proper `item` property', function() {
    var element;
    beforeEach(function() {
      var mockParentScope = {
        item: {
          redditScore: 42,
          title: 'video item'
        }
      };

      element = compile(mockParentScope);
    });

    it('should display title', function() {
      expect(element.find('.list-group-item__title').text()).toBe('video item');
    });

    it('should display reddit score', function() {
      expect(element.find('.list-group-item__score').text()).toBe('42');
    });
  });

  function compile (scope, callback) {
    var rootScope = $rootScope.$new(),
        element = $compile('<video-item></video-item>')(_.extend(rootScope, scope));

    rootScope.$digest();
    callback && callback.call(null, scope, $(element));

    return $(element);
  }
});
