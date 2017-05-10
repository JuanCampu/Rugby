// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('NavCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {
    $scope.goLogOut = function () {
        $rootScope.UserName = null;
        $rootScope.Rol = null;
        $state.go('inicio');
    };
    $ionicLoading.show({
        template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
    });
    var url = $rootScope.APIurl + "api/Club/ObtenerInformacionClub?clubId=" + localStorage.clubFavorito;
    $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
        $scope.logoClub = response.data["logo"];
        $ionicLoading.hide();

    }, function () {
        $ionicLoading.hide();
        window.alert("No se pudo realizar la consulta");
    });

    var url = $rootScope.APIurl + "api/Partido/ObtenerUltimoPartidoByClub?clubId=" + localStorage.clubFavorito;
    $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
        if (response.data != null) {
            if (!(localStorage.alertPartido)) {
                localStorage.alertPartido = response.data["Id"];
                $scope.showPopup(response.data);
   
               
            } else {
                if (localStorage.alertPartido != response.data["Id"]) {
                    localStorage.alertPartido = response.data["Id"];
                    $scope.showPopup(response.data);
                }
            }

        }
        
    }, function () {
  
        window.alert("No se pudo realizar la consulta");
    });

    $scope.showPopup = function (partido) {
        var equipos = partido["nombre"].split('VS');
        var myPopup = $ionicPopup.show({
            template: '<input type = "text" ng-model = "data.model">',
            title: '!Resultado del último partido¡',
            template: '<div class="header-score" horizontal layout> <div flex class="club-score" horizontal layout center> <div class="bold" flex>' + equipos[0] + '</div> <div class="bold padding"> ' + partido["marcadorEquipo1"] + '</div> </div> <div flex class="club-score" horizontal layout center> <div class="bold padding">' + partido["marcadorEquipo2"] + '</div> <div class="bold" flex horizontal layout end-justified>' + equipos[1] + '</div> </div></div><div class=" text-gray" > <div class="padding text-center"> ' + partido["tiempoProgramado"] +' </div></div>',
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

  });

