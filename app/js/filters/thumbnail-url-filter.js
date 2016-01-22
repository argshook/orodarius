;(() => {
  'use strict';

  angular.module('orodarius').filter('thumbnailUrlFilter', function() {
    return function(thumbnailUrl) {
      switch(thumbnailUrl) {
        case 'nsfw':
          return 'images/nsfw-thumbnail.jpg';
        case 'default':
          return 'images/default-thumbnail.png';
      }

      return thumbnailUrl;
    };
  });
})();

