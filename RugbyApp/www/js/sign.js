// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('SignCtrl', function ($scope, $state, $http, $rootScope) {

    $scope.items = [
      {
        avatar: './img/a1.jpg',
        like: '1k',
        comment: 376,
        active: true,
        name: 'Stove'
      },
      {
        avatar: './img/a2.jpg',
        img: './img/d1.jpg',
        like: '284',
        comment: 124,
        active: false,
        name: 'Thor'
      },
      {
        avatar: './img/a3.jpg',
        img: './img/d2.jpg',
        like: '8k',
        comment: 422,
        active: false,
        name: 'Ninja'
      },
      {
        avatar: './img/a4.jpg',
        like: '532',
        comment: 142,
        active: true,
        name: 'Kid'
      },
      {
        avatar: './img/a5.png',
        img: './img/d3.jpg',
        like: '190k',
        comment: 5532,
        active: true,
        name: 'Zzz'
      },
      {
        avatar: './img/a6.jpg',
        like: '12k',
        comment: 376,
        active: false,
        name: 'David Bone'
      }
    ]
    $scope.goNav = function () {
        var usuario = $("#usuario").val();
        var password = $("#password").val();
        var url = $rootScope.APIurl +"api/Usuario/Login?password=" + password + "&userName=" + usuario;
        $http.get(url).then(function (response) {
            if (response.data["httpStatus"] == "OK") {
                $rootScope.UserName = response.data["userName"];
                $rootScope.Rol = response.data["rol"];
                $rootScope.Invitado = null;
                $rootScope.stateNav("s");
            } else {
                window.alert("No se logeo");
            }
        });
        
    }
  });
