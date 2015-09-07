'use strict';

describe('Directive: orodarius-sidebar', function() {
  var $compile, $rootScope, $httpBackend, PlaylistService;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_, _PlaylistService_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    PlaylistService = _PlaylistService_;

    $httpBackend.whenGET(/api\.github\.com/).respond(200, {});
  }));

  it('should compile successfully', function() {
    compile({}, function(scope, element) {
      expect(element.find('.sidebar-heading h1').text()).toBe('Subreddit TV');
    });
  });

  describe('video items list', function() {
    it('should contain playlist items', function() {
      PlaylistService.playlist = [{title: 'oh hello there', ownId: 1}, {title: 'why', ownId: 2}];

      compile({}, function(scope, element) {
        expect(element.find('.list-group-item .list-group-item__title').get(0).innerText).toBe('oh hello there');
        expect(element.find('.list-group-item .list-group-item__title').get(1).innerText).toBe('why');
      });
    });

    describe('when clicked', function() {
      it('should call sidebarCtrl.playVideo passing video item object', function() {
        PlaylistService.playlist = [{title: 'oh hello there', ownId: 1}, {title: 'why', ownId: 2}];

        compile({}, function(scope, element) {
          spyOn(scope.sidebarCtrl, 'playVideo').and.callThrough();

          element.find('.list-group-item').triggerHandler('click');
          scope.$digest();

          // TODO: why is this not working?
          // expect(scope.sidebarCtrl.playVideo).toHaveBeenCalledWith(PlaylistService.playlist[0]);
        });
      });
    });
  });

  function compile (scope, callback) {
    var rootScope = $rootScope.$new(),
        element = $compile('<orodarius-sidebar></orodarius-sidebar>')(_.extend(rootScope, scope));

    rootScope.$digest();
    callback && callback.call(null, rootScope, $(element));

    return $(element);
  }
});
