// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('WhistleCtrl', function ($scope, $state, $ionicPopup, $http, $rootScope, $ionicLoading) {
                /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */


         /*******************************************************************
        ********************************************************************

       Check Start - Valida que el partido haya iniciado

        ********************************************************************
        ********************************************************************/


        function checkMatchStart() {
            if ($scope.timerClass === "btn btn-primary") {
                alert("Inicie el partido para poder ejecutar esta acción.");
                return true;;
            } else {
                return false;
            }
        }

        /*******************************************************************
        ********************************************************************

        End Check Start - Valida que el partido haya iniciado

        ********************************************************************
        ********************************************************************/

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

        End Date Section.

        ********************************************************************
        ********************************************************************/

        /*******************************************************************
        ********************************************************************

        Active Item Section. // Activa la acción según el evento que se seleccione (Try - GC - ETC) Activa el color azul en el item.

        ********************************************************************
        ********************************************************************/

        $scope.menuItems = ['In (entrada)', 'Out (Salida)', 'El T (Try)', 'C (Conversion)', 'P (penal)', 'GC (gol de campo)'];
        $scope.activeMenu1 = $scope.menuItems;
        $scope.activeMenu2 = $scope.menuItems;

        $scope.setActive2 = function (menuItem, team) {
            if ((checkMatchStart()) == true)
                return;
            $scope.activeMenu2 = menuItem;
            $scope.checkMenuItems(menuItem, team);

        }
        $scope.setActive1 = function (menuItem, team) {
            if ((checkMatchStart()) == true)
                return;
            $scope.activeMenu1 = menuItem;
            $scope.checkMenuItems(menuItem, team);

        }

        $scope.checkMenuItems = function (menuItem,team) {
            switch (menuItem) {
                case $scope.menuItems[0]:
                    $scope.showEvent(team,0);
                    break;
                case $scope.menuItems[1]:
                    $scope.showEvent(team,1);
                    break;
                case $scope.menuItems[2]:
                    $scope.showEvent(team, 2);
                    break;
                case $scope.menuItems[3]:
                    $scope.showEvent(team, 3);
                    break;
                case $scope.menuItems[4]:
                    $scope.showEvent(team, 4);
                    break;
                case $scope.menuItems[5]:
                    $scope.showEvent(team, 5);
                    break;
            }
        };

        /*******************************************************************
        ********************************************************************

        End Active Item Section.

        ********************************************************************
        ********************************************************************/


        /*******************************************************************
        ********************************************************************

        Fault -  Event

        ********************************************************************
        ********************************************************************/

        var value = 0;
        var selectedPlayer = 0;
        var setNewEvent = [];
        var currentFaults = [];
        var faultDescpList = [];
        var faultDescpList1 = [];
        var faultDescpList2 = [];
        var tp = "";
        var tituloPop = "";
        var description = "";

        $scope.showEventTJ = function (team, tipo) {

            if ((checkMatchStart()) == true)
                return;

            $scope.data = {}
           
            switch (tipo) {
                case 1:
                    tp = "TR";
                    var tituloPop = "TR (Tarjeta Roja)";
                    break;
                case 2:
                    tp = "TA";
                    var tituloPop = "TA (Tarjeta Amarilla)";
                    break;
                case 3:
                    tp = "TT";
                    var tituloPop = "TT (Tarjeta Tecnica)";
                    break;
                case 6:
                    day = "Saturday";
            }
            if (team == 1) {
                currentFaults = $scope.amonestacionesClub1;
                htmlJugadores = htmlJugadores1;
            } else {
                currentFaults = $scope.amonestacionesClub2;
                htmlJugadores = htmlJugadores2; 
            }
            // Custom popup
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: '' + tituloPop+'',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control" id="jugadorSelect">' + htmlJugadores + '</select></div>Observaciones:  <textarea class="form-control" id="description" rows="3"></textarea>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive',
                        onTap: function (e) {

                            e.preventDefault();
                            selectedPlayer = $("#jugadorSelect").children(":selected").attr("value");
                            description = $('textarea#description').val();
                            description = description + "}";
                           
                            currentFaults[selectedPlayer][tp] += 1;
                            if (team == 1) {
                                faultDescpList1[selectedPlayer][tp] += description;
                                localStorage.amonestacionesClub1 = setLocalStoraCurrentFaults(currentFaults, $scope.team1, faultDescpList1 );
                                $scope.amonestacionesClub1 = currentFaults;
                               
                                
                            } else {
                                faultDescpList2[selectedPlayer][tp] += description;
                                localStorage.amonestacionesClub2 = setLocalStoraCurrentFaults(currentFaults, $scope.team2, faultDescpList2);
                                $scope.amonestacionesClub2 = currentFaults;
                                
                            }
                            myPopup.close();
                        }
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };
        
        
        function setFaultList( team , idTeam) {
            for (var key in team) {
                faultDescpList[key] = {
                    "TR": "",
                    "TA": "",
                    "TT": "",
                }
            };
            if (idTeam == 1)
                faultDescpList1 = faultDescpList;
            else
                faultDescpList2 = faultDescpList;

            faultDescpList = [];
            console.log(faultDescpList1);
        }


        


        /*******************************************************************
        ********************************************************************

        End Fault -  Event

        ********************************************************************
        ********************************************************************/

         /*******************************************************************
        ********************************************************************

        Set localStorae - Array  // Metodos para la creación de arrays locales (Lista de faltas actuales - eventos actuales - etc)

        ********************************************************************
        ********************************************************************/

        function setLocalStoraCurrentFaults(arrayTeam, team, faultList) {

            var arrayLocalFault = [];
            for (var key in arrayTeam) {
                arrayLocalFault += arrayTeam[key]["NC"] + "|" + team[key]["jugadorId"] + "|" + "TR|" + arrayTeam[key]["TR"] + "|" + faultList[key]["TR"] + ";" + arrayTeam[key]["NC"] + "|" + team[key]["jugadorId"] + "|" + "TA|" + arrayTeam[key]["TA"] + "|" + faultList[key]["TA"] + ";" + arrayTeam[key]["NC"] + "|" + team[key]["jugadorId"] + "|" + "TT|" + arrayTeam[key]["TT"] + "|" + faultList[key]["TT"] + ";";
            }
            return arrayLocalFault;
        }


        function setLocalStoraEventosClubByTeam(arrayTeam) {
            var arrayLocalClub = [];
            for (var key in arrayTeam) {
                arrayLocalClub += arrayTeam[key]["nombres"] + " " + arrayTeam[key]["apellidos"] + "|" + arrayTeam[key]["jugadorId"] + "|IN|0;";
                arrayLocalClub += arrayTeam[key]["nombres"] + " " + arrayTeam[key]["apellidos"] + "|" + arrayTeam[key]["jugadorId"] + "|OUT|0;";
                arrayLocalClub += arrayTeam[key]["nombres"] + " " + arrayTeam[key]["apellidos"] + "|" + arrayTeam[key]["jugadorId"] + "|TRY|0;";
                arrayLocalClub += arrayTeam[key]["nombres"] + " " + arrayTeam[key]["apellidos"] + "|" + arrayTeam[key]["jugadorId"] + "|GC|0;";
                arrayLocalClub += arrayTeam[key]["nombres"] + " " + arrayTeam[key]["apellidos"] + "|" + arrayTeam[key]["jugadorId"] + "|C|0;";
                arrayLocalClub += arrayTeam[key]["nombres"] + " " + arrayTeam[key]["apellidos"] + "|" + arrayTeam[key]["jugadorId"] + "|P|0;";
            }
            return arrayLocalClub;

        }
        function setLocalStoraEventosClub(arrayTeam) {
            var arrayLocalClub = [];
            for (var key in arrayTeam) {
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|IN|" + arrayTeam[key][0]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|OUT|" + arrayTeam[key][1]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|TRY|" + arrayTeam[key][2]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|GC|" + arrayTeam[key][5]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|C|" + arrayTeam[key][3]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|P|" + arrayTeam[key][4]["value"] + ";";
            };
            return arrayLocalClub;
        }
        function setLocalStoraAmoClub(arrayTeam) {
            var arrayLocalClub = [];
            for (var key in arrayTeam) {
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|TA|" + arrayTeam[key][0]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|TR|" + arrayTeam[key][1]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|TT|" + arrayTeam[key][2]["value"] + ";";
                arrayLocalClub += arrayTeam[key][0]["nombreCompleto"] + "|" + arrayTeam[key][0]["jugadorId"] + "|GC|" + arrayTeam[key][5]["value"] + ";";
            };
            return arrayLocalClub;
        }

         /*******************************************************************
        ********************************************************************

        End Set localStorae - Array  

        ********************************************************************
        ********************************************************************/

         /*******************************************************************
        ********************************************************************

        Function Show Event // Trae toda la inforamción que se muestra en el popup al realizar un evento de juego.

        ********************************************************************
        ********************************************************************/
        var currentTeam = [];
        var selectedPlayer = 0;
        var setNewEvent = [];
        var tituloPop = "";
        var textoPop = "";
        var value = 0;
        var tTry = 5;
        var goalC = 3;
        var conversion = 2;
        var penal = 3;
        var generalScore = 0;

        $scope.scoreTeam1 = 0;
        $scope.scoreTeam2 = 0;


        $scope.showEvent = function (team, EV) {

            $scope.data = {}
            
            switch (EV) {
                case  0:
                    var tituloPop = "IN (Entrada)";
                    var textoPop = "entra";
                    generalScore = 0;
                    break;
                case 1:
                    var tituloPop = "OUT (Salida)";
                    var textoPop = "sale";
                    generalScore = 0;
                    break;
                case  2:
                    var tituloPop = "(Try)";
                    var textoPop = "realizo el try";
                    generalScore = tTry;
                    break;
                case  3:
                    var tituloPop = "C (Conversion)";
                    var textoPop = "realizo la conversion";
                    generalScore = conversion ;
                    break;
                case  4:
                    var tituloPop = "P (Penal)";
                    var textoPop = "realizo el penal";
                    generalScore = penal;
                    break;
                case  5:
                    var tituloPop = "GC (Gol de Campo)";
                    var textoPop = "realizo el gol de campo";
                    generalScore = goalC;
                    break;
                case 6:
                    day = "Saturday";
            }
            if (team == 1) {
                currentTeam = $scope.arrayTest;
                htmlJugadores = htmlJugadores1;
            } else {
                currentTeam = $scope.arrayTest2 ;
                htmlJugadores = htmlJugadores2;
            }
    
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: '' + tituloPop+'',
                template: 'Seleccione el jugador que ' + textoPop+':  <div class="form-group "> </div><div class="form-group "><select class="form-control" id="jugadorSelect">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive',
                        onTap: function (e) {

                            e.preventDefault();
                            selectedPlayer = $("#jugadorSelect").children(":selected").attr("value");
                            value = currentTeam[selectedPlayer][EV]["value"];
                            value = parseInt(value)  + 1;
                            currentTeam[selectedPlayer][EV]["value"] = String(value);
                           
                            if (team == 1) {
                                localStorage.eventosClub1 = setLocalStoraEventosClub(currentTeam);
                                $scope.scoreTeam1 += generalScore;
                            }
                               
                            else {
                                localStorage.eventosClub2 = setLocalStoraEventosClub(currentTeam);
                                $scope.scoreTeam2 += generalScore;
                            }
                            myPopup.close();
                        }
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };
       


        /*******************************************************************
        ********************************************************************

        End Function Show Event 

        ********************************************************************
        ********************************************************************/


        /*******************************************************************
        ********************************************************************

        Timer Section.

        ********************************************************************
        ********************************************************************/
        var setClock = 0;

        $scope.timerRunning = true;
        $scope.timerClass = "btn btn-primary";
        $scope.timerText = "Iniciar";
        
        $scope.changeMethod = function () {
         
            if ($scope.timerClass === "btn btn-primary") {
                $scope.timerClass = "btn btn-danger";
                $scope.timerText = "Detener";
                $scope.startTimer();
                timerState = "Detener";
            } else {
                $scope.timerClass = "btn btn-primary";
                $scope.timerText = "Iniciar";
                $scope.stopTimer();
                timerState = "Iniciar";
            }
        }

        $scope.startTimer = function () {
            $scope.$broadcast('timer-start');
            //$scope.changeTimerFunction();
            $scope.timerRunning = true;
            if (setClock == 0) {
                $scope.getDateValues();
                setClock = 1;
            }
        };

        $scope.stopTimer = function () {
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
            //$scope.changeTimerFunction();
            $scope.changeMethod;
        };

        $scope.$on('timer-stopped', function (event, args) {
            console.log('timer-stopped args = ', args);
        });

        /*******************************************************************
        ********************************************************************

        End Timer Section.

        ********************************************************************
        ********************************************************************/

        /*******************************************************************
        ********************************************************************

        Function  Obtener inforamción del partido

        ********************************************************************
        ********************************************************************/
        

        function Create2DArray(rows) {
            var arr = [];
            for (var i = 0; i < rows; i++) {
                arr[i] = [];
            }
            return arr;
        }

        $scope.team1 = [];
        $scope.team2 = [];
        $scope.logoClub1 = "";
        $scope.logoClub1 = "";
        $scope.nombreEquipo1 = "";
        $scope.nombreEquipo2 = "";
       
        var equipoId2;
        var equipoId1;
        var torneoId;
        var cantidadPlayers = 0; //sdfadfa
        var arrayFormatEventList = [];
        var arrayEvents = []; //asdfadsf
        var jugadorIden = 0;
        var eventIden = 0;
        var comparar = "P";
        var eventList = [];//asdfadsfasdfadf
        var listFaults = [];
        var htmlJugadores1 = "";
        var htmlJugadores = "";
        var htmlJugadores2 = "";
        var test = 0;
        var url = $rootScope.APIurl + "api/Partido/ObtenerInformacionPartido/?partidoId=" + $state.params.partidoId;
        var numeroCamiseta = 0;
        var pastFaults = [];
        var amonestacionsJugador = [];
        var editAmonestaciones = [0, 0, 0];
        var tipoJugadaAmo = 0;
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });

        $http.get(url,{
            cache: false
        }).then(function (response) {

            equipoId1 = response.data["equipoId1"];
            equipoId2 = response.data["equipoId2"];
            $scope.logoClub1 = response.data["logoClub1"];
            $scope.logoClub2 = response.data["logoClub2"];
            torneoId = response.data["torneoId"];
            $scope.team1 = response.data["jugadoresEquipo1"];
            $scope.team2 = response.data["jugadoresEquipo2"];
            $scope.nombreEquipo1 = response.data["nombreEquipo1"];
            $scope.nombreEquipo2 = response.data["nombreEquipo2"];
            $scope.pastFaults = [];
            localStorage.eventosClub1 = "";
            localStorage.eventosClub2 = "";
            localStorage.amonestacionesClub1 = "";
            localStorage.amonestacionesClub2 = "";
            localStorage.eventosClub1 = setLocalStoraEventosClubByTeam($scope.team1);
            localStorage.eventosClub2 = setLocalStoraEventosClubByTeam($scope.team2);
          
        setTeam($scope.team1, localStorage.eventosClub1, 1, 0, 0);
        setTeam($scope.team2, localStorage.eventosClub2, 2, 0, 0);
        setJugadasPorTeam($scope.team1, 1);
        setJugadasPorTeam($scope.team2, 2);
        setFaultList($scope.team1, 1);
        setFaultList($scope.team2, 2);
        $ionicLoading.hide();
        function setJugadasPorTeam(team, teamId) {
            for (var keyJugador in team) {
              
                amonestacionesJugador = team[keyJugador]["amonestaciones"];
                for (var keyAmonestacion in amonestacionesJugador) {
                    tipoJugadaA = amonestacionesJugador[keyAmonestacion]["tipoJugada"];
                    for (var i = 0; i < 3; i++) {
                        if (tipoJugadaA == i) {
                            editAmonestaciones[i] += 1;
                        };
                    };
                };
                if (teamId == 1) {
                    $scope.team1[keyJugador]["amonestaciones"] = editAmonestaciones;
                } else {
                    $scope.team2[keyJugador]["amonestaciones"] = editAmonestaciones;
                }
                editAmonestaciones = [0, 0, 0];
            };
        }
        function setTeam(team, locStorage, teamId, jugadorIden, eventIden) {
            setTeamVariables(team, locStorage);
            arrayEvents = getArrayEvents(eventList, teamId, jugadorIden, eventIden);

            getPlayersList(teamId, arrayEvents,team);
        }
        function setTeamVariables(team, locStorage) {

            cantidadPlayers = team.length;

            arrayEvents = Create2DArray(cantidadPlayers + 1);
 
            eventList = locStorage.split(";");

            test = 2;
        }
        function getArrayEvents(eventList, teamId, jugadorIden, eventIden) {

            for (var position in eventList) {
                arrayFormatEventList = eventList[position].split("|");

                arrayEvents[jugadorIden][eventIden] =
                    {
                        "nombreCompleto": arrayFormatEventList[0],
                        "jugadorId": arrayFormatEventList[1],
                        "EV": arrayFormatEventList[2],
                        "value": arrayFormatEventList[3],
                    };
                eventIden++;
                if (comparar == arrayFormatEventList[2]) {
                    jugadorIden = jugadorIden + 1;
                    eventIden = 0;
                }
            };
            arrayEvents.pop();
            if (teamId == 1)
                return $scope.arrayTest = arrayEvents;
            else
                return $scope.arrayTest2 = arrayEvents;
        }

        function getPlayersList(teamId, arrayEvents,team) {

            if (teamId == 1) {
                for (var key in arrayEvents) {
                    htmlJugadores1 += '<option value="' + key + '">' + arrayEvents[key][0]["nombreCompleto"] + '</option>';
                    listFaults[key] =
                        {
                            "NA": arrayEvents[key][0]["nombreCompleto"],
                            "NC": $scope.team1[key]["numCamiseta"], 
                            "TR": 0,
                            "TA": 0,
                            "TT": 0,
                            
                        };
                    eventIden++;
                    console.log(team[key]["amonestaciones"]);
                    $scope.pastFaults[key] +=team[key]["amonestaciones"];  
                };
                eventIden = 0;
                $scope.amonestacionesClub1 = listFaults;
                listFaults = [];
            }
            else {
                for (var key in arrayEvents) {
                    htmlJugadores2 += '<option value="' + key + '">' + arrayEvents[key][0]["nombreCompleto"] + '</option>';
                    listFaults[key] =
                        {
                            "NA": arrayEvents[key][0]["nombreCompleto"],
                            "NC": $scope.team2[key]["numCamiseta"], 
                            "TR": 0,
                            "TA": 0,
                            "TT": 0,   
                        };
                    eventIden++;
                };
                eventIden = 0;
                $scope.amonestacionesClub2 = listFaults;
                listFaults = [];
            }
           

        }
           
            });



        /*******************************************************************
        ********************************************************************

       End Function  Obtener inforamción del partido

        ********************************************************************
        ********************************************************************/



        /*******************************************************************
        ********************************************************************

       Function - Finalizar partido

        ********************************************************************
        ********************************************************************/
        $scope.Finalizar = function () {
           
            $ionicLoading.show({
                template: '<p>Finalizando...</p><ion-spinner></ion-spinner>'
            });
            var data = {
                "partidoId": $state.params.partidoId,
                "marcadorEquipo1": $scope.scoreTeam1,
                "torneoId": torneoId,
                "equipoId1": equipoId1,
                "equipoId2": equipoId2,
                "marcadorEquipo2": $scope.scoreTeam2,
                "amonestacionesClub1": localStorage.amonestacionesClub1,
                "amonestacionesClub2": localStorage.amonestacionesClub2,
                "jugadasClub1": localStorage.eventosClub1,
                "jugadasClub2": localStorage.eventosClub2,
            };
            var urlPost = $rootScope.APIurl + "api/Partido/FinalizarPartido";
            $http({
                method: 'POST',
                url: urlPost,
                data: JSON.stringify(data),
                cache: false,
            }).then(function (success) {
                $ionicLoading.hide();
                var myPopup =$ionicPopup.show({
                    template: '<input type = "text" ng-model = "data.model">',
                    title: 'Fin Partido',
                    template: 'Se ha finalizado el partido',
                    scope: $scope,
                    buttons: [
                        {
                            text: '<b>Cerrar</b>',
                            type: 'button-positive',
                            onTap: function (e) {

                                e.preventDefault();
                                $state.go('nav');
                                myPopup.close();
                            }
                        }
                    ]
                });
               
            }, function (error) {
                window.alert(error);
            });
        };
       
    });


        /*******************************************************************
        ********************************************************************

       End - Function Finalizar partdio
|
        ********************************************************************
        ********************************************************************/
