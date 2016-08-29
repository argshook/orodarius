;(() => {
  'use strict';

  angular
    .module('orodarius')
    .filter('thumbnailUrlFilter', () => url => filterUrl(url));

  function filterUrl(url) {
    return [url]
      .map(s => typeof s === 'string' ? s : '')
      .map(s => s.replace(/^http:\/\//, 'https://'))
      .map(s => {
        switch (s) {
          case 'nsfw':
            return 'images/nsfw-thumbnail.jpg';
          case 'default':
            return 'images/default-thumbnail.png';
          default:
            return s;
        }
      })
      .shift();
  }
})();

