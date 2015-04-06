'use strict';

var YT = {
  Player: function() {
    return {
      loadVideoById: angular.noop,
      loadVideoByUrl: angular.noop
    };
  }
};
