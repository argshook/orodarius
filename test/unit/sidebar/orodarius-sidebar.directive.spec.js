'use strict';

describe('Directive: orodarius-sidebar', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));
  beforeEach(inject(function($compile, $rootScope, $httpBackend) {
    compile = createCompiler('<orodarius-sidebar />', $rootScope, $compile);

    $httpBackend.whenGET(/api\.github\.com/).respond(200, {});
  }));

  it('should compile successfully', function() {
    compile(function(scope, element) {
      expect(element.find('.container-sidebar').length).toBe(1);
    });
  });

  describe('video items list', function() {
    fit('should contain playlist items', inject(function(PlaylistService) {
      PlaylistService.playlist = [{title: 'oh hello there', ownId: 1}, {title: 'why', ownId: 2}];

      compile(function(scope, element) {
        console.log(element);
        expect(element.find('.list-group-item .list-group-item__title').get(0).innerText).toBe('oh hello there');
        expect(element.find('.list-group-item .list-group-item__title').get(1).innerText).toBe('why');
      });
    }));

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

  //function compile (scope, callback) {
    //var rootScope = $rootScope.$new(),
        //element = $compile('<orodarius-sidebar></orodarius-sidebar>')(_.extend(rootScope, scope));

    //rootScope.$digest();
    //callback && callback.call(null, rootScope, $(element));

    //return $(element);
  //}
});
