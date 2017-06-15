'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:ControlaccesoCtrl
 * @description
 * # ControlaccesoCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('ControlaccesoCtrl', function ($scope) {
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
