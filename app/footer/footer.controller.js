(function (angular) {
    'use strict';

    angular
        .module('app.footer')
        .controller('FooterController', FooterController);

    function FooterController() {
        var vm = this;

        vm.email = 'trevor.benson@egeni.com';
    }

}(angular));