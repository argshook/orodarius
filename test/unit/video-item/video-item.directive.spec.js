'use strict';

describe('Directive: video-item', function() {
  var compile;

  var parentScopeMock = {
    videoItem: {
      title: "Batman vs spiderman supermj",
      url: "youtube.com/v/hdbcccc3123",
      videoId: 1,
      starttime: 0,
      thumbnailUrl: "http://beerhold.it/300/300",
      created: "someday",
      redditUrl: `http://reddit.com/asdasdj`,
      redditScore: '42',
      subreddit: "videos",
      error: null
    },
    currentSubreddit: 'videos'
  };

  var elementAttrsMock = {
    'video-item': 'videoItem',
    'current-subreddit': 'currentSubreddit',
    'index': 'index'
  };

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($rootScope, $compile) {
    compile = createCompiler('<video-item />', $rootScope, $compile);
  }));

  it('should compile successfully', function() {
    expect($(compile().element).find('.video-item').length).toBe(1);
  });

  describe('when parent scope has proper `item` property', function() {
    it('should display title', () => {
      compile(parentScopeMock, elementAttrsMock, function(scope, element) {
        expect(element.find('.video-item__title').text()).toBe(parentScopeMock.videoItem.title);
      })
    });

    it('should display reddit score', () => {
      compile(parentScopeMock, elementAttrsMock, function (scope, element) {
        expect(element.find('.video-item__score').text()).toBe(parentScopeMock.videoItem.redditScore);
      });
    });
  });

  describe('when parent scope has proper `index` property', () => {
    it('should display that index in view', () => {
      let parentScope = _.cloneDeep(parentScopeMock);
      parentScope.index = 33;
      compile(parentScope, elementAttrsMock, (scope, element) => {
        expect(element.find('.video-item__index').html()).toBe('33');
      });
    });
  });
});

