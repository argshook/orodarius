describe("Controller: imageCtrl", function() {
  var ctrl;
  var apiRootUrlMock = "";
  var weatherTypesMock = ['temp', 'lietus', 'vejas', 'gusiai', 'debesys', 'mat'];
  var dateFormat = 'YYYYMMDDHH';

  function addZ(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  beforeEach(module('orodarius'));

  beforeEach(inject(function(_$controller_) {
    ctrl = _$controller_('imageCtrl', {});
  }));

  it("should contain API url", function() {
    expect(ctrl.apiRootUrl).toBe(apiRootUrlMock);
  });

  it("should contain possible types of weather data", function() {
    expect(ctrl.weatherTypes).toEqual(weatherTypesMock);
  });

  it("changeWeatherType should change current weather type", function() {
    ctrl.changeWeatherType(weatherTypesMock[0]);
    expect(ctrl.currentWeatherType).toBe(weatherTypesMock[0]);
  });

  it("generateImageUrl should return correct image URL", function() {
    expect(ctrl.generateImageUrl(weatherTypesMock[0]), 0).toBe(apiRootUrlMock + weatherTypesMock[0] + '_' + moment().format(dateFormat) + '.gif');
  });

  it("should contain imageUrl", function() {
    expect(ctrl.imageUrl).not.toBe('');
  });

  it("getDateStringByStepId should return correct date string according to current step number", function() {
    expect(ctrl.getDateStringByStepId(0)).toBe(moment().format(dateFormat));
    expect(ctrl.getDateStringByStepId(1)).toBe(moment().add(1, 'hours').format(dateFormat));
    expect(ctrl.getDateStringByStepId(10)).toBe(moment().add(10, 'hours').format(dateFormat));
  });

  it("changeImageAt should change current image url to correspond to current step", function() {
    ctrl.changeImageAt(0);
    expect(ctrl.imageUrl).toBe(apiRootUrlMock + weatherTypesMock[0] + '_' + moment().format(dateFormat) +  '.gif');

    ctrl.changeImageAt(1);
    expect(ctrl.imageUrl).toBe(apiRootUrlMock + weatherTypesMock[0] + '_' + moment().add(1, 'hour').format(dateFormat) + '.gif');

    ctrl.changeImageAt(2);
    expect(ctrl.imageUrl).toBe(apiRootUrlMock + weatherTypesMock[0] + '_' + moment().add(2, 'hours').format(dateFormat) + '.gif');

    ctrl.changeImageAt(20);
    expect(ctrl.imageUrl).toBe(apiRootUrlMock + weatherTypesMock[0] + '_' + moment().add(20, 'hours').format(dateFormat) + '.gif');
  });

  it("currentDateString should contain correct date string corresponding to currentStep", function() {
    var currentDateFormat = 'YY MMMM DD HH';
    ctrl.changeImageAt(3);
    expect(ctrl.currentDateString).toBe(moment().add(3, 'hours').format(currentDateFormat));

    ctrl.changeImageAt(15);
    expect(ctrl.currentDateString).toBe(moment().add(15, 'hours').format(currentDateFormat));
  });
});
