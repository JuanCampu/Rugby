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

        $scope.checkMenuItems = function (menuItem) {
            switch (menuItem) {
                case $scope.menuItems[0]:
                    $scope.showEventIn();
                    break;
                case $scope.menuItems[1]:
                    $scope.showEventOut();
                    break;
                case $scope.menuItems[2]:
                    $scope.showEventT();
                    break;
                case $scope.menuItems[3]:
                    $scope.showEventC();
                    break;
                case $scope.menuItems[4]:
                    $scope.showEventP();
                    break;
                case $scope.menuItems[5]:
                    $scope.showEventGC();
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

        $scope.showEventTR = function () {
            $scope.data = {}

            // Custom popup
            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Tarjeta Roja',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>Observaciones:  <textarea class="form-control" id="disabledInput" rows="3"></textarea>',
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

        $scope.showEventTA = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Tarjeta Amarilla',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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

        $scope.showEventTC = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Tarjeta Técnica',
                template: 'Seleccione el Jugador: <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>Observaciones:  <textarea class="form-control" id="disabledInput" rows="3"></textarea>',
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

        $scope.showEventIn = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'In (Entrada)',
                template: 'Seleccione el jugador que entra:  <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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
        $scope.showEventOut = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'Out (Salida)',
                template: 'Seleccione el  jugador que sale:  <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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

        $scope.showEventC = function () {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'C (Conversión)',
                template: 'Seleccione el  jugador que realizo la conversión:  <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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

        $scope.showEventP = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'P (Penal)',
                template: 'Seleccione el jugador del penal: <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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

        $scope.showEventGC = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'GC (Gol de campo)',
                template: 'Seleccione el jugador para el gol de campo: <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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

        $scope.showEventT = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type = "text" ng-model = "data.model">',
                title: 'T (Try)',
                template: 'Seleccione el jugador para el try: <div class="form-group "> </div><div class="form-group "><select class="form-control "><option>jugador 1</option> <option>jugador 2</option> <option>jugador 3</option><option>jugador 4</option><option>jugador 5</option> </select></div>',
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
        $scope.setActive2 = function (menuItem) {
            $scope.activeMenu2 = menuItem;
            $scope.checkMenuItems(menuItem);
           
        }
        $scope.setActive1 = function (menuItem) {
            $scope.activeMenu1 = menuItem;
            $scope.checkMenuItems(menuItem);
            
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

        var clubId2;
        var clubId1;
        var torneoId;
        var url = $rootScope.APIurl + "api/Partido/ObtenerInformacionPartido/" + $state.params.partidoId;
        $http.get(url,{
            cache: false
        }).then(function (response) {
            clubId1 = response.data["clubId1"];
            clubId2 = response.data["clubId2"];
            torneoId = response.data["torneoId"];
            team1 = response.data["jugadoresClub1"];
            var cantidadPlayers = team1.length;
            localStorage.amonestacionesClub1 = "";
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
            var arrayFormatEventList = [];
            var arrayEvents = Create2DArray(cantidadPlayers + 1);
            var jugadorIden = 0;
            var eventIden = 0;
            var comparar = "P";
            var eventList = localStorage.eventosClub1.split(";");
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
                    jugadorIden = jugadorIden + 1
                    eventIden = 0;
                }
            };
            arrayEvents.pop();
            $scope.arrayTest = arrayEvents;
        });

        $scope.Finalizar = function () {
            var data = {
                "partidoId": $state.params.partidoId,
                "marcadorClub1": 0,
                "torneoId": torneoId,
                "clubId1": clubId1,
                "clubId2": clubId2, 
                "marcadorClub2": 1,
                "amonestacionesClub1": localStorage.amoClub1,
                "amonestacionesClub2": localStorage.amoClub2,
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
                window.alert("Aceptado");
            }, function (error) {
                window.alert(error);
            });
        }
    });
