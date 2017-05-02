// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

  .controller('FavoriteCtrl', function($scope, $state) {

      $scope.items = [
          {
              logo: './img/c1.jpg',
              IdClubSeguido: 'c1be21bf-07fd-4bbb-a3d8-951d1f4a5332'
          },
          {
              logo: './img/c2.jpg',
              IdClubSeguido: '1e899254-f834-43cd-893a-da2580bd8224'
          },
          {
              logo: './img/c3.jpg',
              IdClubSeguido: '0ac0fea2-1ae5-45f6-afb0-1a32ea18f8cf',
          },
          {
              logo: './img/c6.jpg',
              IdClubSeguido: '73ebb854-5b6f-4adc-98a6-217921779a6f'
          },
          {
              logo: './img/c4.jpg',
              IdClubSeguido: '3fce9cf5-c5de-440b-9798-a5e7368f6bf6'
          },
          {
              logo: './img/c5.jpg',
              IdClubSeguido: '97209c86-18ab-40c2-8e48-24078cc1713a'
          },
          {
              logo: './img/c7.jpg',
              IdClubSeguido: 'cc41f8c6-4b2d-4236-9cab-cc04cf3c776d'
          },
          {
              logo: './img/c10.jpg',
              IdClubSeguido: '86633023-1fd2-45c7-a3bc-12f61b7578c1'
          },
          {
              logo: './img/c11.jpg',
              IdClubSeguido: '86f5dfc5-b6d3-483e-8e31-88ec2c8f64a3'
          },
          {
              logo: './img/c12.jpg',
              IdClubSeguido: '79be8601-93e0-4fb2-bcbe-e2156001c8ca'
          },
          {
              logo: './img/c14.jpg',
              IdClubSeguido: '5b252304-2314-43e0-892d-4e54eba67253'
          }
      ];

      $scope.goNav = function (IdClubSeguido) {
          localStorage.clubFavorito = IdClubSeguido;
          $state.go('nav')
      }
      $scope.goBack = function () {
          $state.go('inicio')
      }

  });
