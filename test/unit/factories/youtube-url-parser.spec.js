'use strict';

describe('Factory: youtubeUrlParser', function() {
  var youtubeUrlParser;

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_youtubeUrlParser_) {
    youtubeUrlParser = _youtubeUrlParser_;
  }));

  describe('when no parameter passed', function() {
    it('should return empty string', function() {
      expect(youtubeUrlParser()).toBe('');
    });
  });

  describe('when one parameter passed', function() {
    describe('with no timestamp in url', function() {
      it('should return correct object', function() {
        var videoId = 'l5dvu4feCFk';

        var youtubeUrls = [
          'youtube.com/watch?v='+ videoId,
          'm.youtube.com/watch?v='+ videoId,
          'https://m.youtube.com/watch?v='+ videoId,
          '//youtube.com/watch?v='+ videoId,
          '//m.youtube.com/watch?v='+ videoId,
          'www.youtube.com/watch?v='+ videoId,
          'https://www.youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be',
          'https://youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be',
          'https://www.youtube.com/watch?v='+ videoId +'&feature=youtu.be',
          'https://www.youtube.com/watch?v='+ videoId +'&&&feature=youtu.be',
          'https://www.youtube.com/watch?v='+ videoId +'&&&feature=youtu.be#hash',
          'https://www.youtube.com/watch?v='+ videoId +'&&&feature=youtu.be/#slashed-hash',
          'https://www.youtube.com/watch?v='+ videoId,
          'https://www.youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be&amp;'
        ];

        expectUrlsToEqualObject(youtubeUrls, {
          id: videoId,
          starttime: 0
        });
      });
    });

    describe('with timestamp in url', function() {
      it('should return correct object', function() {
        var videoId = 'l5dvu4feCFk',
            videoStartTime = 230;

        var youtubeUrls = [
          'https://www.youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be&t=230',
          'https://www.youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be&amp;t=3m50s',
          'https://www.youtube.com/watch?v='+ videoId +'&amp;feature=youtu.be&t=3m50s',
        ];

        expectUrlsToEqualObject(youtubeUrls, {
          id: videoId,
          starttime: 230
        });
      });
    });

    describe('with wrong parameters', function() {
      it('should ignore wrong timestamp', function() {
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
    urls.forEach(function(url) {
      expect(youtubeUrlParser(url)).toEqual(object);
    });
  }
});
