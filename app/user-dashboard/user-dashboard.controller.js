(function (angular) {
    'use strict';

    angular
        .module('app.userDashboard')
        .controller('UserDashboardController', UserDashboardController);

    // @ngInject
    function UserDashboardController() {
        var vm = this;

        vm.tiles = [
            {
                tileName: 'QUALIFY H1-B CANDIDATE'
            },
            {
                tileName: 'HOURLY RATE CALCULATOR'
            },
            {
                tileName: 'SEND BENEFITS PACKAGE'
            },
            {
                tileName: 'SUBMIT OFFER NOTIFICATION'
            }
        ];
        vm.hoverInTile = hoverInTile;
        vm.hoverOutTile = hoverOutTile;

        function hoverInTile(data) {
            data.hover = true;
        }

        function hoverOutTile(data) {
            data.hover = false;
        }
    }
}(angular));