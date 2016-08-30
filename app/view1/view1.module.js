(function (angular) {
    'use strict';

    angular
        .module('myApp.view1', [

            // Core 3rd party modules:
            'ngRoute'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'vm'
        });
    }
}(angular));