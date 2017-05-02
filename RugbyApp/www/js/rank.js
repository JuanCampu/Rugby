// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('RankCtrl', function ($scope, $state, $http, $rootScope, $ionicLoading) {
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
        var url = $rootScope.APIurl + "api/Torneo/ObtenerLista/" + $state.params.torneoId;
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.infoClubes = response.data;
            $ionicLoading.hide();
        }, function () {
            window.alert("No se pudo realizar la consulta");
        });
  });

