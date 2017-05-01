// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('PrevWhistleCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope) {
        $scope.timeValue = "00:00";
        $scope.dateValue = "0000-00-00";
        $scope.date = new Date();
        $scope.hours = $scope.date.getHours();
        $scope.minutes = $scope.date.getMinutes();
        $scope.timeString = "" + (($scope.hours > 12) ? $scope.hours - 12 : $scope.hours);
        $scope.timeString += (($scope.minutes < 10) ? ":0" : ":") + $scope.minutes;
        $scope.timeString += ($scope.hours >= 12) ? " P.M." : " A.M.";
    
        $scope.showPopup = function () {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Estado del mensaje',
                template: 'El partido ha sido programado de manera exitosa!',
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
        
        var url = $rootScope.APIurl + "api/Juez/ObtenerPartidos/" + $rootScope.UserName;
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.partidos = response.data;
        }, function () {
            window.alert("No se pudo realizar la consulta");
        });

        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        }

        // go to Nextv page
        $scope.goNext = function () {
          
            $state.go('app.whistle', { 'partidoId': $("#partidoSelect").children(":selected").attr("value")});
        }
    });

