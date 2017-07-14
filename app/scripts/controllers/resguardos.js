'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:ResguardosCtrl
 * @description
 * # ResguardosCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('ResguardosCtrl', function ($scope) {
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
