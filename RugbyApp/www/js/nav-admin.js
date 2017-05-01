// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('NavAdmCtrl', function ($scope, $state, $rootScope) {

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
        logo: './img/c3.jpg'
      },
      {
        logo: './img/c4.png'
      },
      {
        logo: './img/c5.png'
      },
      {
        logo: './img/c6.jpg'
      },
      {
        logo: './img/c7.png'
      },
      {
        logo: './img/c8.png'
      },
      {
        logo: './img/c9.png'
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
        logo: './img/c13.png'
      },
      {
        logo: './img/c14.jpg'
      },
      {
        logo: './img/c15.jpg'
      },
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
        logo: './img/c3.jpg'
      },
      {
        logo: './img/c4.png'
      },
      {
        logo: './img/c5.png'
      },
      {
        logo: './img/c6.jpg'
      },
      {
        logo: './img/c7.png'
      },
      {
        logo: './img/c8.png'
      },
      {
        logo: './img/c9.png'
      },
      {
        logo: './img/c10.jpg'
      },
      {
        logo: './img/c11.jpg'
      }
    ];

    $scope.goFeed = function () {
      $state.go('app.feed')
    }
  });

