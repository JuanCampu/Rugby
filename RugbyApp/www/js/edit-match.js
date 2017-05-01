// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('EdiMatCtrl', function ($scope, $state, $ionicPopup,  $http, $rootScope) {
                /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */

        var editMatch = [0, 0, 0, 0, 0,0];

        $scope.team1 = [];
        $scope.team2 = [];

        var url = $rootScope.APIurl + "api/Partido/ObtenerInformacionPartido/" + $state.params.partidoId;
      
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {

            var jugadasJugador = [];
            var tipoJugada = 0;

            $scope.team1 = response.data["jugadoresEquipo1"];
            $scope.team2 = response.data["jugadoresEquipo2"];
          
            setJugadasPorTeam($scope.team1, 1);
            setJugadasPorTeam($scope.team2, 2);

           
        }, function () {
            window.alert("No se pudo realizar la consulta");
        });

        function setJugadasPorTeam(team,teamId) {
            for (var keyJugador in team) {
                jugadasJugador = team[keyJugador]["jugadas"];
                for (var keyJugada in jugadasJugador) {
                    tipoJugada = jugadasJugador[keyJugada]["tipoJugada"];
                    for (var i = 0; i < 6; i++) {
                        if (tipoJugada == i) {
                            editMatch[i] = jugadasJugador[keyJugada]["cantidad"];
                        };
                    };
                };
                if (teamId == 1) {
                    $scope.team1[keyJugador]["jugadas"] = editMatch;
                } else {
                    $scope.team2[keyJugador]["jugadas"] = editMatch;
                } 
                editMatch = [0, 0, 0, 0, 0, 0];
            }; 
        }

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
                $(this).text(val);
                timePickerCallback(val);
            }
        };


   



      
       
    });


        /*******************************************************************
        ********************************************************************

       End - Function Finalizar partdio
|
        ********************************************************************
        ********************************************************************/
