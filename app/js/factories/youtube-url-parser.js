;(() => {
  'use strict';

  angular.module('orodarius').factory('youtubeUrlParser', function() {
    // inspiration or, basically, stealing from:
    // https://github.com/honestbleeps/Reddit-Enhancement-Suite/blob/ebf015e5b78780f7c86e0c9ae5fde45af2c68fff/lib/modules/hosts/youtube.js#L11

    var hashRe = /^(?:https?:)?(?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?.*v=([\w\-]+)/i,
        altHashRe = /^https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+)/i;

    function getVideoInfoFromUrl(url) {
      var groups = hashRe.exec(url);

      if(!groups) {
        groups = altHashRe.exec(url);
      }

      if(groups) {
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
          id: groups[1],
          starttime: starttime
        };
      } else {
        return '';
      }
    }

    return getVideoInfoFromUrl;
  });
})();
