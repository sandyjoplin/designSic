'use strict';

/**
 * @ngdoc overview
 * @name sicamsaApp
 * @description
 * # sicamsaApp
 *
 * Main module of the application.
 */
angular
    .module('sicamsaApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngProgress',
        'ngStorage',
        'mobiscroll-eventcalendar',
        'mobiscroll-calendar',
        'mobiscroll-select',
        'mobiscroll-form'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            /* .when('/', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'login'
                })*/
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/personal', {
                templateUrl: 'views/personal.html',
                controller: 'PersonalCtrl',
                controllerAs: 'personal'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminCtrl',
                controllerAs: 'admin'
            })
            .when('/administrador', {
                templateUrl: 'views/administrador.html',
                controller: 'AdministradorCtrl',
                controllerAs: 'administrador'
            })
            .when('/catalogos', {
                templateUrl: 'views/catalogos.html',
                controller: 'CatalogosCtrl',
                controllerAs: 'catalogos'
            })
            .when('/perfil', {
                templateUrl: 'views/perfil.html',
                controller: 'PerfilCtrl',
                controllerAs: 'perfil'
            })
            .when('/solicitudes', {
                templateUrl: 'views/solicitudes.html',
                controller: 'SolicitudesCtrl',
                controllerAs: 'solicitudes'
            })
            .when('/calendario', {
              templateUrl: 'views/calendario.html',
              controller: 'CalendarioCtrl',
              controllerAs: 'calendario'
            })
            .when('/nomina', {
              templateUrl: 'views/nomina.html',
              controller: 'NominaCtrl',
              controllerAs: 'nomina'
            })
            .when('/controlVisitas', {
              templateUrl: 'views/controlvisitas.html',
              controller: 'ControlvisitasCtrl',
              controllerAs: 'controlVisitas'
            })
            .when('/controlAccesos', {
              templateUrl: 'views/controlaccesos.html',
              controller: 'ControlaccesosCtrl',
              controllerAs: 'controlAccesos'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).config(['$localStorageProvider',
        function ($localStorageProvider) {
            $localStorageProvider.setKeyPrefix('SCS');
        }
    ])