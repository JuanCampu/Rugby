// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ui.bootstrap', "ion-datetime-picker", 'ionic-numberpicker', 'ionic-numberpicker.templates', 'timer'])

  .run(function ($ionicPlatform) {
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
            }
        })

        .state('app.prev-whistle', {
            url: '/prev-whistle',
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-whistle.html',
                    controller: 'PrevWhistleCtrl'
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

      .state('app.prev-rank', {
            url: '/prev-rank',
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-rank.html',
                    controller: 'PrevRankCtrl'
                }
            }
      })

      .state('app.rank', {
            url: '/rank',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rank.html',
                    controller: 'RankCtrl'
                }
            }
      })

      .state('app.prev-score', {
          url: '/prev-score',
            views: {
                'menuContent': {
                    templateUrl: 'templates/prev-score.html',
                    controller: 'PrevScoreCtrl'
                }
            }
      })

      .state('app.score', {
        url: '/score',
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

    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/inicio');

  })
  .controller('AppCtrl', function($scope, $ionicModal, $state) {

    $scope.stateFavorite = function () {
      $state.go('favorite')
    }

    $scope.stateNav = function () {
      $state.go('nav')
    }

    $scope.stateInicio = function () {
      $state.go('inicio')
    }
    $scope.stateSign = function () {
      $state.go('sign')
    }
  });
