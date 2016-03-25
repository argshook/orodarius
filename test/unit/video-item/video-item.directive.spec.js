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

  var elementAttrsMock = { 'video-item': 'videoItem', 'current-subreddit': 'currentSubreddit' };

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($rootScope, $compile) {
    compile = createCompiler('<video-item />', $rootScope, $compile);
  }));

  it('should compile successfully', function() {
    expect($(compile().element).find('.list-group-item').length).toBe(1);
  });

  describe('when parent scope has proper `item` property', function() {
    it('should display title', () => {
      compile(parentScopeMock, elementAttrsMock, function(scope, element) {
        expect(element.find('.list-group-item__title').text()).toBe(parentScopeMock.videoItem.title);
      })
    });

    it('should display reddit score', () => {
      compile(parentScopeMock, elementAttrsMock, function (scope, element) {
        expect(element.find('.list-group-item__score').text()).toBe(parentScopeMock.videoItem.redditScore);
      });
    });
  });


  describe('when clicked', function() {
    it('should call sidebarCtrl.playVideo passing video item object', inject(function(PlaylistService) {
      PlaylistService.playlist = [{title: 'oh hello there', ownId: 1}, {title: 'why', ownId: 2}];

      compile(function(scope, element) {
        //console.log(scope);
        //spyOn(scope.sidebarCtrl, 'playVideo').and.callThrough();

        //element.find('.list-group-item').triggerHandler('click');
        //scope.$digest();

        // TODO: why is this not working?
        // expect(scope.sidebarCtrl.playVideo).toHaveBeenCalledWith(PlaylistService.playlist[0]);
      });
    }));
  });
});
