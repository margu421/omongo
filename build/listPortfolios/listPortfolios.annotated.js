!function(){function o(o){function t(){return o.getPortfolios().then(function(o){return i.portfolios=o,i.portfolios})}var i=this;i.portfolios=[],i.getPortfolios=t,t()}angular.module("app.listPortfolios").controller("listPortfolios",o),o.$inject=["dataservice"]}();