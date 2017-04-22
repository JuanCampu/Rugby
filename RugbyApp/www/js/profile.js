// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('ProfileCtrl', function ($scope, $http, $rootScope, $state, $ionicPopup) {

        $scope.changePassword = function () {
            $scope.data = {}

            // Custom popup
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: '<div class="bar bar-header bar-positive"><div class="h1 title"> Cambio  de contraseña</div></div >',
                template: '<div class="profile-pop-margin"><div class="item item-divider">Password Actual:</div><label class="item item-input"><input type="password"></label> <div class="item item-divider">Nuevo Password:</div><label class="item item-input"><input type="password"></label><div class="item item-divider">Confirmación Password:</div><label class="item item-input"><input type="password"></label><div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Cambiar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        if ($rootScope.Rol == "Juez") {
            $http.get($rootScope.APIurl + "api/Juez/ObtenerInformacion/" + $rootScope.UserName).then(function (response) {
                console.log(response.data["añosDeExperiencia"]);
                console.log(response);
                $scope.nombres = response.data["nombres"] + " " + response.data["apellidos"];
                $scope.edad = response.data["edad"];
                $scope.direccion = response.data["direccion"];
                $scope.experiencia = response.data["experiencia"];
                $scope.partidos = response.data["partidosPitados"];
                $scope.email = response.data["email"];
                if ($scope.partidos == 0) {
                    $("#ningunPartido").show();
                } else {
                    $("#ultimoPartido").show();
                }
            });
        } else if ($rootScope.Rol == "Admin") {

        } else {
            $state.go('sign');
        }
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



  });

