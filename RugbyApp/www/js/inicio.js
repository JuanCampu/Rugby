// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js



angular.module('starter')

  .controller('InicioCtrl', function($scope , $state, $rootScope) {

    //Crear variable global del API
    $rootScope.APIurl = "http://localhost:49656/";

    $scope.goSign = function () {
      $state.go('sign')
    }
    $scope.goGuest = function () {
        $rootScope.Invitado = "Yes";
        if (!(localStorage.clubFavorito)) {
            $state.go('favorite')
        } else {
            $state.go('nav')
        }
        
    }
  });
