/**
 * Created by Martin on 2015-08-31.
 */

(function(){
'use strict';
    
    angular
        .module('app.portfolios')
        .controller('definePortfolio', definePortfolio);



    function definePortfolio (dataservice) {
        var vm = this;
        vm.accounts = [];
        vm.selectedAccounts = [];
        vm.portfolio = dataservice.selectedPortfolio;
        vm.getAccounts = getAccounts;
        vm.savePortfolio = savePortfolio;
        vm.checkAll = checkAll;



        function checkAll()  {
            vm.checkedAll = !!vm.checkedAll;
            angular.forEach(vm.accounts, function (account) {
                account.selected = vm.checkedAll;
            });

        }

        /*function savePortfolioDefinition () {
            vm.selectedAccounts = [];
            for (var i = 0; i < vm.accounts.length; i++) {
                if (vm.accounts[i].selected) {
                    vm.selectedAccounts.push(vm.accou



                    nts[i]);
                }
            }
            dataservice.postPortfolio(vm.selectedAccounts);
        }
        //activate();

        // function activate() {}

        function getAccounts() {
            return dataservice.getAccounts().then(function(data) {
                vm.accounts = data;
                return vm.accounts;
            });
        } */


    }
})();