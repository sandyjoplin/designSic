'use strict';

describe('Controller: PerfilunidadCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var PerfilunidadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilunidadCtrl = $controller('PerfilunidadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfilunidadCtrl.awesomeThings.length).toBe(3);
  });
});
