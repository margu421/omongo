/**
 * Created by Martin on 2015-08-31.
 */

(function(){
'use strict';
    
    angular
        .module('app.portfolios')
        .controller('Portfolio', portfolio);

    function portfolio (dataservice) {
        var vm = this;
        vm.selectedAccounts = [];
        vm.portfolio = dataservice.getSelectedPortfolio();
        vm.getAccountsByPortfolioOwnerId = getAccountsByPortfolioOwnerId;
        vm.savePortfolio = savePortfolio;

        //getAccountsByPortfolioOwnerId(vm.portfolio.portfolioOwnerId);

        function getAccountsByPortfolioOwnerId(portfolioOwnerId) {
            return dataservice.getAccounts(portfolioOwnerId).then(function(data) {
                vm.accounts = data;
                return vm.accounts;
            });
        }

        function savePortfolio(portfolio) {
            return dataservice.postPortfolio(portfolio).then(function(data) {

            });
        }

    }
})();