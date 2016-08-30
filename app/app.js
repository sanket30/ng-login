(function (angular) {
    'use strict';

    angular
        .module('myApp', [

            // Core 3rd party modules:
            'ngRoute',
            'ui.bootstrap',

            // local modules
            'myApp.view1',
            'myApp.view2'
        ])
        .config(config);

    // @ngInject
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/view1' });
    }
}(angular));