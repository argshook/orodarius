;(function () {
  'use strict';

  angular
    .module('orodarius')
    .directive('orodariusSidebarHead', function() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/orodarius-sidebar-head.html',
        controllerAs: 'orodariusSidebarHead',
        controller: function() {
          //console.log('hai ctrl');
        }
      };
    });
}());

