'use strict';

describe('Directive: orodarius-sidebar', function() {
  var compile;

  beforeEach(module('orodarius.templates'));
  beforeEach(module('orodarius'));

  beforeEach(inject(function($compile, $rootScope, $httpBackend, PlaylistService) {
    compile = createCompiler('<orodarius-sidebar />', $rootScope, $compile);

    $httpBackend.whenGET(/api\.github\.com/).respond(200, {});

    var githubMock = '{"html_url": "htmlUrl.com", "commit": { "author": { "date": "123" }, "message": "hello" }}';
    $httpBackend.expectGET('https://api.github.com/repos/argshook/orodarius/commits/gh-pages')
      .respond(200, githubMock);

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
    it('should call playlistService.expandPlaylist()', inject(function($httpBackend) {
      compile(function (scope) {
        spyOn(scope.sidebarCtrl, 'expandPlaylist').and.callThrough();

        scope.sidebarCtrl.expandPlaylist();
        expect(scope.sidebarCtrl.isLoading).toBe(true);
        $httpBackend.flush();
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

  it('toggleSidebar should toggle isOpen flag', function() {
    compile(function (scope) {
      scope.sidebarCtrl.toggleSidebar();
      expect(scope.sidebarService.isOpen).toBe(false);

      scope.sidebarCtrl.toggleSidebar();
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

  it('isOpen should be true after playVideo has been invoked when isSidebarSticky is true', () => {
    compile(scope => {
      scope.sidebarService.isOpen = true;
      scope.sidebarCtrl.settings.isSidebarSticky = true;
      scope.sidebarCtrl.playVideo(mockVideoItem);
      expect(scope.sidebarService.isOpen).toBe(true);
    });
  });

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

  describe('suggested subreddits', function() {
    it('should contain at least 4 items of certain structure', function() {
      compile(function (scope) {
        expect(scope.sidebarCtrl.suggestedSubreddits.length).toBeGreaterThan(3);
        expect(scope.sidebarCtrl.suggestedSubreddits[0]).toEqual(jasmine.objectContaining({
          name: 'videos'
        }));
      });
    });
  });

  describe('settings', () => {
    it('should contain default values', inject(SettingsService => {
      compile(scope => {
        expect(scope.sidebarCtrl.settings.isSidebarSticky).toBe(false);
        expect(scope.sidebarCtrl.settings.isFocusForced).toBe(false);
      });
    }));
  });

  describe('toggleFocusForced method', () => {
    it('should toggle $scope.isFocusForced when called', inject(SettingsService => {
      compile(scope => {
        scope.sidebarCtrl.toggleFocusForced();
        expect(scope.sidebarCtrl.settings.isFocusForced).toBe(true);
        scope.sidebarCtrl.toggleFocusForced();
        expect(scope.sidebarCtrl.settings.isFocusForced).toBe(false);
      });
    }));

    it('should attach blur event listener on window when isFocusForced is false', inject($window => {
      spyOn($window, 'addEventListener');
      compile(scope => {
        scope.sidebarCtrl.settings.isFocusForced = false;
        scope.sidebarCtrl.toggleFocusForced();
        expect($window.addEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
      });
    }));

    it('should remove blur event listener from window when isFocusForced is true', inject(function($window) {
      spyOn($window, 'removeEventListener');
      compile(function (scope) {
        scope.sidebarCtrl.settings.isFocusForced = true;
        scope.sidebarCtrl.toggleFocusForced();
        expect($window.removeEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
      });
    }));
  });

  describe('toggleStickySidebar()', function() {
    it('should be defined on controller', function () {
      compile(scope => {
        expect(typeof scope.sidebarCtrl.toggleStickySidebar).toBe('function');
      });
    });

    it('should toggle isSidebarSticky property using SettingsService', inject(SettingsService => {
      compile(scope => {
        spyOn(SettingsService, 'toggle').and.callThrough();
        scope.sidebarCtrl.toggleStickySidebar();
        expect(SettingsService.toggle).toHaveBeenCalledWith('isSidebarSticky');
      });
    }));
  });

  describe('getLastUpdated method', function() {
    it('should be defined', function() {
      compile(function (scope) {
        expect(scope.sidebarCtrl.getLastUpdated).toBeDefined();
      });
    });

    it('should return string from github API call', inject(function($httpBackend) {
      compile(function (scope) {
        // request mocked in before each somewhere at the top
        $httpBackend.flush();

        expect(scope.sidebarCtrl.lastUpdatedData).toEqual({
          url: "htmlUrl.com",
          date: "123",
          message: "hello"
        });
      });
    }));
  });

  describe('lastSubreddits property', function() {
    it('should be defined', function() {
      compile(function (scope) {
        expect(_.isArray(scope.sidebarCtrl.lastSubreddits)).toBe(true);
      });
    });
  });
});

