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
            password: "",
            email: "",
            numCelular: 0,
            identificacion: 0, 
            fechaDeNacimiento: "",
            barrio: "",
            direccion: "",
            añosDeExperiencia: "",
            rol: "",
            password: "",
            password_verify:"",
        }


        $scope.setRolInformation = function () {
            $scope.data = {}
            if ($scope.user.rol == "Juez") {
                $("#infoJuez").show();
            } else {
                $("#infoJuez").hide();
            }

          
        };

       
            var data = {
                "userName": "sssss asdf",
                "añosDeExperiencia": 2,
                "password": "Le gusta mucho",
                "barrio": "Le gusta mucho",
                "direccion": "Le gusta mucho",
                "fechaDeNacimiento": "02/05/2016",
                "nombres": "JP",
                "apellidos": "cul",
                "rol": 0,
                "identificacion": 12345,
                "numCelular": 3002128732,
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

