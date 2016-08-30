(function (angular,_) {
    'use strict';

    angular
        .module('myApp.view1')
        .controller('View1Ctrl', View1Ctrl);

    // @ngInject
    function View1Ctrl(){
        var vm = this;

        vm.controller = 'controller1';
    }
}(angular,_));