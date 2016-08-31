(function (angular) {
    'use strict';

    angular
        .module('app.submitOffer', [
            'ngRoute',
            'app.footer'
        ])
        .config(config);

    // @ngInject
    function config($routeProvider) {
        $routeProvider.when('/submit-offer', {
            templateUrl: 'submit-offer/submit-offer.html',
            controller: 'SubmitOfferController',
            controllerAs: 'vm'
        });
    }
}(angular));