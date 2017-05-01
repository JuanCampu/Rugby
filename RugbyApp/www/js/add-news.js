// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')
   
    .controller('AddNewCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {
        function readURL(input, idElement) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#" + idElement).attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#archivoImagen").change(function () {
            readURL(this, "imagenSeleccionada");
        });

        $("#imagenSeleccionada").click(function () {
            $("#archivoImagen").click();
        });


        $scope.timeValue = "00:00";


        $scope.dateValue = "0000-00-00";
        $scope.date = new Date();
        $scope.hours = $scope.date.getHours();
        $scope.minutes = $scope.date.getMinutes();
        $scope.timeString = "" + (($scope.hours > 12) ? $scope.hours - 12 : $scope.hours);
        $scope.timeString += (($scope.minutes < 10) ? ":0" : ":") + $scope.minutes;
        $scope.timeString += ($scope.hours >= 12) ? " P.M." : " A.M.";

       
        $scope.noticia = {
            titulo: "",
            copete: "",
            foto: "",
            descripcion: "",
        }

        $scope.showPopup = function () {
            $ionicLoading.show({
                template: '<p>Creando...</p><ion-spinner></ion-spinner>'
            });
            var urlPost = $rootScope.APIurl + "api/Noticia/CrearNoticia/";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify($scope.noticia),
                cache: false,
            }).then(function (success) {
                $scope.noticia = {
                    titulo: "",
                    copete: "",
                    foto: "",
                    descripcion: "",
                }
                $("#imagenSeleccionada").attr('ng-src', './img/photo.png');
                $("#imagenSeleccionada").attr('src', './img/photo.png');
                $ionicLoading.hide();
                $ionicPopup.show({
                    template: '<input type = "text" ng-model = "data.model">',
                    title: 'Creador de Noticias',
                    template: 'Se ha creado la noticia',
                    scope: $scope,

                    buttons: [
                        {
                            text: '<b>Cerrar</b>',
                            type: 'button-positive'
                        }
                    ]
                });
            }, function (error) {
                $ionicPopup.show({
                    template: '<input type = "text" ng-model = "data.model">',
                    title: 'Estado del mensaje',
                    template: 'Intente más tarde',
                    scope: $scope,

                    buttons: [
                        {
                            text: '<b>Cerrar</b>',
                            type: 'button-positive'
                        }
                    ]
                });
                $ionicLoading.hide();
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

