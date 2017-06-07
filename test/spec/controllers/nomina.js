'use strict';

describe('Controller: NominaCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var NominaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NominaCtrl = $controller('NominaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NominaCtrl.awesomeThings.length).toBe(3);
  });
});
