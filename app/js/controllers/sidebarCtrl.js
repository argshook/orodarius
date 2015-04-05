;(function() {
  'use strict';

  angular.module('orodarius')
    .controller('sidebarCtrl', function() {
      this.isOpen = false;

      this.toggleSidebar = function() {
        this.isOpen = !this.isOpen;
      };
    });
})();
