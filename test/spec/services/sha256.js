'use strict';

describe('Service: sha256', function () {

  // load the service's module
  beforeEach(module('sicamsaApp'));

  // instantiate service
  var sha256;
  beforeEach(inject(function (_sha256_) {
    sha256 = _sha256_;
  }));

  it('should do something', function () {
    expect(!!sha256).toBe(true);
  });

});
