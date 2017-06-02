'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
    .controller('MainCtrl', function ($scope) {
        this.empresa = function (datos) {
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
        $scope.settingsInput = {
            theme: 'mobiscroll',
            display: 'bubble',
            lang: 'es',
        };
        $scope.settingsSelect = {
            theme: 'mobiscroll',
            display: 'bubble',
            minWidth: 200,
            lang: 'es'
        };
    });