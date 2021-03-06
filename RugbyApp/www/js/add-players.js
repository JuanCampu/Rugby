﻿// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('AddPlaCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {

        var url = $rootScope.APIurl + "api/Club/ObtenerClubs";
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.clubes = response.data;
        }, function () {
            window.alert("No se pudo realizar la consulta de clubes");
        });

       

        $scope.obtenerEquipos = function () {
            var urlEquipos = $rootScope.APIurl + "api/Equipo/ObtenerEquipoPorClub/" + $scope.player.clubId;
           
          
            $http.get(urlEquipos, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
                $scope.equipos = response.data;
           
            }, function () {
                window.alert("No se pudo realizar la consulta de clubes");
            });
        }

        $scope.dateValue = "00-00-0000";
      
        $scope.player = {
            nombres: "",
            apellidos: "",
            identificacion: 0,
            numCamiseta: 0,
            equipoId: "",
            genero: 0
        };

        $scope.checkGenero = function (genero) {
            if (genero == 0) {
                if ($('input#womanCheck').is(':checked')) {
                    $('#womanCheck').attr('checked', false);
                }
                $scope.player.genero = 0;
            } else {
                if ($('input#manCheck').is(':checked')) {
                    $('#manCheck').attr('checked', false);
                }
                $scope.player.genero = 1;
            }
        };

        $scope.showPopup = function () {
            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            }
            $ionicLoading.show({
                template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
            });
            var urlPost = $rootScope.APIurl + "api/Usuario/AdicionarJugador";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify($scope.player),
                cache: false,
            }).then(function (success) {
                //window.alert("Aceptado");
                $scope.player = {
                    nombres: "",
                    apellidos: "",
                    identificacion: 0,
                    numCamiseta: 0,
                    equipoId: "",
                    genero: 0
                };
                $ionicLoading.hide();
                $('#womanCheck').attr('checked', false);
                $('#manCheck').attr('checked', false);
                // Custom popup
                var myPopup = $ionicPopup.show({
                    template: '<input type = "text" ng-model = "data.model">',
                    title: 'Agregar Usuario',
                    template: '!El usuario ha sido creado¡',
                    scope: $scope,

                    buttons: [
                        {
                            text: '<b>Cerrar</b>',
                            type: 'button-positive'
                        }
                    ]
                });

                myPopup.then(function (res) {
                    console.log('Tapped!', res);
                });

            }, function (error) {
                window.alert(error);
            });

           
        };

        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        }

        // go to Nextv page
        $scope.goNext = function () {
            $state.go('app.score')
        }
    });

