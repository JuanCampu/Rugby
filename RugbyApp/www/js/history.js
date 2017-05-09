﻿// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('HistoryCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope,$ionicLoading) {
        $scope.timeValue = "00:00";
        $scope.dateValue = "0000-00-00";
        $scope.date = new Date();
        $scope.hours = $scope.date.getHours();
        $scope.minutes = $scope.date.getMinutes();
        $scope.timeString = "" + (($scope.hours > 12) ? $scope.hours - 12 : $scope.hours);
        $scope.timeString += (($scope.minutes < 10) ? ":0" : ":") + $scope.minutes;
        $scope.timeString += ($scope.hours >= 12) ? " P.M." : " A.M.";

        $scope.club = {
            Id: "",
            nombres: "",
            logo: "",
            historia: "",
            slogan: ""
        }
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
        var url = $rootScope.APIurl + "api/Club/ObtenerInformacionClub?clubId=" + localStorage.clubFavorito;
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.club = response.data;
            $ionicLoading.hide();
        }, function () {
            $ionicLoading.hide();
            window.alert("No se pudo realizar la consulta");
        });

   

        $scope.showPopup = function () {
            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            } 
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
        
     
        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        }

        // go to Nextv page
        $scope.goNext = function () {
            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            } 
            $scope.match = {

                torneoId: "",
                IdPartido: ""
            }
            $state.go('app.edit-match', { 'partidoId': $("#partidoSelect").children(":selected").attr("value")});
        }



     
     


    });

