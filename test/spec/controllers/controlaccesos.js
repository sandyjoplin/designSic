'use strict';

describe('Controller: ControlaccesosCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var ControlaccesosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControlaccesosCtrl = $controller('ControlaccesosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ControlaccesosCtrl.awesomeThings.length).toBe(3);
  });
});
