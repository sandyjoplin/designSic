'use strict';

/**
 * @ngdoc service
 * @name sicamsaApp.sha256
 * @description
 * # sha256
 * Service in the sicamsaApp.
 */
angular.module('sicamsaApp')
    .service('sha256', function () {
        this.encriptar = function (data) {
            var shaObj = new jsSHA("SHA-256", "TEXT");
            shaObj.update(data);
            var hash = shaObj.getHash("HEX");
            return hash;
        }
    });