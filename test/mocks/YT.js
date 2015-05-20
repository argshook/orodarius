'use strict';

var YT = {
  Player: function() {
    return {
      loadVideoById: angular.noop,
      loadVideoByUrl: angular.noop,
      playVideo: angular.noop,
      pauseVideo: angular.noop,
      addEventListener: angular.noop
    };
  }
};
