'use strict';

describe('Directive: video-item', function() {
  var compile;

  var parentScopeMock = {
    videoItem: {
      title: 'Batman vs spiderman supermj',
      url: 'youtube.com/v/hdbcccc3123',
      videoId: 1,
      starttime: 0,
      thumbnailUrl: 'http://beerhold.it/300/300',
      created: 'someday',
      redditUrl: `http://reddit.com/asdasdj`,
      redditScore: '42',
      subreddit: 'videos',
      error: null
    },
    currentSubreddit: 'videos'
  };

  var elementAttrsMock = {
    'video-item': 'videoItem',
    'current-subreddit': 'currentSubreddit',
    index: 'index'
  };

  var driver = {
    title: e => e.find('.video-item__title'),
    score: e => e.find('.video-item__score'),
    index: e => e.find('.video-item__index')
  };

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($rootScope, $compile) {
    compile = createCompiler('<video-item />', $rootScope, $compile, driver);
  }));

  it('should compile successfully', function() {
    expect($(compile().element).find('.video-item').length).toBe(1);
  });

  describe('when parent scope has proper `item` property', function() {
    it('should display title', () =>
      compile(parentScopeMock, elementAttrsMock, (s, e, d) => {
        expect(d.title().text()).toBe(parentScopeMock.videoItem.title);
      }));

    it('should display reddit score', () =>
      compile(parentScopeMock, elementAttrsMock, (s, e, d) => {
        expect(d.score().text()).toBe(parentScopeMock.videoItem.redditScore);
      }));
  });

  describe('when parent scope has proper `index` property', () => {
    it('should display that index in view', () => {
      let parentScope = _.cloneDeep(parentScopeMock);
      parentScope.index = 33;
      compile(parentScope, elementAttrsMock, (scope, element, driver) => {
        expect(driver.index().html()).toBe('33');
      });
    });
  });

  describe('$ctrl.getIsIdCurrent()', () => {
    describe('when given id === currentVideoItem.ownId', () => {
      it('should return true', inject(PlayerService => {
        PlayerService.currentVideoItem.ownId = 10;
        compile(parentScopeMock, elementAttrsMock, scope => {
          expect(scope.$ctrl.getIsIdCurrent(10)).toBe(true);
        });
      }));
    });

    describe('when given id !== currentVideoItem.ownId', () => {
      it('should return true', inject(PlayerService => {
        let parentScope = _.cloneDeep(parentScopeMock);
        PlayerService.currentVideoItem.ownId = 10;
        compile(parentScopeMock, elementAttrsMock, scope => {
          expect(scope.$ctrl.getIsIdCurrent(15)).toBe(false);
          expect(scope.$ctrl.getIsIdCurrent()).toBe(false);

          delete PlayerService.currentVideoItem.ownId;

          expect(scope.$ctrl.getIsIdCurrent()).toBe(false);
        });
      }));
    });

    it('should be used in view', inject(PlayerService => {
      let parentScope = _.cloneDeep(parentScopeMock);
      parentScope.videoItem.ownId = 10;
      PlayerService.currentVideoItem.ownId = 10;

      compile(parentScope, elementAttrsMock, (scope, element) => {
        expect(
          element.find('.video-item').hasClass('video-item--current')
        ).toBe(true);
      });
    }));
  });
});
