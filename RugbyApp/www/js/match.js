// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('MatchCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope) {
        $scope.timeValue = "00:00";

        $scope.dateValue = "00-00-0000";

        $scope.match = {
            equipoId1: "0",
            equipoId2: "1",
            juezPlanillaId: "",
            juezCentralId: "",
            juezInGoalId1: "",
            juezInGoalId2: "",
            torneoId: "",
            tiempoProgramado:""
        }


        $scope.isSelectedTeam1 = function (idTeam2) {
            if ($scope.match.equipoId1 == idTeam2) {
                return true;
            }

            return false;
        };

        $scope.isSelectedTeam2 = function (idTeam1) {
            if ($scope.match.equipoId2 == idTeam1) {
                return true;
            }

            return false;
        };

        var url = $rootScope.APIurl + "api/Torneo/ObtenerTorneos/";
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.torneos = response.data;
        }, function () {
            window.alert("No se pudo realizar la consulta");
        });

        var urlJueces = $rootScope.APIurl + "api/Juez/ObtenerAllJueces/";
        $http.get(urlJueces, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.jueces = response.data;
        }, function () {
            window.alert("No se pudo realizar la consulta");
        });
        $scope.obtenerEquiposPorIdTorneo = function () {
            var url = $rootScope.APIurl + "api/Equipo/ObtenerEquipoPorTorneo?torneoId=" + $scope.match.torneoId;

            $http({
                method: 'GET',
                url: url,
                cache: false,
            }).then(function (success) {
                $scope.equipos = success.data;
                window.alert("Aceptado");
            }, function (error) {
                window.alert(error);
            });

        };

        $scope.showPopup = function () {

            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            } else if (($("#horaPartido").text()) == "00:00" || ($("#fechaPartido").text()) == "00-00-0000") {  
                alert("Revise los campos hora y fecha");
                return;
            } 
            $scope.data = {}
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Estado del mensaje',
                template: '!El partido ha sido prograamado de manera exitosa',
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
        };



        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        }

        // go to Nextv page
        $scope.goNext = function () {
            $state.go('app.match-second')
        }
    });

