'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:CalendarioCtrl
 * @description
 * # CalendarioCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
  .controller('CalendarioCtrl', function ($scope) {
    $scope.events = [{
      d: new Date(),
      text: 'ejemplo',
      color: '#007ac8'
    }];
    $scope.settings = {
      theme: 'mobiscroll',
      display: 'inline',
      layout: 'liquid',
      calendarScroll: 'horizontal',
      showOuterDays: true,
      showEventCount: true,
      lang: 'es',
      eventText: "feriado",
      eventsText: "feriados"
    };
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
