'use strict';

describe('Service: permisos', function () {

  // load the service's module
  beforeEach(module('sicamsaApp'));

  // instantiate service
  var permisos;
  beforeEach(inject(function (_permisos_) {
    permisos = _permisos_;
  }));

  it('should do something', function () {
    expect(!!permisos).toBe(true);
  });

});
