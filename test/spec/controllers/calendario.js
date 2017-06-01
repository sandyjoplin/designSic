'use strict';

describe('Controller: CalendarioCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var CalendarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalendarioCtrl = $controller('CalendarioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CalendarioCtrl.awesomeThings.length).toBe(3);
  });
});
