'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
    .controller('AdminCtrl', function ($scope, $localStorage, $location) {
        $scope.$storage = $localStorage;
        if (!$scope.$storage.usuario) {
            $location.path('/login');
        }
        $scope.cerrarSesion = function () {
            $localStorage.$reset();
            $location.path('/login');
        }


        //recorrer permisos
        $scope.$storage.usuario.privilegios.forEach(function (permisos, index) {

            console.log(permisos);
            console.log(index + ' ' + permisos.NOMMODULO);
            console.log(index + ' ' + 'permiso select:' + permisos.S);
            console.log(index + ' ' + 'permiso create:' + permisos.CR);
            console.log(index + ' ' + 'permiso delete:' + permisos.D);
            console.log(index + ' ' + 'permiso update:' + permisos.U);

        });
        //recorrer permisos
    });