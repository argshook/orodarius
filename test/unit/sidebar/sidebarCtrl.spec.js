'use strict';

describe('Controller: sidebarCtrl', function() {
  var ctrl, scope, PlaylistService, PlayerService, LastSubredditsService, SettingsService, $httpBackend, $q, deferred, $window;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _PlaylistService_, _PlayerService_, _LastSubredditsService_, _SettingsService_, _$httpBackend_, _$q_, _$window_) {
    $q = _$q_;
    scope = _$rootScope_.$new();
    ctrl = _$controller_('sidebarCtrl', { $scope: scope, PlaylistService: _PlaylistService_, PlayerService: _PlayerService_ });
    $window = _$window_;

    PlaylistService = _PlaylistService_;
    PlayerService = _PlayerService_;
    LastSubredditsService = _LastSubredditsService_;
    SettingsService = _SettingsService_;
    $httpBackend = _$httpBackend_;

    spyOn(PlayerService, 'playVideo');

    PlaylistService.add(mockVideoItem);
    PlaylistService.add(mockVideoItem);
  }));

  it('should get sidebarService.isOpen flag as false', function() {
    expect(scope.sidebarService.isOpen).toBe(true);
  });

  it('toggleSidebar should toggle isOpen flag', function() {
    ctrl.toggleSidebar();
    expect(scope.sidebarService.isOpen).toBe(false);

    ctrl.toggleSidebar();
    expect(scope.sidebarService.isOpen).toBe(true);
  });

  it('playlistService should contain items from PlaylistService.playlist', function() {
    expect(scope.playlistService.playlist).toEqual([mockVideoItem, mockVideoItem]);
  });

  it('playVideo method should tell PlayerService to play video', function() {
    ctrl.playVideo(mockVideoItem);
    expect(PlayerService.playVideo).toHaveBeenCalledWith(mockVideoItem);
  });

  it('isOpen should be false after playVideo has been invoked', function() {
    scope.sidebarService.isOpen = true;
    ctrl.playVideo(mockVideoItem);
    expect(scope.sidebarService.isOpen).toBe(false);
  });

  it('isOpen should be true after playVideo has been invoked when isSidebarSticky is true', function() {
    scope.sidebarService.isOpen = true;
    scope.settings.list.isSidebarSticky = true;
    ctrl.playVideo(mockVideoItem);
    expect(scope.sidebarService.isOpen).toBe(true);
  });

  it('fillPlaylistWith should fill sidebar.list with fetched items from reddit', function() {
    spyOn(PlaylistService, 'fetchSubreddit').and.returnValue({then: angular.noop});
    ctrl.fillPlaylistWith('artisanvideos');
    expect(PlaylistService.fetchSubreddit).toHaveBeenCalledWith('artisanvideos');
  });

  it('fillPlaylistWith should clear playlist', function() {
    spyOn(PlaylistService, 'clear');
    ctrl.fillPlaylistWith('videos');
    expect(PlaylistService.clear).toHaveBeenCalled();
  });

  it('should contain currentSubreddit property on scope', function() {
    expect(typeof scope.currentSubreddit).toBe('string');
  });

  describe('suggested subreddits', function() {
    it('should be exposed', function() {
      expect(ctrl.suggestedSubreddits).toBeDefined();
    });

    it('should contain at least 4 items of certain structure', function() {
      expect(ctrl.suggestedSubreddits.length).toBeGreaterThan(3);
      expect(ctrl.suggestedSubreddits[0]).toEqual(jasmine.objectContaining({
        name: 'videos'
      }));
    });
  });

  describe('settings', function() {
    it('should be defined', function() {
      expect(scope.settings).toBeDefined();
    });

    it('should contain default values', function() {
      expect(scope.settings.list.isSidebarSticky).toBe(false);
      expect(scope.settings.list.isFocusForced).toBe(false);
    });
  });

  describe('toggleForceFocus method', function() {
    it('should be defined', function() {
      expect(ctrl.toggleForceFocus).toBeDefined();
    });

    it('should toggle $scope.isFocusForced when called', function() {
      ctrl.toggleForceFocus();
      expect(scope.settings.list.isFocusForced).toBe(true);
      ctrl.toggleForceFocus();
      expect(scope.settings.list.isFocusForced).toBe(false);
    });

    it('should attach blur event listener on window when isFocusForced is false', function() {
      spyOn($window, 'addEventListener');
      scope.settings.list.isFocusForced = false;
      ctrl.toggleForceFocus();
      expect($window.addEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
    });

    it('should remove blur event listener from window when isFocusForced is true', function() {
      spyOn($window, 'removeEventListener');
      scope.settings.list.isFocusForced = true;
      ctrl.toggleForceFocus();
      expect($window.removeEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
    });
  });

  describe('getLastUpdated method', function() {
    it('should be defined', function() {
      expect(ctrl.getLastUpdated).toBeDefined();
    });

    it('should return string from github API call', function() {
      var githubMock = '{"html_url": "htmlUrl.com", "commit": { "author": { "date": "123" }, "message": "hello" }}';
      $httpBackend.expectGET('https://api.github.com/repos/argshook/orodarius/commits/gh-pages')
        .respond(200, githubMock);

      $httpBackend.flush();

      expect(ctrl.lastUpdatedData).toEqual({
        url: "htmlUrl.com",
        date: "123",
        message: "hello"
      });
    });
  });

  describe('lastSubreddits property', function() {
    it('should be defined', function() {
      expect(angular.isArray(scope.lastSubreddits)).toBe(true);
    });
  });
});
