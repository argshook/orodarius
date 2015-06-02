;(function() {
  'use strict';

  angular.module('orodarius')
    .directive('orodariusSidebar', function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/orodarius-sidebar.html',
        controller: 'sidebarCtrl',
        controllerAs: 'sidebar',
        bindToController: true
      };
    });
})();
