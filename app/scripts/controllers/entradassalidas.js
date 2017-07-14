'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:EntradassalidasCtrl
 * @description
 * # EntradassalidasCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('EntradassalidasCtrl', function ($scope) {
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
  });
