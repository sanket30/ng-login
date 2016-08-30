(function (angular,_) {
    'use strict';

    angular
        .module('app.login')
        .controller('loginController', loginController);

    // @ngInject
    function loginController(){
        var vm = this;

        vm.controller = 'controller1';
    }
}(angular,_));