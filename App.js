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

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeCtrl'
      })
      // .when('/about', {
      //      templateUrl: 'view/about.html',
      //      controller: 'AboutCtrl'
      // })
      // .when('/contact', {
      //      templateUrl: 'view/contact.html',
      //      controller: 'ContactCtrl'
      // })
      .otherwise({redirectTo : '/'});
  });

  App.config(function ($locationProvider) {
     $locationProvider.html5Mode(true);
  });

}());
