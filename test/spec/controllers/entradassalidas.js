'use strict';

describe('Controller: EntradassalidasCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var EntradassalidasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntradassalidasCtrl = $controller('EntradassalidasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EntradassalidasCtrl.awesomeThings.length).toBe(3);
  });
});
