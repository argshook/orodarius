'use strict';

describe('Directive: orodarius-sidebar', function() {
  var element, scope, ctrl, $compile;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_, _PlaylistService_, _PlayerService_) {
    scope = _$rootScope_;
    // ctrl = _$controller_('sidebarCtrl', { $scope: scope, PlaylistService: _PlaylistService_, PlayerService: _PlayerService_ });
    // element = _$compile_('<orodarius-sidebar></orodarius-sidebar>')(scope);
    // element.controller('sidebarCtrl')
    scope.$digest();
  }));

  it('should compile successfully', function() {
    // TODO: figure out why this doesn't work
    // expect(element.find('.sidebar-heading h1').text()).toBe('Subreddit TV');
  });
});
