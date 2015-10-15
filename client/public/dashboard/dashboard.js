/**
 * Created by Martin on 2015-08-31.
 */

(function(){
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboard', dashboard);

    dashboard.$inject = ['dataservice'];


    function dashboard(dataservice) {
        var vm = this;
        vm.customers = [];
        vm.getCustomers = getAccounts;

        activate();

        function activate() {
        }

        function getAccounts() {
            return dataservice.getAccounts().then(function(data) {
                vm.customers = data;
                return vm.accounts;
            });
        }


    }
})();