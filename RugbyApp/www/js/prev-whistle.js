﻿angular.module('starter')

    .controller('PrevWhistleCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {
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


        $scope.noSeTienenPartidos = function () {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Estado del mensaje',
                template: 'El partido ha sido prograamado de manera exitosa!',
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
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
        var url = $rootScope.APIurl + "api/Juez/ObtenerPartidos/" + $rootScope.UserName;
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.partidos = response.data;
            if ($scope.partidos.length == 0) {
                window.alert("Lo sentimos en este momento no tiene partidos programados para pitar!");
                $state.go('nav');
            }
            $ionicLoading.hide();
        }, function () {
            window.alert("No se pudo realizar la consulta");
            $ionicLoading.hide();
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

