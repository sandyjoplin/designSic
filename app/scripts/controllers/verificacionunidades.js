'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:VerificacionunidadesCtrl
 * @description
 * # VerificacionunidadesCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('VerificacionunidadesCtrl', function ($scope) {
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
    $scope.settingsDate = {
      theme: 'mobiscroll',
      display: 'bubble',
      maxWidth: 200,
      lang: 'es'
    };
    $scope.tabUno = true;
    $scope.tabdos = false;
    $scope.cambiarTabUno = function () {
      $scope.tabUno = !$scope.tabUno;
      $scope.tabdos = !$scope.tabdos;
    }
    
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabCu = false;
    $scope.tabUnofn = function () {
      $scope.tabU = true;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = false;
    }
    $scope.tabDosfn = function () {
      $scope.tabU = false;
      $scope.tabD = true;
      $scope.tabT = false;
      $scope.tabCu = false;
    }
    $scope.tabTresfn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = true;
      $scope.tabCu = false;
    }
    $scope.tabCuatrofn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = true;
    }
    
  });
