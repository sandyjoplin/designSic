'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:UnidadesCtrl
 * @description
 * # UnidadesCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('UnidadesCtrl', function ($scope) {
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
