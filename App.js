(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeCtrl'
      })
      .when('/cuff', {
           templateUrl: 'view/cuff.html',
           controller: 'CuffCtrl'
      })
      // .when('/contact', {
      //      templateUrl: 'view/contact.html',
      //      controller: 'ContactCtrl'
      // })
      .otherwise({redirectTo : '/'});
  });

}());
