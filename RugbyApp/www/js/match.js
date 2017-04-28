// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('MatchCtrl', function ($scope, $state, $ionicPopup) {
        $scope.timeValue = "00:00";

        $scope.dateValue = "00-00-0000";

        $scope.match = {
            torneo: "",
            equipoUno: "",
            equipoDos: "",
            juez1: "",
            juez3: "",
            juez2: "",
            juez4: "",
        }

        $scope.showPopup = function () {
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

