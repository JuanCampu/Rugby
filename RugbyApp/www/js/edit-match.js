// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('EdiMatCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {


        $scope.showme = function () {
            var s = "";
            for (var jugador = 0; jugador < $scope.team1.length; jugador++) {
                for (var jugadas = 0; jugadas < $scope.team1[i]["jugadas"].length; jugadas++) {
                    //s = s + i + ": " + $scope.team1[i]["jugadas"][jugadas] + "\n";
                }
            }
            alert(s);
        };


        /*******************************************************************
        ********************************************************************

        Obtener Informacion Partido - Traer la información del partido seleccionado.

        ********************************************************************
        ********************************************************************/

        var editMatch = [[0, "","IN"], [0, "","OUT"], [0, "","TRY"], [0, "","C"], [0, "","P"], [0, "","GC"]];
        var editAmonestaciones = [[0, "","TR"], [0, "","TA"], [0, "","TT"]];

        $scope.team1 = [];
        $scope.team2 = [];
        $scope.nombreEquipo1 = "";
        $scope.nombreEquipo2 = "";

        var url = $rootScope.APIurl + "api/Partido/ObtenerInformacionPartido/?partidoId=" + $state.params.partidoId+"&actual=1";
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {

            var jugadasJugador = [];
            var amonestacionsJugador = [];
            var tipoJugada = 0;
            var tipoJugadaAmo = 0;

            $scope.team1 = response.data["jugadoresEquipo1"];
            $scope.team2 = response.data["jugadoresEquipo2"];
            $scope.nombreEquipo1 = response.data["nombreEquipo1"];
            $scope.nombreEquipo2 = response.data["nombreEquipo2"];
          
            setJugadasPorTeam($scope.team1, 1);
            setJugadasPorTeam($scope.team2, 2);
            $ionicLoading.hide();
           
        }, function () {
            window.alert("No se pudo realizar la consulta");
            $ionicLoading.hide();
        });

        function setJugadasPorTeam(team,teamId) {
            for (var keyJugador in team) {
                jugadasJugador = team[keyJugador]["jugadas"];
                amonestacionesJugador = team[keyJugador]["amonestaciones"];
                for (var keyJugada in jugadasJugador) {
                    tipoJugada = jugadasJugador[keyJugada]["tipoJugada"];
                    for (var i = 0; i < 6; i++) {
                        if (tipoJugada == i) {
                            editMatch[i][0] += jugadasJugador[keyJugada]["cantidad"];
                            editMatch[i][1] += jugadasJugador[keyJugada]["jugadaId"];
                        };
                    };
                };
                for (var keyAmonestacion in amonestacionesJugador) {
                    tipoJugadaA = amonestacionesJugador[keyAmonestacion]["tipoJugada"];
                    
                    for (var i = 0; i < 3; i++) {
                        if (tipoJugadaA == i) {
                            editAmonestaciones[i][0] = amonestacionesJugador[keyAmonestacion]["cantidad"];
                            editAmonestaciones[i][1] =  amonestacionesJugador[keyAmonestacion]["amonestacionId"];
                        };
                    };
                };
                if (teamId == 1) {
                    $scope.team1[keyJugador]["jugadas"] = editMatch;
                    $scope.team1[keyJugador]["amonestaciones"] = editAmonestaciones;
                } else {
                    $scope.team2[keyJugador]["jugadas"] = editMatch;
                    $scope.team2[keyJugador]["amonestaciones"] = editAmonestaciones;
                } 
                editMatch = [[0, "", "IN"], [0, "", "OUT"], [0, "", "TRY"], [0, "", "C"], [0, "", "P"], [0, "", "GC"]];
                editAmonestaciones = [[0, "", "TR"], [0, "", "TA"], [0, "", "TT"]];
            }; 
     
        }
        /*******************************************************************
        ********************************************************************

        End - obtener partido seccción .

        ********************************************************************
        ********************************************************************/
        
        $scope.setNumber = function (e) {
            $scope.numberPickerObject.inputValue = e.currentTarget.value;
            $("#myselector").trigger("click");
        };
        /*******************************************************************
        ********************************************************************

        Accordion Section.

        ********************************************************************
        ********************************************************************/
        $scope.toggleGroup = function (group, type) {
          
            if (type == 1) {
                if ($scope.isGroupShown(group,type)) {
                  
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = group;
                } 
            } else {
                if ($scope.isGroupShown(group, type)) {
                    $scope.shownGroup2 = null;
                } else {
                    $scope.shownGroup2 = group;
                } 
            }
           
        };
        $scope.isGroupShown = function (group, type) {
            if (type == 1) 
                return $scope.shownGroup === group;
            else
                return $scope.shownGroup2 === group;
        };

        /*******************************************************************
        ********************************************************************

        End Acorrdion Section.

        ********************************************************************
        ********************************************************************/


        /*******************************************************************
        ********************************************************************

        Date Section. // Obtiene la fecha - hora - minutos de ese momento

        ********************************************************************
        ********************************************************************/
       
        $scope.getDateValues = function () {
            $scope.date = new Date();
            $scope.hours = $scope.date.getHours();
            $scope.minutes = $scope.date.getMinutes();
            $scope.timeString = "" + (($scope.hours > 12) ? $scope.hours - 12 : $scope.hours);
            $scope.timeString += (($scope.minutes < 10) ? ":0" : ":") + $scope.minutes;
            $scope.timeString += ($scope.hours >= 12) ? " P.M." : " A.M.";
        };

        $scope.getDateValues();


        /*******************************************************************
        ********************************************************************

        Number Picker -PopUp para cambair los valores de los eventos

        ********************************************************************
        ********************************************************************/

        function timePickerCallback(val) {
            if (typeof (val) === 'undefined') {
                console.log('Time not selected');
            } else {


            }
        }




        $scope.numberPickerObject = {
            inputValue: 0, //Optional 
            minValue: 0,
            maxValue: 10,
            precision: 3,  //Optional 
            format: "WHOLE",  //Optional - "WHOLE" or "DECIMAL" 
            unit: "PT",  //Optional - "m", "kg", "℃" or whatever you want 
            titleLabel: 'Seleccione los puntos anotados',  //Optional 
            setLabel: 'Guardar',  //Optional 
            closeLabel: 'Cerrar',  //Optional 
            setButtonType: 'button-positive',  //Optional 
            closeButtonType: 'button-stable',  //Optional 
            callback: function (val) {    //Mandatory 
                $scope.itemJugada = val;
                timePickerCallback(val);
            }
        };

        /*******************************************************************
        ********************************************************************

     
|
        ********************************************************************
        ********************************************************************/
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
        function setStringAmonestaciones(jugadores) {
            var amonestacionesStringFormat = "";
            var amonestacionesJugador = [];
            var jugadorId = "";
            for (var indexJugador in jugadores) {
                amonestacionesJugador = jugadores[indexJugador]["amonestaciones"];
                jugadorId = jugadores[indexJugador]["jugadorId"];
                for (var indexAmonestacion in amonestacionesJugador) {
                    var newGuid = guid();
                    if (amonestacionesJugador[indexAmonestacion][0] != 0 && amonestacionesJugador[indexAmonestacion][1] == "") {
                        amonestacionesStringFormat += amonestacionesJugador[indexAmonestacion][0] + ";" + newGuid + ";" + jugadorId + ";" + amonestacionesJugador[indexAmonestacion][2] + "|";
                    } else if(amonestacionesJugador[indexAmonestacion][1] != ""){
                        amonestacionesStringFormat += amonestacionesJugador[indexAmonestacion][0] + ";" + amonestacionesJugador[indexAmonestacion][1] + "|";
                    }
                }
            }
            return amonestacionesStringFormat;

        }
        function setStringJugadas(jugadores) {
            var jugadasStringFormat = "";
            var jugadasJugador = [];
            var jugadorId = "";
            for (var indexJugador in jugadores) {
                jugadasJugador = jugadores[indexJugador]["jugadas"];
                jugadorId = jugadores[indexJugador]["jugadorId"];
                for (var indexJugada in jugadasJugador) {
                    var newGuid = guid();
                    if (jugadasJugador[indexJugada][0] != 0 && jugadasJugador[indexJugada][1] == "") {
                        jugadasStringFormat += jugadasJugador[indexJugada][0] + ";" + newGuid + ";" + jugadorId + ";" + jugadasJugador[indexJugada][2]+ "|";
                    } else if (jugadasJugador[indexJugada][1] != "") {
                        jugadasStringFormat += jugadasJugador[indexJugada][0] + ";" + jugadasJugador[indexJugada][1] + "|";
                    }
                }
            }
            return jugadasStringFormat;

        }

     
        $scope.Finalizar = function () {
            var stringAmonestaciones1 = "";
            var stringAmonestaciones2 = "";
            var stringJugadas1 = "";
            var stringJugadas2 = "";
            $ionicLoading.show({
                template: '<p>Actulizando...</p><ion-spinner></ion-spinner>'
            });
            stringJugadas1 = setStringJugadas($scope.team1);
            stringJugadas2 = setStringJugadas($scope.team2);
            stringAmonestaciones1 =  setStringAmonestaciones($scope.team1);
            stringAmonestaciones2 = setStringAmonestaciones($scope.team2);
           
           ;
            var data = {
                "jugadas1": stringJugadas1,
                "amonestaciones1": stringAmonestaciones1,
                "jugadas2": stringJugadas2 ,
                "amonestaciones2": stringAmonestaciones2,
                "partidoId": $state.params.partidoId
            };
            var urlPost = $rootScope.APIurl + "api/Partido/EditarPartido";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify(data),
                cache: false,
            }).then(function (success) {
                $ionicLoading.hide();
                var myPopup = $ionicPopup.show({
                    template: '<input type = "text" ng-model = "data.model">',
                    title: 'Fin Edición',
                    template: 'Se ha finalizado la edición del partido',
                    scope: $scope,
                    buttons: [
                        {
                            text: '<b>Cerrar</b>',
                            type: 'button-positive',
                            onTap: function (e) {

                                e.preventDefault();
                                myPopup.close();
                                $rootScope.stateNav();
                            }
                        }
                    ]
                });

            }, function (error) {
                window.alert(error);
            });
        };
    });





      
