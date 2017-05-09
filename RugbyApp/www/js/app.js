// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ui.bootstrap', "ion-datetime-picker", 'ionic-numberpicker', 'ionic-numberpicker.templates', 'timer', 'ngMessages'])
    .filter('iif', function () {
        return function (input, trueValue, falseValue) {
            return input ? trueValue : falseValue;
        };
    })

    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }])
    .directive("passwordVerify", function () {
        return {
            require: "ngModel",
            scope: {
                passwordVerify: '='
            },
            link: function (scope, element, attrs, ctrl) {
                scope.$watch(function () {
                    var combined;

                    if (scope.passwordVerify || ctrl.$viewValue) {
                        combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                    }
                    return combined;
                }, function (value) {
                    if (value) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            var origin = scope.passwordVerify;
                            if (origin !== viewValue) {
                                ctrl.$setValidity("passwordVerify", false);
                                return undefined;
                            } else {
                                ctrl.$setValidity("passwordVerify", true);
                                return viewValue;
                            }
                        });
                    }
                });
            }
        };
    })

    .run(function ($ionicPlatform, $rootScope, $state, $ionicPickerI18n, $location) {

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if (!next.includes("sign") && current.includes("index.html#") && ($rootScope.Invitado == null || $rootScope.Invitado == undefined)) {
                if ($rootScope.UserName == null || $rootScope.Rol == null) {
                    $location.path('/inicio');
                }
            }
        });

        // Universal values for Date Time Picker
        $ionicPickerI18n.weekdays = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
        $ionicPickerI18n.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "octubre", "Noviembre", "Diciembre"];
        $ionicPickerI18n.ok = "Aceptar";
        $ionicPickerI18n.cancel = "Cancelar";
        $ionicPickerI18n.okClass = "button-positive";
        $ionicPickerI18n.cancelClass = "button-stable";
        $ionicPickerI18n.arrowButtonClass = "button-positive";

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      $rootScope.stateNav = function () {
          if ($rootScope.Rol == "Juez") {
              $state.go('nav-referee');
          } else if ($rootScope.Rol == "Admin") {
              $state.go('nav-admin');
          } else {
              $state.go('nav');
          }
      }
      $rootScope.goLogOut = function () {
          $rootScope.UserName = null;
          $rootScope.Rol = null;
          $state.go('inicio');
      };
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('inicio', {
        url: '/inicio',
        templateUrl: 'templates/inicio.html',
        controller: 'InicioCtrl'
      })

      .state('sign', {
        url: '/sign',
        cache: false,
        templateUrl: 'templates/sign.html',
        controller: 'SignCtrl'
      })

      .state('app.feed', {
        url: '/feed',
        views: {
          'menuContent': {
            templateUrl: 'templates/feed.html',
            controller: 'FeedCtrl'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
          }
        }
        })

        .state('app.join', {
            url: '/join',
            views: {
                'menuContent': {
                    templateUrl: 'templates/join.html',
                    controller: 'JoinCtrl'
                }
            }
        })

        .state('app.match', {
            url: '/match',
            views: {
                'menuContent': {
                    templateUrl: 'templates/match.html',
                    controller: 'MatchCtrl'
                }
            }
        })

        .state('app.whistle', {
            url: '/whistle',
            views: {
                'menuContent': {
                    templateUrl: 'templates/whistle.html',
                    controller: 'WhistleCtrl'
                }
            },
            params: {
                'partidoId': ''
            }
        })

        .state('app.prev-whistle', {
            url: '/prev-whistle',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-whistle.html',
                    controller: 'PrevWhistleCtrl'
                }
            }
        })

        .state('app.history', {
            url: '/history',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/history.html',
                    controller: 'HistoryCtrl'
                }
            }
        })

        .state('app.edit-user', {
            url: '/edit-user',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/edit-user.html',
                    controller: 'EditUserCtrl'
                }
            }
        })
        .state('app.config-whistle', {
            url: '/config-whistle',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/config-whistle.html',
                    controller: 'ConfigWhistleCtrl'
                }
            }
        })

      .state('app.draft', {
        url: '/draft',
        views: {
          'menuContent': {
            templateUrl: 'templates/draft.html',
            controller: 'DraftCtrl'
          }
        }
        })

        .state('app.add-news', {
            url: '/add-new',
            views: {
                'menuContent': {
                    templateUrl: 'templates/add-news.html',
                    controller: 'AddNewCtrl'
                }
            }
        })


        .state('app.add-users', {
            url: '/add-user',
            views: {
                'menuContent': {
                    templateUrl: 'templates/add-users.html',
                    controller: 'AddUseCtrl'
                }
            }
        })

        .state('app.add-players', {
            url: '/add-player',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/add-players.html',
                    controller: 'AddPlaCtrl'
                }
            }
        })

        .state('app.edit-match', {
            url: '/edit-match',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/edit-match.html',
                    controller: 'EdiMatCtrl'
                }
            },
            params: {
                'partidoId': ''
            }
        })

        .state('app.pre-edit-match', {
            url: '/pre-edit-match',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-edit-match.html',
                    controller: 'PrevEdiCtrl'
                }
            }
        })


      .state('app.prev-rank', {
            url: '/prev-rank',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-rank.html',
                    controller: 'PrevRankCtrl'
                }
            }
      })

      .state('app.rank', {
            url: '/rank',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/rank.html',
                    controller: 'RankCtrl'
                }
            },
            params: {
                'torneoId': ''
            }
      })

      .state('app.prev-score', {
          url: '/prev-score',
          cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-score.html',
                    controller: 'PrevScoreCtrl'
                }
            }
      })

      .state('app.score', {
          url: '/score',
          cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/score.html',
            controller: 'ScoreCtrl'
          }
        }
      })

      .state('favorite', {
        url: '/favorite',
        templateUrl: 'templates/favorite.html',
        controller: 'FavoriteCtrl'
      })

      .state('nav', {
        url: '/nav',
        templateUrl: 'templates/nav.html',
        controller: 'NavCtrl'
        })

       .state('nav-referee', {
           url: '/nav-referee',
            templateUrl: 'templates/nav-referee.html',
            controller: 'NavRefCtrl'
        })

        .state('nav-admin', {
            url: '/nav-admin',
            templateUrl: 'templates/nav-admin.html',
            controller: 'NavAdmCtrl'
        })

    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/inicio');

  })
  .controller('AppCtrl', function($scope, $ionicModal, $state, $rootScope) {

    $scope.stateFavorite = function () {
      $state.go('favorite')
    }

    $scope.stateInicio = function () {
      $state.go('inicio')
    }
    $scope.stateSign = function () {
      $state.go('sign')
    }
  });
