'use strict';

describe('Controller: UnidadesCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var UnidadesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnidadesCtrl = $controller('UnidadesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UnidadesCtrl.awesomeThings.length).toBe(3);
  });
});
