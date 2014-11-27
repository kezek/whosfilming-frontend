'use strict';

/**
 * @ngdoc overview
 * @name whosfilmingFrontendApp
 * @description
 * # whosfilmingFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('whosfilmingFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angucomplete'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
