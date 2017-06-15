'use strict';

describe('Controller: CircuitocerradoCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var CircuitocerradoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CircuitocerradoCtrl = $controller('CircuitocerradoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CircuitocerradoCtrl.awesomeThings.length).toBe(3);
  });
});
