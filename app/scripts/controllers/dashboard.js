/**
 * Created by marius on 14.11.2014.
 */

'use strict';

/**
 * @ngdoc function
 * @name whosfilmingFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whosfilmingFrontendApp
 */
angular.module('whosfilmingFrontendApp', [])
    .controller('DashboardCtrl', ["$scope", function($scope) {
        $scope.message = "Yoyoyo bro";
    }]);
