;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('baseCtrl', function(PlayerService) {
      this.keyboardEventsOptions = {
        37: function(event) {
          console.log('left!');
          PlayerService.playPrevious();
        },
        39: function(event) {
          console.log('right!');
          PlayerService.playNext();
        },
        32: function(event) {
          console.log('space!');
          PlayerService.playOrPause();
        }
      };
    });
})();
