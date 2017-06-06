'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:SolicitudesCtrl
 * @description
 * # SolicitudesCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('SolicitudesCtrl', function ($scope) {
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
