/**
 * Created by Martin on 2015-08-31.
 */

(function(){
    'use strict';

    angular
        .module('app.portfolios')
        .controller('listPortfolios', listPortfolios);

    listPortfolios.$inject = ['dataservice'];

    function listPortfolios (dataservice) {
        var vm = this;
        vm.portfolios = [];
        vm.getPortfolios = getPortfolios;
        //vm.getPortfoliosByPortfolioOwnerName = getPortfoliosByPortfolioOwnerName;
        //vm.getPortfoliosByPortfolioName = getPortfoliosByPortfolioName;
        vm.selectPortfolio=selectPortfolio;
        vm.queryBy = 'customer';


        /*function setSelectedPortfolio (portfolio) {
            dataservice.selectedPortfolio = portfolio;

        }*/

        function getPortfolios() {
            if (vm.queryBy === 'customer') {
                return dataservice.getPortfoliosByPortfolioOwnerName(vm.query).then(function (data) {
                    vm.portfolios = data;
                    return vm.portfolios;
                });
            }
            else if (vm.queryBy === 'portfolio') {
                return dataservice.getPortfoliosByPortfolioName(vm.query).then(function(data) {
                    vm.portfolios = data;
                    return vm.portfolios;
                });

            }

        }

        function selectPortfolio(portfolio) {
            dataservice.setSelectedPortfolio(portfolio);
            }



    }
})();