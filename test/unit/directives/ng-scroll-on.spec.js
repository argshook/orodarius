'use strict'

describe("Directive: ngScrollOn", function() {
  var element, scope;

  beforeEach(module('orodarius'));
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    scope.playerService = {
      currentVideoItem: {
        videoId: '1',
        name: 'best video man ever dude'
      }
    };
    element = $compile('<ul ng-scroll-on="playerService.currentVideoItem"></ul>')(scope);
    scope.$digest();
  }));

  it('should compile successfully', function () {
    expect(element).toBeTruthy();
  });
});
