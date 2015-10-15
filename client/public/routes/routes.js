/**
 * Created by Martin on 2015-09-03.
 */
(function() {
    'use strict';

//konfigurera sidor
angular
    .module('app.routes')
    .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url:"/",
            //controller: "",
            //controllerAs: "vm",
            templateUrl: "misc/start.html"
        })
        .state("portfolios", {
            url:"/portfolios",
            controller: "listPortfolios",
            controllerAs: "vm",
            templateUrl: "portfolios/listPortfolios.html"
        })
        .state("portfolio", {
            url:"/portfolio",
            controller: "Portfolio",
            controllerAs: "vm",
            templateUrl: "portfolios/editPortfolio.html"
        })
        .state("addportfolio", {
            url:"/portfolio",
            controller: "Portfolio",
            controllerAs: "vm",
            templateUrl: "portfolios/addPortfolio.html"
        })
        .state("createPortfolio", {
            url:"/createPortfolio",
            controller: "createPortfolio",
            controllerAs: "vm",
            templateUrl: "portfolios/createPortfolio.html"
        })
        .state("instrument", {
            url:"/instrument",
            controller: "instrument",
            controllerAs: "vm",
            templateUrl: "instruments/instrument.html"
        })
        .state("instruments", {
            url:"/instruments",
            controller: "listInstruments",
            controllerAs: "vm",
            templateUrl: "instruments/listInstruments.html"
        });
    });

})();