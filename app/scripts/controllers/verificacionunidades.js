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
    $scope.tabUno = true;
    $scope.tabdos = false;
    $scope.cambiarTabUno = function () {
      $scope.tabUno = !$scope.tabUno;
      $scope.tabdos = !$scope.tabdos;
    }
  });
