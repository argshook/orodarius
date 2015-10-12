'use strict';

describe('Directive: video-item', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($rootScope, $compile) {
    compile = createCompiler('<video-item />', $rootScope, $compile);
  }));

  it('should compile successfully', function() {
    expect($(compile().element).find('.list-group-item').length).toBe(1);
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

      element = $(compile(mockParentScope).element);
    });

    it('should display title', function() {
      expect(element.find('.list-group-item__title').text()).toBe('video item');
    });

    it('should display reddit score', function() {
      expect(element.find('.list-group-item__score').text()).toBe('42');
    });
  });
});
