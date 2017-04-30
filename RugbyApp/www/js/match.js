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
            equipoId1: "",
            equipoId2: "",
            juezPlanillaId: "",
            juezCentralId: "",
            juezInGoalId1: "",
            juezInGoalId2: "",
            torneoId: "",
            tiempoProgramado:""
        }

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

