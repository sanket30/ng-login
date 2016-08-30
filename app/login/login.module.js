(function (angular) {
    'use strict';

    angular
        .module('app.login', [

            // Core 3rd party modules:
            'ngRoute'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        });
    }
}(angular));