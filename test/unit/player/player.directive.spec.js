'use strict';

describe('Component: player', function() {
  let compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));

  beforeEach(inject(($compile, $rootScope) => {
    compile = createCompiler('<player />', $rootScope, $compile);
  }));

  it('should compile successfully', () => {
    compile((scope, element) => {
      expect(element.find('.orodarius-player').length).toBe(1);
    });
  });

  it('should contain element with youtube-player directive nested as expected', () => {
    compile((scope, element) => {
      expect(element.find('.container-full .video-player-container #main-video-player').attr('youtube-player')).toBe('');
    });
  });
});

