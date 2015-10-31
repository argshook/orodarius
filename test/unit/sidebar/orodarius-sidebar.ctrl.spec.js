'use strict';

describe('Controller: sidebarCtrl', function() {
  var ctrl, scope, PlaylistService, PlayerService, LastSubredditsService,
      SettingsService, $httpBackend, $q, deferred, $window;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(
      _$rootScope_, _$controller_, _PlaylistService_, _PlayerService_,
      _LastSubredditsService_, _SettingsService_, _$httpBackend_, _$q_, _$window_) {
    $q = _$q_;
    scope = _$rootScope_.$new();
    ctrl = _$controller_('sidebarCtrl', {
      $scope: scope,
      PlaylistService: _PlaylistService_,
      PlayerService: _PlayerService_
    });
    $window = _$window_;

    PlaylistService = _PlaylistService_;
    PlayerService = _PlayerService_;
    LastSubredditsService = _LastSubredditsService_;
    SettingsService = _SettingsService_;
    $httpBackend = _$httpBackend_;

    spyOn(PlayerService, 'playVideo');

    PlaylistService.add(mockVideoItem);
    PlaylistService.add(mockVideoItem);

    var githubMock = '{"html_url": "htmlUrl.com", "commit": { "author": { "date": "123" }, "message": "hello" }}';
    $httpBackend.expectGET('https://api.github.com/repos/argshook/orodarius/commits/gh-pages')
      .respond(200, githubMock);
  }));

  describe('isLoading', function() {
    it('should be exposed as controller variable and set to false', function() {
      expect(ctrl.isLoading).toBe(false);
    });
  });

  describe('expandPlaylist()', function() {
    it('should be exposed as ctrl method', function() {
      expect(typeof ctrl.expandPlaylist).toBe('function');
    });

    it('should call playlistService.expandPlaylist()', function() {
      spyOn(ctrl, 'expandPlaylist').and.callThrough();

      ctrl.expandPlaylist();
      expect(ctrl.isLoading).toBe(true);
      $httpBackend.flush();
      expect(ctrl.isLoading).toBe(false);
    });
  });

  describe('isListItemCurrentlyPlayed()', function() {
    describe('when passed videoId equals to currently played video id', function() {
      it('should return true', function() {
        PlayerService.currentVideoItem.videoId = 1;
        expect(ctrl.isListItemCurrentlyPlayed({ videoId: 1 })).toBe(true);
      });
    });

    describe('when passed videoId does not equal to currently played video id', function() {
      it('should return true', function() {
        PlayerService.currentVideoItem.videoId = 2;
        expect(ctrl.isListItemCurrentlyPlayed({ videoId: 1 })).toBe(false);
      });
    });
  });

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
    expect(ctrl.playlist).toEqual([mockVideoItem, mockVideoItem]);
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
    ctrl.settings.isSidebarSticky = true;
    ctrl.playVideo(mockVideoItem);
    expect(scope.sidebarService.isOpen).toBe(true);
  });

  describe('fillPlaylistWith()', function() {
    it('should set isLoading to true and back to false after resolve', function() {
      $httpBackend.whenGET(/whatever/).respond(200, REDDIT);
      expect(ctrl.isLoading).toBe(false);

      ctrl.fillPlaylistWith('whatever');
      expect(ctrl.isLoading).toBe(true);

      $httpBackend.flush();
      expect(ctrl.isLoading).toBe(false);
    });

    it('should fill sidebar.list with fetched items from reddit', function() {
      spyOn(PlaylistService, 'fetchSubreddit').and.returnValue({then: angular.noop});
      ctrl.fillPlaylistWith('artisanvideos');
      expect(PlaylistService.fetchSubreddit).toHaveBeenCalledWith('artisanvideos');
    });

    it('should clear playlist', function() {
      spyOn(PlaylistService, 'clear');
      ctrl.fillPlaylistWith('videos');
      expect(PlaylistService.clear).toHaveBeenCalled();
    });

    describe('when no argument passed', () => {
      it('should clear ctrl.currentSubreddit', () => {
        ctrl.fillPlaylistWith();
        expect(ctrl.currentSubreddit).toBe('');
      });

      it('should not call PlaylistService.fetchSubreddit', () => {
        spyOn(PlaylistService, 'fetchSubreddit');
        ctrl.fillPlaylistWith();
        expect(PlaylistService.fetchSubreddit).not.toHaveBeenCalled();
      });
    });
  });


  it('should contain currentSubreddit property on controller', function() {
    expect(typeof ctrl.currentSubreddit).toBe('string');
  });

  describe('suggested subreddits', function() {
    it('should contain at least 4 items of certain structure', function() {
      expect(ctrl.suggestedSubreddits.length).toBeGreaterThan(3);
      expect(ctrl.suggestedSubreddits[0]).toEqual(jasmine.objectContaining({
        name: 'videos'
      }));
    });
  });

  describe('settings', function() {
    it('should contain default values', function() {
      expect(ctrl.settings.isSidebarSticky).toBe(false);
      expect(ctrl.settings.isFocusForced).toBe(false);
    });
  });

  describe('toggleFocusForced method', function() {
    it('should toggle $scope.isFocusForced when called', function() {
      ctrl.toggleFocusForced();
      expect(ctrl.settings.isFocusForced).toBe(true);
      ctrl.toggleFocusForced();
      expect(ctrl.settings.isFocusForced).toBe(false);
    });

    it('should attach blur event listener on window when isFocusForced is false', function() {
      spyOn($window, 'addEventListener');
      ctrl.settings.isFocusForced = false;
      ctrl.toggleFocusForced();
      expect($window.addEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
    });

    it('should remove blur event listener from window when isFocusForced is true', function() {
      spyOn($window, 'removeEventListener');
      ctrl.settings.isFocusForced = true;
      ctrl.toggleFocusForced();
      expect($window.removeEventListener).toHaveBeenCalledWith('blur', jasmine.any(Function));
    });
  });

  describe('toggleStickySidebar()', function() {
    it('should be defined on controller', function () {
      expect(typeof ctrl.toggleStickySidebar).toBe('function');
    });

    it('should toggle isSidebarSticky property using SettingsService', function() {
      spyOn(SettingsService, 'toggle').and.callThrough();
      ctrl.toggleStickySidebar();
      expect(SettingsService.toggle).toHaveBeenCalledWith('isSidebarSticky');
    });
  });

  describe('getLastUpdated method', function() {
    it('should be defined', function() {
      expect(ctrl.getLastUpdated).toBeDefined();
    });

    it('should return string from github API call', function() {
      // request mocked in before each somewhere at the top
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
      expect(angular.isArray(ctrl.lastSubreddits)).toBe(true);
    });
  });
});
