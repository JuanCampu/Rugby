// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('AddUseCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope) {

        $scope.user = {
            nombres: "",
            apellidos: "",
            email: "",
            identificacion: 0, 
            fechaDeNacimiento: "00-00-0000",
            direccion: "",
            rol: 0,
            password: "",
            password_verify: "",
            userName:"",
        }


        $scope.setRolInformation = function () {
            $scope.data = {}
            if ($scope.user.rol == "0") {
                $("#infoJuez").show();
            } else {
                $("#infoJuez").hide();
            }

          
        };

        $scope.dateValue = "00-00-0000"; 

        $scope.showPopup = function () {
            if (!($scope.signinForm.$valid)) {
                alert("Favor llene todos los campos requeridos");
                return;
            } 
            $scope.data = {}
            var urlPost = $rootScope.APIurl + "api/Usuario/CrearUsuario";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify($scope.user),
                cache: false,
            }).then(function (success) {
                window.alert("Aceptado");
                $scope.user = {
            nombres: "",
            apellidos: "",
            email: "",
            identificacion: 0, 
            fechaDeNacimiento: "00-00-0000",
            direccion: "",
            rol: 0,
            password: "",
            password_verify: "",
            userName:"",
        }
                $("#infoJuez").hide();
            }, function (error) {
                window.alert(error);
            });
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

