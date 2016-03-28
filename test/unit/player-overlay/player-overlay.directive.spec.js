'use strict';

describe('Directive: playerOverlay', () => {
  let compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));

  beforeEach(inject(($rootScope, $compile) => {
    compile = createCompiler('<player-overlay />', $rootScope, $compile);
  }));

  it('should compile successfully', () => {
    expect(compile().element.find('.player-overlay').length).toBe(1);
  });

  it('should display currentVideoItem.redditScore value', inject(PlayerService => {
    PlayerService.currentVideoItem.redditScore = 69;
    expect(compile().element.find('.video-score').text().trim()).toBe('69');
  }));

  it('should have anchor tag with correct url and title', inject(PlayerService => {
    PlayerService.currentVideoItem.redditUrl = 'https://reddit.cum/abloogiewoogiewoo';
    PlayerService.currentVideoItem.title = 'best video';

    compile((scope, element) => {
      let $videoTitle = element.find('.video-title a');

      expect($videoTitle.attr('href')).toBe('https://reddit.cum/abloogiewoogiewoo');
      expect($videoTitle.text().trim()).toBe('best video');
    });
  }));

  describe('$ctrl.getCurrentVideoItem()', () => {
    it('should return PlayerService.currentVideoItem', inject(PlayerService => {
      PlayerService.currentVideoItem = 'yo man watup';
      compile(scope => {
        expect(scope.$ctrl.getCurrentVideoItem()).toBe(PlayerService.currentVideoItem);
      });
    }));
  });
});

