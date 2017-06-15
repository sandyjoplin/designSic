'use strict';

describe('Controller: ControlequiposCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var ControlequiposCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControlequiposCtrl = $controller('ControlequiposCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ControlequiposCtrl.awesomeThings.length).toBe(3);
  });
});
