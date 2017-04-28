// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('AddUseCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope) {

            var data = {
                "userName": "Juan loca",
                "password": "Le gusta mucho",
                "nombres": "JP",
                "apellidos": "cul",
                "rol": 1,
                "email": "sasdasd@asdasda.com"
            };
            var urlPost = $rootScope.APIurl + "api/Usuario/CrearUsuario";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify(data),
                cache: false,
            }).then(function (success) {
                window.alert("Aceptado");
            }, function (error) {
                window.alert(error);
            });
     

        $scope.dateValue = "00-00-0000";
      


        $scope.showPopup = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Agregar Usuario',
                template: '!El usuario ha sido creado¡',
                scope: $scope,

                buttons: [
                    {
                        text: '<b>Cerrar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        }

        // go to Nextv page
        $scope.goNext = function () {
            $state.go('app.score')
        }
    });

