/* global angular */

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
    `youtube\\.com\\/attribution_link\\?.+(?:watch%3Fv%3D)${videoIdReg}`,
    `youtube\\.com\\/shared\\?ci=${videoIdReg}`
  ].map(r => urlPrefixReg + r)
    .map(r => new RegExp(r, 'i'));

  function youtubeUrlParser(url) {
    let matches =
      youtubeRegs
        .reduce((acc, curr) => {
          let match = curr.exec(url);
          return !!match ? match : acc;
        }, null);

    return !matches ? null : {
      id: matches[1],
      starttime: getStartTime(url)
    };
  }

  // Check url for timecode e.g t=1h23m15s
  function getStartTime(url) {
    const timecodeRe = /t=(.*?)&|t=(.*?)$/i;
    const timecodeResult = timecodeRe.exec(decodeURIComponent(url));

    let starttime = 0;

    if (timecodeResult !== null) {
      const timeBlocks = { h: 3600, m: 60, s: 1 };
      const timeReg = /[0-9]+[h|m|s]/ig;

      // Get each segment e.g. 8m and calculate its value in seconds
      const timeMatch = timecodeResult[0].match(timeReg);

      if (timeMatch) {
        timeMatch.forEach(ts => {
          const unit = timeBlocks[ts.charAt(ts.length - 1)];
          const amount = parseInt(ts.slice(0, - 1), 10);

          // Add each unit to starttime
          starttime += unit * amount;
        });
      } else {
        // support direct timestamp e.g. t=200
        starttime = parseInt(timecodeResult[0].replace('t=', ''), 10) || 0;
      }
    }

    return starttime;
  }
})();

