'use strict';

describe('Service: PlayerService', function() {
  var service, player, PlaylistService, $q;

  beforeEach(module($provide => {
    $provide.decorator('$timeout', $delegate => {
      return jasmine.createSpy('$timeout');
    });
  }));
  beforeEach(module('orodarius'));

  beforeEach(inject(function(_PlayerService_, _PlaylistService_, _$q_) {
    service = _PlayerService_;
    PlaylistService = _PlaylistService_;
    $q = _$q_;

    player = service.createNewPlayer('main-video-player');

    spyOn(player, 'loadVideoById');
    spyOn(PlaylistService, 'expandPlaylist').and.returnValue($q.resolve());
  }));

  it('createNewPlayer method should create new player instance', function() {
    expect(player).toBeTruthy();
    expect(service.youtubePlayer).toBeTruthy();
    expect(player).toEqual(service.youtubePlayer);
  });

  it('playVideo should start playing a new video', function() {
    service.playVideo(mockVideoItem);
    expect(player.loadVideoById).toHaveBeenCalled();
  });

  it('playVideo should start playing a new video at certain time if one has been passed', function() {
    service.playVideo(mockVideoItem);

    expect(player.loadVideoById)
      .toHaveBeenCalledWith({
        videoId: mockVideoItem.videoId,
        startSeconds: mockVideoItem.starttime,
        suggestedQuality: 'default'
      });
  });

  it('playNext should call playVideo with next videoId in row', inject(($rootScope) => {
    PlaylistService.playlist = [
      { videoId: 'currentId', ownId: 0 },
      { videoId: 'nextId', ownId: 1 }
    ];

    service.currentVideoItem = PlaylistService.playlist[0];

    service.playNext();
    $rootScope.$apply();
    expect(service.currentVideoItem.videoId).toBe('nextId');
  }));

  it('playNext method should call PlaylistService.expandPlaylist when any of three items on playlist end ar currently playing', inject(($rootScope) => {
    PlaylistService.playlist = _.range(4).map(i => { return { videoId: `currentId${i}`, ownId: i }; });

    _.range(3).map(i => {
        service.currentVideoItem = PlaylistService.playlist[i];
        service.playNext();
        $rootScope.$apply();
    });

    expect(PlaylistService.expandPlaylist.calls.count()).toBe(3);
  }));

  it('playNext method should determine next video by videoId, name and created properties', inject(($rootScope) => {
    PlaylistService.playlist = [
      { videoId: 'currentId', name: 'WHAAT', created: 1 },
      { videoId: 'currentId', name: 'WHAAT', created: 2 }
    ];

    service.currentVideoItem = PlaylistService.playlist[0];
    service.playNext();
    $rootScope.$apply();
    expect(service.currentVideoItem).toEqual(PlaylistService.playlist[1]);
  }));

  it('playPrevious should play previous video in row', function() {
    PlaylistService.playlist = [
      { videoId: 'previousId' },
      { videoId: 'currentId' }
    ];

    service.currentVideoItem.videoId = PlaylistService.playlist[1].videoId;

    service.playPrevious();
    expect(service.currentVideoItem.videoId).toBe('previousId');
  });

  it('playOrPauseVideo method should do what it says', function() {
    service.isPlaying = false;
    spyOn(player, 'playVideo');
    spyOn(player, 'pauseVideo');

    service.playOrPause();
    expect(service.isPlaying).toBe(true);

    service.playOrPause();
    expect(service.isPlaying).toBe(false);

    expect(player.playVideo).toHaveBeenCalled();
    expect(player.pauseVideo).toHaveBeenCalled();
  });

  it("should expose resetCurrentVideoItem method", function() {
    expect(service.resetCurrentVideoItem).toBeDefined();
  });

  it("resetCurrentVideoItem should reset currentVideoItem to undefined", function() {
    service.resetCurrentVideoItem();
    expect(service.currentVideoItem).toBeUndefined();
  });

  describe('markCurrentVideoItemWithError method', function() {
    // possible error codes: 2, 5, 100, 101, 150
    // see https://developers.google.com/youtube/iframe_api_reference#onError

    beforeEach(function() {
      PlaylistService.playlist = [
        { videoId: 'currentId', ownId: '1' },
        { videoId: 'nextId', ownId: '2' }
      ];
      service.currentVideoItem = PlaylistService.playlist[0];
    });

    it('should mark invalid id error', function() {
      service.markCurrentVideoItemWithError(2);
      expect(PlaylistService.playlist[0].error).toEqual({
        code: 2,
        message: "can't parse video ID"
      });
    });

    it('should mark html5 player error', function() {
      service.markCurrentVideoItemWithError(5);
      expect(PlaylistService.playlist[0].error).toEqual({
        code: 5,
        message: "problem with HTML5 Youtube player"
      });
    });

    it('should mark html5 player error', function() {
      service.markCurrentVideoItemWithError(100);
      expect(PlaylistService.playlist[0].error).toEqual({
        code: 100,
        message: "video is private or removed"
      });
    });

    it('should mark html5 player error', function() {
      var err101and150msg = "uploader does not allow embedded playback";

      service.markCurrentVideoItemWithError(101);
      expect(PlaylistService.playlist[0].error).toEqual({ code: 101, message: err101and150msg });

      service.markCurrentVideoItemWithError(150);
      expect(PlaylistService.playlist[0].error).toEqual({ code: 150, message: err101and150msg });
    });
  });

  describe('onPlayerStateChange()', () => {
    describe('when SettingsService.list.isFocusForced is true', () => {
      it('should call document.activeElement.blur()', inject(SettingsService => {
        SettingsService.list.isFocusForced = true;
        spyOn(document.activeElement, 'blur');
        service.onPlayerStateChange({ data: 0 });
        expect(document.activeElement.blur).toHaveBeenCalled();
      }));
    });

    describe('when called with event.data === 0 and isFlashModeEnabled === true', () => {
      it('should call playNext after 5 seconds', inject((SettingsService, $timeout) => {
        SettingsService.list.isFlashModeEnabled = true;
        spyOn(service, 'playNext');
        service.onPlayerStateChange({ data: 0 });
        expect(service.playNext).toHaveBeenCalled();
      }));
    });
  });
});
