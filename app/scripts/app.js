'use strict';

angular
  .module('paypalButtonApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/paypalButtonTest.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
