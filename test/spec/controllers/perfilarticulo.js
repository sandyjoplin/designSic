'use strict';

describe('Controller: PerfilarticuloCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var PerfilarticuloCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilarticuloCtrl = $controller('PerfilarticuloCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfilarticuloCtrl.awesomeThings.length).toBe(3);
  });
});
