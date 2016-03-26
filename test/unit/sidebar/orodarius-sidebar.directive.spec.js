'use strict';

describe('Directive: orodarius-sidebar', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius', $provide => {
    $provide.factory('orodariusSidebarFootDirective', () => { return {}; });
  }));

  beforeEach(inject(function($compile, $rootScope, $httpBackend, PlaylistService) {
    compile = createCompiler('<orodarius-sidebar />', $rootScope, $compile);

    PlaylistService.add(mockVideoItem);
    PlaylistService.add(mockVideoItem);
  }));

  it('should compile successfully', function() {
    compile(function(scope, element) {
      expect(element.find('.container-sidebar').length).toBe(1);
    });
  });

  describe('isLoading', function() {
    it('should be exposed as controller variable and set to false', function() {
      compile(function (scope) {
        expect(scope.sidebarCtrl.isLoading).toBe(false);
      });
    });
  });

  describe('expandPlaylist()', function() {
    it('should set isLoading to true and back to false when PlaylistService.expandPlaylist resolves', inject((PlaylistService, $q) => {
      let promise = $q.defer();
      spyOn(PlaylistService, 'expandPlaylist').and.callFake(() => {
        return promise.promise;
      });

      compile(function (scope) {
        scope.sidebarCtrl.expandPlaylist();
        expect(scope.sidebarCtrl.isLoading).toBe(true);
        promise.resolve();
        scope.$digest();
        expect(PlaylistService.expandPlaylist).toHaveBeenCalled();
        expect(scope.sidebarCtrl.isLoading).toBe(false);
      });
    }));
  });

  describe('isListItemCurrentlyPlayed()', function() {
    describe('when passed videoId equals to currently played video id', function() {
      it('should return true', inject(function(PlayerService) {
        compile(function (scope) {
          PlayerService.currentVideoItem.videoId = 1;
          expect(scope.sidebarCtrl.isListItemCurrentlyPlayed({ videoId: 1 })).toBe(true);
        });
      }));
    });

    describe('when passed videoId does not equal to currently played video id', function() {
      it('should return true', inject(function(PlayerService) {
        compile(function (scope) {
          PlayerService.currentVideoItem.videoId = 2;
          expect(scope.sidebarCtrl.isListItemCurrentlyPlayed({ videoId: 1 })).toBe(false);
        });
      }));
    });
  });

  describe('isListItemCurrentlyPlayed()', function() {
    describe('when passed videoId equals to currently played video id', function() {
      it('should return true', inject(function(PlayerService) {
        compile(function (scope) {
          PlayerService.currentVideoItem.videoId = 1;
          expect(scope.sidebarCtrl.isListItemCurrentlyPlayed(({ videoId: 1 }))).toBe(true);
        });
      }));
    });

    describe('when passed videoId does not equal to currently played video id', function() {
      it('should return true', inject(function(PlayerService) {
        compile(function (scope) {
          PlayerService.currentVideoItem.videoId = 2;
          expect(scope.sidebarCtrl.isListItemCurrentlyPlayed({ videoId: 1 })).toBe(false);
        });
      }));
    });
  });


  it('should get sidebarService.isOpen flag as false', function() {
    compile(function (scope) {
      expect(scope.sidebarService.isOpen).toBe(true);
    });
  });


  it('playlistService should contain items from PlaylistService.playlist', function() {
    compile(function (scope) {
      expect(scope.sidebarCtrl.playlist).toEqual([mockVideoItem, mockVideoItem]);
    });
  });

  it('playVideo method should tell PlayerService to play video', inject(PlayerService => {
    spyOn(PlayerService, 'playVideo');
    compile(scope => {
      scope.sidebarCtrl.playVideo(mockVideoItem);
      expect(PlayerService.playVideo).toHaveBeenCalledWith(mockVideoItem);
    });
  }));

  it('isOpen should be false after playVideo has been invoked', inject((SidebarService, SettingsService) => {
    SettingsService.list.isSidebarSticky = false;
    compile(scope => {
      scope.sidebarService.isOpen = true;
      scope.sidebarCtrl.playVideo(mockVideoItem);
      expect(scope.sidebarService.isOpen).toBe(false);
    });
  }));

  describe('fillPlaylistWith()', function() {
    it('should set isLoading to true and back to false after resolve', inject($httpBackend => {
      compile(scope => {
        $httpBackend.whenGET(/whatever/).respond(200, REDDIT);
        expect(scope.sidebarCtrl.isLoading).toBe(false);

        scope.sidebarCtrl.fillPlaylistWith('whatever');
        expect(scope.sidebarCtrl.isLoading).toBe(true);

        $httpBackend.flush();
        expect(scope.sidebarCtrl.isLoading).toBe(false);
      });
    }));

    it('should fill sidebar.list with fetched items from reddit', inject(PlaylistService => {
      compile(scope => {
        spyOn(PlaylistService, 'fetchSubreddit').and.returnValue({then: angular.noop});
        scope.sidebarCtrl.fillPlaylistWith('artisanvideos');
        expect(PlaylistService.fetchSubreddit).toHaveBeenCalledWith('artisanvideos');
      });
    }));

    it('should clear playlist', inject(PlaylistService => {
      compile(scope => {
        spyOn(PlaylistService, 'clear');
        scope.sidebarCtrl.fillPlaylistWith('videos');
        expect(PlaylistService.clear).toHaveBeenCalled();
      });
    }));

    describe('when no argument passed', () => {
      it('should clear ctrl.currentSubreddit', () => {
        compile(scope => {
          scope.sidebarCtrl.fillPlaylistWith();
          expect(scope.sidebarCtrl.currentSubreddit).toBe('');
        });
      });

      it('should not call PlaylistService.fetchSubreddit', inject(PlaylistService => {
        compile(scope => {
          spyOn(PlaylistService, 'fetchSubreddit');
          scope.sidebarCtrl.fillPlaylistWith();
          expect(PlaylistService.fetchSubreddit).not.toHaveBeenCalled();
        });
      }));
    });
  });


  it('should contain currentSubreddit property on controller', function() {
    compile(function (scope) {
      expect(typeof scope.sidebarCtrl.currentSubreddit).toBe('string');
    });
  });
});

