'use strict';

describe('Directive: youtube-player', function() {
  var element, scope, $compile,
      $window, PlayerService;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$window_, _PlayerService_) {
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $window = _$window_;
    PlayerService = _PlayerService_;

    spyOn(PlayerService, 'newPlayer');

  }));

  function compileWith(id) {
    element = $compile('<div youtube-player="'+ (id || 'main-video-player') +'"></div>')(scope);

    // the following is called when iframe_api loads, so we call
    // this manually to test
    $window.onYouTubeIframeAPIReady();
  }

  it('should compile successfully', function() {
    compileWith();
    expect(element.find('[youtube-player]')).toBeTruthy();
  });

  it('should call PlayerService.newPlayer with default selector ID, once directive is compiled', function() {
    compileWith();
    expect(PlayerService.newPlayer).toHaveBeenCalledWith('main-video-player');
  });

  it('should call PlayerService.newPlayer with id selector, if its passed to youtube-player directive', function() {
    compileWith('tinky-winky');
    expect(PlayerService.newPlayer).toHaveBeenCalledWith('tinky-winky');
  });
});
