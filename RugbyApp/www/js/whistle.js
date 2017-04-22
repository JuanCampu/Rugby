﻿// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('WhistleCtrl', function ($scope, $state, $ionicPopup,  $http, $rootScope) {
                /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
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
       
        $scope.getDateValues = function () {
            $scope.date = new Date();
            $scope.hours = $scope.date.getHours();
            $scope.minutes = $scope.date.getMinutes();
            $scope.timeString = "" + (($scope.hours > 12) ? $scope.hours - 12 : $scope.hours);
            $scope.timeString += (($scope.minutes < 10) ? ":0" : ":") + $scope.minutes;
            $scope.timeString += ($scope.hours >= 12) ? " P.M." : " A.M.";
        };

        $scope.checkMenuItems = function (menuItem,team) {
            switch (menuItem) {
                case $scope.menuItems[0]:
                    $scope.showEventIn(team);
                    break;
                case $scope.menuItems[1]:
                    $scope.showEventOut(team);
                    break;
                case $scope.menuItems[2]:
                    $scope.showEventT(team);
                    break;
                case $scope.menuItems[3]:
                    $scope.showEventC(team);
                    break;
                case $scope.menuItems[4]:
                    $scope.showEventP(team);
                    break;
                case $scope.menuItems[5]:
                    $scope.showEventGC(team);
                    break;
                case 6:
                    day = "Saturday";
            }
        };

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
        ];

        // go to Nav page
        $scope.goBack = function () {
            $state.go('nav')
        };

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
                timePickerCallback(val);
            }
        };

        $scope.showEventTR = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            // Custom popup
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Tarjeta Roja',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>Observaciones:  <textarea class="form-control" id="disabledInput" rows="3"></textarea>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventTA = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Tarjeta Amarilla',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventTC = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Tarjeta Técnica',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>Observaciones:  <textarea class="form-control" id="disabledInput" rows="3"></textarea>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventIn = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'In (Entrada)',
                template: 'Seleccione el jugador que entra:  <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };
        $scope.showEventOut = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Out (Salida)',
                template: 'Seleccione el  jugador que sale:  <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventC = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'C (Conversión)',
                template: 'Seleccione el  jugador que realizo la conversión:  <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventP = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'P (Penal)',
                template: 'Seleccione el jugador del penal: <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventGC = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'GC (Gol de campo)',
                template: 'Seleccione el jugador para el gol de campo: <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.showEventT = function (team) {
            $scope.data = {}
            if (team == 1)
                htmlJugadores = htmlJugadores1;
            else
                htmlJugadores = htmlJugadores2;
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'T (Try)',
                template: 'Seleccione el jugador para el try: <div class="form-group "> </div><div class="form-group "><select class="form-control ">' + htmlJugadores + '</select></div>',
                scope: $scope,

                buttons: [
                    { text: 'Cancel' }, {
                        text: '<b>Guardar</b>',
                        type: 'button-positive'
                    }
                ]
            });

            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        $scope.ChangeColor = function () {
            var cols = document.getElementsByClassName('background-label-left');
            for (i = 0; i < cols.length; i++) {
                cols[i].style.backgroundColor = 'blue';
            }
            $(this).css("background-color", "yellow");
        };

        
        var timerState = "Iniciar";
        var setClock = 0 ;
        
        $scope.checkMethod = function () {
         
            if (timerState == "Iniciar" ) {
                $scope.startTimer();
                timerState = "Detener";
            } else {
                
                $scope.stopTimer();
                timerState = "Iniciar";
            }
        }

        $scope.timerClass = "btn btn-primary";
        $scope.timerText = "Iniciar";

        $scope.changeTimerFunction = function () {
            if ($scope.timerClass === "btn btn-primary") {
                $scope.timerClass = "btn btn-danger";
                $scope.timerText = "Detener";
            }
            else {
                $scope.timerClass = "btn btn-primary";
                $scope.timerText = "Iniciar";
               
            }
        };

        $scope.timerRunning = true;

        $scope.startTimer = function () {
            $scope.$broadcast('timer-start');
            $scope.changeTimerFunction();
            $scope.timerRunning = true;
            if (setClock == 0) {
                $scope.getDateValues();
                setClock = 1;
            }
        };

        $scope.stopTimer = function () {
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
            $scope.changeTimerFunction();
        };

        $scope.$on('timer-stopped', function (event, args) {
            console.log('timer-stopped args = ', args);
        });

        $scope.menuItems = ['In (entrada)', 'Out (Salida)', 'El T (Try)', 'C (Conversion)', 'P (penal)', 'GC (gol de campo)'];
        $scope.activeMenu1 = $scope.menuItems;
        $scope.activeMenu2 = $scope.menuItems;
        $scope.setActive2 = function (menuItem,team) {
            $scope.activeMenu2 = menuItem;
            $scope.checkMenuItems(menuItem,team);
           
        }
        $scope.setActive1 = function (menuItem,team) {
            $scope.activeMenu1 = menuItem;
            $scope.checkMenuItems(menuItem,team);
            
        }

        $scope.getDateValues();

        function Create2DArray(rows) {
            var arr = [];
            for (var i = 0; i < rows; i++) {
                arr[i] = [];
            }
            return arr;
        }

        var team1 = [];
        var team2 = [];
        var cantidadPlayers = 0; //sdfadfa
        var arrayFormatEventList = [];
        var arrayEvents = []; //asdfadsf
        var jugadorIden = 0;
        var eventIden = 0;
        var comparar = "P";
        var eventList = [];//asdfadsfasdfadf
        var htmlJugadores1 = "";
        var htmlJugadores = "";
        var htmlJugadores2 = "";
        var test = 0;
       

        var url = $rootScope.APIurl + "api/Partido/ObtenerInformacionPartido/" + $state.params.partidoId;
        $http.get(url).then(function (response) {
            team1 = response.data["jugadoresClub1"];
            team2 = response.data["jugadoresClub2"];
           localStorage.eventosClub1 = "";
        for (var numeroJugadores in team1) {
            localStorage.amoClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|TA|0;";
            localStorage.amoClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|TT|0;";
            localStorage.amoClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|TR|0;";
            localStorage.eventosClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|IN|0;";
            localStorage.eventosClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|OUT|0;";
            localStorage.eventosClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|TRY|0;";
            localStorage.eventosClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|GC|0;";
            localStorage.eventosClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|C|0;";
            localStorage.eventosClub1 += team1[numeroJugadores]["nombres"] + " " + team1[numeroJugadores]["apellidos"] + "|" + team1[numeroJugadores]["jugadorId"] + "|P|0;";
        };
        localStorage.eventosClub2 = "";
        for (var numeroJugadores in team2) {
            localStorage.amoClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|TA|0;";
            localStorage.amoClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|TT|0;";
            localStorage.amoClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|TR|0;";
            localStorage.eventosClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|IN|0;";
            localStorage.eventosClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|OUT|0;";
            localStorage.eventosClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|TRY|0;";
            localStorage.eventosClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|GC|0;";
            localStorage.eventosClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|C|0;";
            localStorage.eventosClub2 += team2[numeroJugadores]["nombres"] + " " + team2[numeroJugadores]["apellidos"] + "|" + team2[numeroJugadores]["jugadorId"] + "|P|0;";
        };

        setTeam(team1, localStorage.eventosClub1, 1, 0, 0);
        setTeam(team2, localStorage.eventosClub2, 2, 0, 0);
        function setTeam(team, locStorage, teamId, jugadorIden, eventIden) {
            setTeamVariables(team, locStorage);
            arrayEvents = getArrayEvents(eventList, teamId, jugadorIden, eventIden);

            getPlayersList(teamId, arrayEvents);
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

        function getPlayersList(teamId, arrayEvents) {

            if (teamId == 1) {
                for (var key in arrayEvents) {
                    htmlJugadores1 += "<option>" + arrayEvents[key][0]["nombreCompleto"] + "</option>";
                };
            }
            else {
                for (var key in arrayEvents) {
                    htmlJugadores2 += "<option>" + arrayEvents[key][0]["nombreCompleto"] + "</option>";
                };
            }

        }
           
        });
  
        
        
    });
