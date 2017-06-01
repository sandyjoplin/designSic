'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:AdministradorCtrl
 * @description
 * # AdministradorCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
    .controller('AdministradorCtrl', function ($scope) {
        this.identificacion = function (datos) {
            console.log(datos);
        }
        this.contacto = function (datos) {
            console.log(datos);
        }
        $scope.tabU = true;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabUnofn = function () {
            $scope.tabU = true;
            $scope.tabD = false;
            $scope.tabT = false;
        }
        $scope.tabDosfn = function () {
            $scope.tabU = false;
            $scope.tabD = true;
            $scope.tabT = false;
        }
        $scope.tabTresfn = function () {
            $scope.tabU = false;
            $scope.tabD = false;
            $scope.tabT = true;
        }
    });