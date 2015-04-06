;(function() {
  'use strict';

  angular.module('orodarius')
    .service('PlaylistService', function() {
      var playlist = [];

      var playlist = [{
        name: 'IM NOT CHUGGING BEER, Randy Marsh- South Park',
        description: 'WTF, this scene is hilarious!! XD',
        videoId: 'gYRuPXbav2w'
      }];

      function add(item) {
        playlist.push(item);
        return playlist;
      }

      return {
        playlist,
        add
      };
    });
})();
