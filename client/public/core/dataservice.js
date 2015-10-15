/**
 * Created by Martin on 2015-08-31.
 * Ursprung från Clean Code på Pluralsight (Avengers). Behöver nog hämta logger och exception...
 */

(function() {
    'use strict';


    angular
        .module('app.core')
        .service('dataservice', dataservice);

    //dataservice.$inject = [];


    function dataservice($http) {
        var ds = this;
        ds.portfolios = [];
        ds.getInstrumentsOnMarket = getInstrumentsOnMarket;
        ds.setSelectedInstrument = setSelectedInstrument;
        ds.selectedInstrument = {};
        ds.selectedPortfolio = {};
        ds.setSelectedPortfolio = setSelectedPortfolio;
        ds.getSelectedPortfolio = getSelectedPortfolio;
        ds.getPortfoliosByPortfolioOwnerName = getPortfoliosByPortfolioOwnerName;
        ds.getPortfoliosByPortfolioName = getPortfoliosByPortfolioName;

        //ds.portfolios = [];

        return {
            setSelectedInstrument: setSelectedInstrument,
            getSelectedInstrument: getSelectedInstrument,
            setSelectedPortfolio: setSelectedPortfolio,
            getSelectedPortfolio: getSelectedPortfolio,
            getInstrumentsOnMarket: getInstrumentsOnMarket,
            postPortfolio: postPortfolio,
            getPortfoliosByPortfolioOwnerName: getPortfoliosByPortfolioOwnerName,
            getPortfoliosByPortfolioName: getPortfoliosByPortfolioName
        };

        ////////////////////////////////////////////
        function getInstrumentsOnMarket(query) {
            return $http.get('api/instruments?marketCode=' + query)
                .then(function(response) {
                    console.log(query);
                    console.log(response);
                    return response.data[0].instruments;
                })
                .catch(function(message) {
                    console.log(message);
                });
        }
        function setSelectedInstrument (instrument) {
            ds.selectedInstrument = instrument[1];
            console.log(ds.selectedInstrument);
            return ds.selectedInstrument;
        }

        function getSelectedInstrument () {
            return ds.selectedInstrument;
        }



        function getPortfoliosByPortfolioOwnerName(query) {
            return $http.get('api/portfolios?portfolioOwnerName=' + query)
                .then(function (response) {
                    ds.portfolios=response.data;
                    return response.data;
                })
                .catch(function(message) {
                    console.log(message);
                });

        }
        function getPortfoliosByPortfolioName(query) {
            console.log(query);
            return $http.get('api/portfolios?portfolioName=' + query)
                .then(function (response) {
                    ds.portfolios=response.data;
                    return response.data;
                })
                .catch(function(message) {
                    console.log(message);
                });

        }
         function postPortfolio(portfolio) {
            return $http.post('api/portfolios/', portfolio)
                .then(function (response) {
                    console.log(response);
                    return response.data;
                })
                .catch(function(message) {
                    console.log(message);
                });
        }

        function setSelectedPortfolio (portfolio) {
            ds.selectedPortfolio = portfolio;
            console.log(portfolio);
            return ds.selectedPortfolio;
        }

        function getSelectedPortfolio () {
            return ds.selectedPortfolio;
        }
    }
})();