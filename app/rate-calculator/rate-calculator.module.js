(function (angular) {
    'use strict';

    angular
        .module('app.rateCalculator', [
            'ngRoute',
            'app.footer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/rate-calculator', {
            templateUrl: 'rate-calculator/rate-calculator.html',
            controller: 'RateCalculatorController',
            controllerAs: 'vm'
        });
    }
}(angular));