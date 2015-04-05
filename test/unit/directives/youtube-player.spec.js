'use strict';

describe('Directive: youtube-player', function() {
  var element, scope, $window;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$window_) {
    scope = _$rootScope_.$new();
    element = _$compile_('<div youtube-player></div>')(scope);
    $window = _$window_;

    spyOn($window, 'onYouTubeIframeAPIReady');
  }));

  it('should compile successfully', function() {
    expect(element.find('[youtube-player]')).toBeTruthy();
  });

  it('should call onYouTubeIframeAPIReady once created', function() {
    expect($window.onYouTubeIframeAPIReady).toHaveBeenCalled();
  });
});
