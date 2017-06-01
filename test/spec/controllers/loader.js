'use strict';

describe('Controller: LoaderCtrl', function () {

  // load the controller's module
  beforeEach(module('sicamsaApp'));

  var LoaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoaderCtrl = $controller('LoaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoaderCtrl.awesomeThings.length).toBe(3);
  });
});
