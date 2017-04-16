// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

   .controller('RankCtrl', function($scope) {

    $scope.items = [
      {
        logo1: './img/c1.jpg',
        logo2: './img/c2.jpg',
        name1: 'DAL',
        name2: 'CIN',
        score1: 21,
        score2: 0,
        isFinal: false
      },
      {
        logo1: './img/c3.jpg',
        logo2: './img/c6.jpg',
        name1: 'WAS',
        name2: 'ARI',
        score1: 14,
        score2: 3,
        isFinal: false
      },
      {
        logo1: './img/c10.jpg',
        logo2: './img/c11.jpg',
        name1: 'CLE',
        name2: 'NYG',
        score1: 7,
        score2: 8,
        isFinal: false
      },
      {
        logo1: './img/c14.jpg',
        logo2: './img/c2.jpg',
        name1: 'DAL',
        name2: 'CIN',
        score1: 21,
        score2: 0,
        isFinal: true
      },
      {
        logo1: './img/c6.jpg',
        logo2: './img/c11.png',
        name1: 'WAS',
        name2: 'ARI',
        score1: 14,
        score2: 3,
        isFinal: false
      },
      {
        logo1: './img/c2.jpg',
        logo2: './img/c12.jpg',
        name1: 'CLE',
        name2: 'NYG',
        score1: 7,
        score2: 8,
        isFinal: false
      }
    ];

  });

