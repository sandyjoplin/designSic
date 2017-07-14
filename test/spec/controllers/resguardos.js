'use strict';

describe('Controller: ResguardosCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var ResguardosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResguardosCtrl = $controller('ResguardosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResguardosCtrl.awesomeThings.length).toBe(3);
  });
});
