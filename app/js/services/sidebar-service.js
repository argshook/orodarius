;(function() {
  'use strict';

  angular.module('orodarius')
    .service('SidebarService', function() {
      // TODO extract this to factory
      this.state = new function StateManager() {
        let CURRENT_STATE = 'main';
        let LISTENERS = [];

        const set = state =>
          CURRENT_STATE = state;

        const get = () =>
          CURRENT_STATE;

        const invokeListeners = () =>
          _.each(LISTENERS, listener => listener(CURRENT_STATE));

        const registerListener = listener => {
          LISTENERS = [listener].concat(LISTENERS);
          return listener;
        }

        const deregisterListener = listener =>
          LISTENERS = _.without(LISTENERS, listener);

        const createDeregisterer = listener =>
          () => deregisterListener(listener)

        return {
          get,
          set: _.flow(set, invokeListeners),
          subscribe: _.flow(registerListener, createDeregisterer)
        };
      };

      this.isOpen = true;

      this.toggle = function(toggleValue) {
        this.isOpen = toggleValue || !this.isOpen;
      };

      this.close = function() {
        this.isOpen = false;
      };
    });
})();
