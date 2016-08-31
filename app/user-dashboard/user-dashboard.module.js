(function (angular) {
    'use strict';

    angular
        .module('app.userDashboard', [
            'ngRoute',
            'app.footer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/user-dashboard', {
            templateUrl: 'user-dashboard/user-dashboard.html',
            controller: 'UserDashboardController',
            controllerAs: 'vm'
        });
    }
}(angular));