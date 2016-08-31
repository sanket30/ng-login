(function (angular) {
    'use strict';

    angular
        .module('app.benefitsPackage', [
            'ngRoute',
            'app.footer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/benefits-package', {
            templateUrl: 'benefits-package/benefits-package.html',
            controller: 'BenefitsPackageController',
            controllerAs: 'vm'
        });
    }
}(angular));