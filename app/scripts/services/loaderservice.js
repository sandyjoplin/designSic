'use strict';

/**
 * @ngdoc service
 * @name sicamsaApp.loaderService
 * @description
 * # loaderService
 * Service in the sicamsaApp.
 */
angular.module('sicamsaApp')
    .service('loaderService', function ($rootScope, $timeout) {
        this.toggle = function (data) {
            if (data) {
                // variable que muestra o no el modal del loader $scope.loader
                $rootScope.loader = data;
                $rootScope.loaderClass = 'active';
            } else {
                $timeout(function () {
                    $rootScope.loaderClass = '';
                }, 1000);
                //quita la animacion y 
                $timeout(function () {
                    $rootScope.loader = data;
                }, 1400);
            }

        };
    });