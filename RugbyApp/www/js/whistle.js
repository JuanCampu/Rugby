// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('WhistleCtrl', function ($scope, $state, $ionicPopup) {

       
        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleGroup = function (group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function (group) {
            return $scope.shownGroup === group;
        };
       
        $scope.getDateValues = function () {
            $scope.date = new Date();
            $scope.hours = $scope.date.getHours();
            $scope.minutes = $scope.date.getMinutes();
            $scope.timeString = "" + (($scope.hours > 12) ? $scope.hours - 12 : $scope.hours);
            $scope.timeString += (($scope.minutes < 10) ? ":0" : ":") + $scope.minutes;
            $scope.timeString += ($scope.hours >= 12) ? " P.M." : " A.M.";
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
        }
        $scope.setActive1 = function (menuItem) {
            $scope.activeMenu1 = menuItem;

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
        }

        $scope.getDateValues();
    });
