'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
    .controller('MenuCtrl', function ($scope, $localStorage, $location) {
        $scope.$storage = $localStorage;
        if ($scope.$storage.usuario) {
            $location.path('/admin');
        }
    });