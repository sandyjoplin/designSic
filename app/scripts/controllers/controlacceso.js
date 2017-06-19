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
         $scope.settingsDate = {
            theme: 'mobiscroll',
            display: 'bubble',
            maxWidth: 200,
            lang: 'es'
        };
           $scope.printToCart = function(printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=1200,height=1200,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css"/><link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
      }
  });
