'use strict';

describe('Service: loaderService', function () {

  // load the service's module
  beforeEach(module('sicamsaApp'));

  // instantiate service
  var loaderService;
  beforeEach(inject(function (_loaderService_) {
    loaderService = _loaderService_;
  }));

  it('should do something', function () {
    expect(!!loaderService).toBe(true);
  });

});
