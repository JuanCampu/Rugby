// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter')

    .controller('RankCtrl', function ($scope, $state, $http, $rootScope, $ionicLoading, ReportSvc) {
        $ionicLoading.show({
            template: '<p>Cargando...</p><ion-spinner></ion-spinner>'
        });
        var url = $rootScope.APIurl + "api/Torneo/ObtenerLista/" + $state.params.torneoId;
        $http.get(url, { headers: { 'Cache-Control': 'no-cache' } }).then(function (response) {
            $scope.infoClubes = response.data;
            $ionicLoading.hide();
        }, function () {
            window.alert("No se pudo realizar la consulta");
        });
        $scope.runReport = _runReport;
        function _runReport() {
            if (!window.cordova) {
                ReportSvc.runReportDataURL({}, {})
                    .then(function (dataURL) {
                        //set the iframe source to the dataURL created
                        console.log('report run in browser using dataURL and iframe');
                        document.getElementById('pdfImage').src = dataURL;
                    });
                return true;
            } else {
                ReportSvc.runReportAsync({}, {})
                    .then(function (filePath) {
                        //log the file location for debugging and oopen with inappbrowser
                        console.log('report run on device using File plugin');
                        console.log('ReportCtrl: Opening PDF File (' + filePath + ')');
                        window.open(filePath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
                        hideLoading();
                    });
                return true;
            }
        }
        _activate();

        function _activate() {
            //
            // ReportSvc Event Listeners: Progress/Done
            //    used to listen for async progress updates so loading text can change in 
            //    UI to be repsonsive because the report process can be 'lengthy' on 
            //    older devices (chk reportSvc for emitting events)
            //
            $scope.$on('ReportSvc::Progress', function (event, msg) {
                _showLoading(msg);
            });
            $scope.$on('ReportSvc::Done', function (event, err) {
                _hideLoading();
            });
        }



        function _showLoading(msg) {
            $ionicLoading.show({
                template: msg
            });
        }
        function _hideLoading() {
            $ionicLoading.hide();
        }
  });

