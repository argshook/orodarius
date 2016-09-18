'use strict';

describe('Factory: youtubeUrlParser', () => {
  var youtubeUrlParser;

  beforeEach(module('orodarius'));

  beforeEach(inject((_youtubeUrlParser_) => {
    youtubeUrlParser = _youtubeUrlParser_;
  }));

  describe('given no parameters', () => {
    it('should return null', () => {
      expect(youtubeUrlParser()).toBe(null);
    });
  });

  describe('given valid youtube url', () => {
    it('should return expected object', () => {
      var videoId = 'l5dvu4feCFk';

      var youtubeUrls = [
        `youtube.com/watch?v=${videoId}`,
        `www.youtube.com/watch?v=${videoId}`,
        `http://www.youtube.com/watch?v=${videoId}`,
        `https://youtube.com/watch?v=${videoId}`,
        `https://m.youtube.com/watch?v=${videoId}`,
        `//youtube.com/watch?v=${videoId}`,
        `//m.youtube.com/watch?v=${videoId}`,
        `http://www.youtube.com/v/${videoId}`,
        `http://www.youtube.com/v/${videoId}`,
        `https://www.youtube.com/watch?v=${videoId}&ampfeature=youtu.be`,
        `https://youtube.com/watch?v=${videoId}&amp;feature=youtu.be`,
        `https://www.youtube.com/watch?v=${videoId}&feature=youtu.be`,
        `https://www.youtube.com/watch?v=${videoId}&&&feature=youtu.be`,
        `https://www.youtube.com/watch?v=${videoId}&&&feature=youtu.be#hash`,
        `https://www.youtube.com/watch?v=${videoId}&&&feature=youtu.be/#slashed-hash`,
        `https://www.youtube.com/watch?v=${videoId}`,
        `https://www.youtube.com/watch?v=${videoId}&amp;feature=youtu.be&amp;`,
        `https://youtu.be/${videoId}`,
        `m.youtube.com/watch?v=${videoId}`,
        `https://www.youtube.com/attribution_link?a=LOViDhH-uZE&u=%2Fwatch%3Fv%3D${videoId}%26feature%3Dshare`,
        `https://www.youtube.com/shared?ci=${videoId}`
      ];

      expectUrlsToEqualObject(youtubeUrls, {
        id: videoId,
        starttime: 0
      });
    });

    describe('containing timestamp', () => {
      it('should return correct object', () => {
        var videoId = 'l5dvu4feCFk',
            videoStartTime = 230;

        var youtubeUrls = [
          `https://www.youtube.com/watch?v=${videoId}&amp;feature=youtu.be&t=230`,
          `https://www.youtube.com/watch?v=${videoId}&amp;feature=youtu.be&amp;t=3m50s`,
          `https://www.youtube.com/watch?v=${videoId}&amp;feature=youtu.be&t=3m50s`,
          `https://youtu.be/${videoId}&amp;t=230`,
          `m.youtube.com/watch?v=${videoId}&t=0h3m50s`,
          `https://www.youtube.com/attribution_link?a=LOViDhH-uZE&u=%2Fwatch%3Fv%3D${videoId}%26feature%3Dshare%26t%3D230`,
        ];

        expectUrlsToEqualObject(youtubeUrls, {
          id: videoId,
          starttime: 230
        });
      });
    });

    describe('with wrong parameters', () => {
      it('should ignore wrong timestamp', () => {
        var videoId = 'l5dvu4feCFk';
        var youtubeUrls = [
          'youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be&t=',
          'youtube.com/watch?v='+ videoId +'&t=0m00s',
          'youtube.com/watch?v='+ videoId +'&t=00h00m00s',
          'youtube.com/watch?v='+ videoId +'&t=m00s'
        ];

        expectUrlsToEqualObject(youtubeUrls, {
          id: videoId,
          starttime: 0
        });
      });
    });
  });

  function expectUrlsToEqualObject(urls, object) {
    urls.forEach(url => {
      // array with url so i can know which failed
      expect([ url, youtubeUrlParser(url) ]).toEqual([ jasmine.any(String), object ]);
    });
  }
});
