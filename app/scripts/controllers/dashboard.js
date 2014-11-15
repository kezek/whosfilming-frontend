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
angular.module('whosfilmingFrontendApp')
    .controller('DashboardCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
