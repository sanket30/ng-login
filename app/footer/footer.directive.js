(function (angular) {
    'use strict';

    angular
        .module('app.footer')
        .directive('footer', footer);

    function footer() {
        return {
            restrict: 'E',
            scope: {
                email: '@'
            },
            templateUrl: 'footer/footer.html',
            controller: 'FooterController',
            controllerAs: 'vm'
        }
    }

}(angular));