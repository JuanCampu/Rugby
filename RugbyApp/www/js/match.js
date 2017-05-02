// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('MatchCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {


        $scope.match = {
            NombrePartido: "",
            equipoId1: "",
            equipoId2: "",
            juezPlanillaId: "",
            juezCentralId: "",
            juezInGoalId1: "",
            juezInGoalId2: "",
            torneoId: "",
            tiempoProgramado: new Date(),
            tiempoTotal: new Date(),
            IdPartido: "",
            marcadorEquipo1: -1,
            marcadorEquipo2: -1,
            timeValue: "00:00",
            dateValue: "00-00-0000"
        }


        $scope.isSelectedTeam = function (idTeam, numteam) {

            if (numteam == 1 && idTeam == $scope.match.equipoId1) {
                return true;
            } else if (numteam == 2 && idTeam == $scope.match.equipoId2) {
                return true;
            }
            return false;
        };


        $scope.isSelectedJuez = function (idJuez, numJuez) {
            if (numJuez == 1 && idJuez == $scope.match.juezPlanillaId) {
                return true;
            } else if (numJuez == 2 && idJuez == $scope.match.juezCentralId) {
                return true;
            } else if (numJuez == 3 && idJuez == $scope.match.juezInGoalId1) {
                return true;
            } else if (numJuez == 4 && idJuez == $scope.match.juezInGoalId2) {
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

        var url = $rootScope.APIurl + "api/Equipo/ObtenerEquipos";

        $http({
            method: 'GET',
            url: url,
            cache: false,
        }).then(function (success) {
            $scope.equipos = success.data;
        }, function (error) {
            window.alert(error);
        });
     

        $scope.showPopup = function () {
            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            } else if (($("#horaPartido").text()) == "00:00" || ($("#fechaPartido").text()) == "00-00-0000") {
                alert("Revise los campos hora y fecha");
                return;
            }
            $ionicLoading.show({
                template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
            });
            $scope.match.NombrePartido = ($("#equipo1").children(":selected").text() + " VS " + $("#equipo2").children(":selected").text());
            var urlPost = $rootScope.APIurl + "api/Partido/AdicionarPartido/";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify($scope.match),
                cache: false,
                crossDomain: true,
            }).then(function (success) {
                //window.alert("Aceptado");
                $scope.match = {
                    NombrePartido: "",
                    equipoId1: "",
                    equipoId2: "",
                    juezPlanillaId: "",
                    juezCentralId: "",
                    juezInGoalId1: "",
                    juezInGoalId2: "",
                    torneoId: "",
                    tiempoProgramado: new Date(),
                    tiempoTotal: new Date(),
                    IdPartido: "",
                    marcadorEquipo1: -1,
                    marcadorEquipo2: -1,
                    timeValue: "00:00",
                    dateValue: "00-00-0000"
                }
                $ionicLoading.hide();
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
            }, function (error) {
                window.alert(error);
            });
            // Custom popup
           
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

