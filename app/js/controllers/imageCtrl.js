;(function() {
  'use strict';

  function imageCtrl() {
    var dateStringFormat = 'YY MMMM DD HH';

    this.apiRootUrl = "http://www.meteo.lt/dokumentai/operatyvi_inf/skaitmenine_prog/";
    this.weatherTypes = ['temp', 'lietus', 'vejas', 'gusiai', 'debesys', 'mat'];
    this.imageUrl = '';
    this.currentStep = 0;
    this.currentWeatherType = this.weatherTypes[0];
    this.currentDateString = '';

    this.changeWeatherType = function(type) {
      this.currentWeatherType = type;
      this.imageUrl = this.generateImageUrl(type, 0);
    };

    this.generateImageUrl = function(type, stepId) {
      return this.apiRootUrl + type + '_' + this.getDateStringByStepId(stepId || 0) + '.gif';
    };

    this.getDateStringByStepId = function(stepId, format) {
      return moment().add(stepId, 'hours').format(format || 'YYYYMMDDHH');
    };

    this.changeImageAt = function(step) {
      this.currentDateString = this.getDateStringByStepId(step, dateStringFormat);
      return this.imageUrl = this.generateImageUrl(this.currentWeatherType, step);
    };

    function addZ(n) {
      return n < 10 ? '0' + n : '' + n;
    }

    ;(function init() {
      this.imageUrl = this.generateImageUrl(this.weatherTypes[0], 0);
      this.currentDateString = this.getDateStringByStepId(0, dateStringFormat);
    }).call(this);

  }

  angular.module('orodarius').controller('imageCtrl', imageCtrl);
})();
