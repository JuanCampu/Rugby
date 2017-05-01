// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('ProfileCtrl', function ($scope, $http, $rootScope, $state, $ionicPopup, $ionicLoading) {

        $("#archivoPerfil").change(function () {
            var input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $ionicLoading.show({
                        template: '<p>Actualizando...</p><ion-spinner></ion-spinner>'
                    });
                    var data = {
                        userName: $rootScope.UserName,
                        foto: e.target.result
                    };
                    var urlPost = $rootScope.APIurl + "api/Juez/CambiarFoto/";
                    $http({
                        method: 'POST',
                        url: urlPost,
                        data: JSON.stringify(data),
                        cache: false,
                    }).then(function () {
                        $("#perfilFoto").attr('src', e.target.result);
                        $ionicLoading.hide();
                    });
                }
                reader.readAsDataURL(input.files[0]);
            }
        });
        $scope.editarImagen = function () {
            $("#archivoPerfil").click();
        };

        $scope.changePassword = function () {
            $scope.data = {}
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: '<div class="bar bar-header bar-positive"><div class="h1 title"> Cambio  de contraseña</div></div >',
                template: '<div class="profile-pop-margin"><div class="item item-divider">Password Actual:</div><label class="item item-input"><input id="actualPassword" name="actualPassword" type="password"></label> <div class="item item-divider">Nuevo Password:</div><label class="item item-input"><input id="nuevoPassword" name="nuevoPassword" type="password"></label><div class="item item-divider">Confirmación Password:</div><label class="item item-input"><input id="confirmacionPassword" name="confirmacionPassword" type="password"></label><span style="text-dangerus" id="errorMessage"></span><div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Cambiar</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            e.preventDefault();
                            if ($("#nuevoPassword").val() != $("#confirmacionPassword").val()) {
                                $("#errorMessage").html("Las contraseñas no coinciden");
                                return;
                            }
                            $http.post($rootScope.APIurl + "api/Usuario/CambiarPassword?userName=" + $rootScope.UserName + "&password=" + $("#actualPassword").val() + "&newPassword=" + $("#nuevoPassword").val()).then(function (response) {
                                if (response.data == "409") {
                                    $("#errorMessage").html("Este usuario no existe");
                                    return;
                                }
                                if (response.data == "404") {
                                    $("#errorMessage").html("La contraseña actual está incorrecta");
                                    return;
                                }
                                myPopup.close();
                            });
                        }

                    }
                ]
            });
            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        if ($rootScope.Rol == "Juez") {
            $http.get($rootScope.APIurl + "api/Juez/ObtenerInformacion/" + $rootScope.UserName).then(function (response) {
                $scope.juez = response.data;
                if ($scope.juez.partidos == 0) {
                    $("#ningunPartido").show();
                } else {
                    $("#ultimoPartido").show();
                }
            });
        } else if ($rootScope.Rol == "Admin") {

        } else {
            $state.go('sign');
        }

  });

