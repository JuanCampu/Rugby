// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('ScoreCtrl', function ($scope, $rootScope, $http, $ionicLoading, $state) {
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
      var url = $rootScope.APIurl + "api/Partido/ObtenerPartidosMiClubFavorito?clubId=" + localStorage.clubFavorito;
      $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
          $scope.partidos = response.data;
          if ($scope.partidos == 0) {
              alert("Lo sentimos, no se encuentran partidos para este club!");
              $ionicLoading.hide();
              //$state.go('nav');
          }
          $ionicLoading.hide();
      }, function () {
          window.alert("No se pudo realizar la consulta de clubes");
      });


  });

