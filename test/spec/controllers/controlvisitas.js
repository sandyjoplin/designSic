'use strict';

describe('Controller: ControlvisitasCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var ControlvisitasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControlvisitasCtrl = $controller('ControlvisitasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ControlvisitasCtrl.awesomeThings.length).toBe(3);
  });
});
