// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('FeedCtrl', function ($scope, $state, $rootScope, $http, $ionicLoading) {
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
        $scope.noticias = [];
        var cantidad = 0;
        var url = $rootScope.APIurl + "api/Noticia/ObtenerNoticias?start=" + cantidad;
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.noticias = response.data;
            $ionicLoading.hide();
        });
        $scope.cargarMas = function() {
            $ionicLoading.show({
                template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
            });
            cantidad += 3;
            var url = $rootScope.APIurl + "api/Noticia/ObtenerNoticias?start=" + cantidad;
            $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    $scope.noticias.push(response.data[i]);
                }
                $ionicLoading.hide();
            });
        }
        $scope.goToAdd = function () {
            $state.go('app.add-news');
        }
        $scope.refresh = function () {
            $ionicLoading.show({
                template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
            });
            $scope.noticias = []
            cantidad = 0;
            var url = $rootScope.APIurl + "api/Noticia/ObtenerNoticias?start=" + cantidad;
            $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
                $scope.noticias = response.data;
                $ionicLoading.hide();
            });
        }
  });

