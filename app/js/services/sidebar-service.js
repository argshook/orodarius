;(function() {
  'use strict';

  angular.module('orodarius')
    .service('SidebarService', function() {
      this.isOpen = true;

      this.toggle = function(toggleValue) {
        this.isOpen = toggleValue ? toggleValue : !this.isOpen;
      };
    });
})();
