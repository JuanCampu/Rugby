// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('MatchSecondCtrl', function ($scope, $state, $ionicPopup) {

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

    });

    
