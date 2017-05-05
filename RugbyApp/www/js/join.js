// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('JoinCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {

        $scope.solicitud = {
            Id: "",
            clubId: "",
            equipoId: "",
            fechaDeNacimiento: "",
            identificacion: 0,
            genero: 0,
            direccion: "",
            eps: "",
            foto: "",
            nombres: "",
            apellidos: ""
        };

        var url = $rootScope.APIurl + "api/Club/ObtenerClubs";
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.clubes = response.data;
        }, function () {
            window.alert("No se pudo realizar la consulta de clubes");
        });
        $scope.obtenerEquipos = function () {
            var urlEquipos = $rootScope.APIurl + "api/Equipo/ObtenerEquipoPorClub/" + $scope.solicitud.clubId;


            $http.get(urlEquipos, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
                $scope.equipos = response.data;

            }, function () {
                window.alert("No se pudo realizar la consulta de clubes");
            });
        }
        $scope.showPopup = function () {
            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            }
         
            $scope.solicitud.clubId = $("#clubId").children(":selected").attr("value");
            $scope.solicitud.equipoId = $("#equipoId").children(":selected").attr("value");
            var urlPost = $rootScope.APIurl + "api/Solicitud/EnviarSolicitud/";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify($scope.solicitud),
                cache: false,
            }).then(function (success) {
                //window.alert("Aceptado");
               
                $scope.solicitud = {
                    nombres: "",
                    apellidos: "",
                    clubId: "",
                    equipoId: "",
                    fechaDeNacimiento: "00:00:0000",
                    identificacion: 0,
                    genero: "",
                    direccion: "",
                    eps: "",
                    foto: ""
                };
                var myPopup = $ionicPopup.show({
                    template: '<input type = "text" ng-model = "data.model">',
                    title: 'Estado del mensaje',
                    template: '!Su solicitud ha sido enviada de manera exitosa',
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


            // Custom popup
          

            
        };

        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        }
    });

