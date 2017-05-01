// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('NavCtrl', function ($scope, $state, $rootScope) {
    // go to Nav page
    $scope.goLogOut = function () {
        $rootScope.UserName = null;
        $rootScope.Rol = null;
        $state.go('inicio');
    };

  });

