;(() => {
  'use strict';

  angular
    .module('orodarius')
    .factory('youtubeUrlParser', () => youtubeUrlParser);

  const urlPrefixReg = '^(?:https?:)?(?://)?(?:www\\.|m\\.)?';
  const videoIdReg = '([\\w\\-]+)';
  const youtubeRegs = [
    `youtube\\.com\\/watch\\?.*v=${videoIdReg}`,
    `youtube\\.com/v/${videoIdReg}`,
    `youtu\\.be\\/${videoIdReg}`,
    `youtube\\.com\\/attribution_link\\?.+(?:watch%3Fv%3D)${videoIdReg}`
  ].map(r => urlPrefixReg + r)
    .map(r => new RegExp(r, 'i'));

  function youtubeUrlParser(url) {
    let matches =
      youtubeRegs
        .reduce((acc, curr) => {
            let match = curr.exec(url);
            return !!match ? match : acc;
          }, null);

    if(matches) {
      // Check url for timecode e.g t=1h23m15s
      var timecodeRe = /t=(.*?)&|t=(.*?)$/i,
        starttime = 0,
        timecodeResult = timecodeRe.exec(url);

      if(timecodeResult !== null) {
        var time_blocks = {'h':3600, 'm':60, 's':1},
          timeRE = /[0-9]+[h|m|s]/ig;

        // Get each segment e.g. 8m and calculate its value in seconds
        var timeMatch = timecodeResult[0].match(timeRE);

        if(timeMatch) {
          timeMatch.forEach(function(ts){
            var unit = time_blocks[ts.charAt(ts.length-1)],
            amount = parseInt(ts.slice(0, - 1), 10);

            // Add each unit to starttime
            starttime += unit * amount;
          });
        } else {
          // support direct timestamp e.g. t=200
          starttime = parseInt(timecodeResult[0].replace('t=',''), 10);
          if (isNaN(starttime)) {
            starttime = 0;
          }
        }
      }

      return {
        id: matches[1],
        starttime: starttime
      };
    } else {
      // wtf why
      return '';
    }
  }

})();

