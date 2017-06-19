'use strict';

describe('Controller: ControlasistenciasCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var ControlasistenciasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControlasistenciasCtrl = $controller('ControlasistenciasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ControlasistenciasCtrl.awesomeThings.length).toBe(3);
  });
});
