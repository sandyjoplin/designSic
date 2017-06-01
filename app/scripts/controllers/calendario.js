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
      color: '#6e7f29'
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
  });
