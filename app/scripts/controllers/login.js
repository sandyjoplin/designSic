'use strict';

/**
 * @ngdoc function
 * @name sicamsaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sicamsaApp
 */
angular.module('sicamsaApp')
    .controller('LoginCtrl', function ($http, $scope, sha256, ngProgressFactory, $timeout, loaderService, ep, $localStorage, $location) {
        var progressBar = ngProgressFactory.createInstance();
        progressBar.setColor('#b7d761');
        $scope.$storage = $localStorage;
        if ($scope.$storage.usuario) {
            $location.path('/admin');
        }



        //¡        $scope.postPrueba = function () {
        //            var req = {
        //                method: 'POST',
        //                url: 'http://sicamsaservice.azurewebsites.net/desarrollo.svc/insertarPersonal',
        //                headers: {
        //                    'Content-Type': 'application/json'
        //                },
        //                dataType: 'json',
        //                data: jsonWS
        //            }
        //            console.log("{wsPERSONAL:" + jsonWS + "}");
        //
        //            $http(req).then(function (res) {
        //                console.log(res.data);
        //            }, function (err) {
        //                console.log(err.data);
        //            });
        //        };


        $scope.loginFn = function (login) {
            var usuario = login.numEmpleado;
            var password = sha256.encriptar(login.password);
            progressBar.start();
            loaderService.toggle(true);
            $scope.loginReq = $http.get(ep + 'Login/' + usuario + '/' + password)
                .then(function (res) {
                    $scope.$storage.usuario = res.data.LoginResult[0];
                    progressBar.complete();
                    loaderService.toggle(false);
                    $location.path('/admin');
                }, function (err) {
                    console.log(err);
                    progressBar.complete();
                    loaderService.toggle(false);


                });

        };

    });