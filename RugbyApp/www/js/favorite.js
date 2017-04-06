// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

  .controller('FavoriteCtrl', function($scope, $state) {

    $scope.items = [
      {
        logo: './img/c1.jpg'
      },
      {
        logo: './img/c2.jpg'
      },
      {
        logo: './img/c3.jpg'
      },
      {
        logo: './img/c6.jpg'
      },
      {
        logo: './img/c10.jpg'
      },
      {
        logo: './img/c11.jpg'
      },
      {
        logo: './img/c12.jpg'
      },
      {
        logo: './img/c14.jpg'
      }
    ];

    $scope.goFeed = function () {
      $state.go('app.score')
    }

  });
