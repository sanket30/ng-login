(function (angular) {
    'use strict';

    angular
        .module('app.rateCalculator')
        .controller('RateCalculatorController', RateCalculatorController);

    // @ngInject
    function RateCalculatorController() {
        var vm = this;
        vm.calculateRate = calculateRate;

        vm.finalRate = 0;
        vm.isRelocationNeeded = false;

        function calculateRate() {
            if (vm.baseRate) {
                vm.finalRate = 1.1 * ( (vm.baseRate * 1.1) + 4.350 + (vm.isRelocationNeeded ? 1 : 0) + 1 );
            } else {
                vm.finalRate = 0;
            }
        }

    }
}(angular));