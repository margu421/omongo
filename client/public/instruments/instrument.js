
(function() {
    'use strict';

    angular
        .module('app.instrument')
        .controller('instrument', instrument);

    instrument.$inject = ['$http','dataservice'];

    function instrument ($http, dataservice) {
        var vm = this;
        vm.instrument = {};
        vm.getInstrument = getInstrument;

        getInstrument(dataservice.getSelectedInstrument());

        function extractClosingPrices (array) {
            var closingPrices = [];
            for (var i = 0; i < array.length; i++) {
                var closingPrice = array[i];
                closingPrices.push([Date.parse(closingPrice[0]), closingPrice[4]]);
            }
            vm.chartConfig.series[0].data = closingPrices;
            vm.chartConfig.series[0].name = vm.instrument.dataset.name;
        }

        function getInstrument (instrumentkey) {

            console.log(instrumentkey);
            $http.get('https://www.quandl.com/api/v3/datasets/' + instrumentkey + '.json?auth_token=HFk8WJ4U41zh3F5gscni').then(function (response) {
                vm.instrument = response.data;
                console.log(vm.instrument);
                extractClosingPrices(vm.instrument.dataset.data);
                return vm.instrument;
            })
                .catch(function(message) {
                    console.log(message);
                });
        }

        //This is not a highcharts object. It just looks a little like one!

        vm.chartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'line'
                },
                xAxis: {
                    type: 'datetime'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal highcharts series options.
            series: [{
                type: 'line'
            }],
            //Title configuration (optional)
            title: {
                text: 'Price development'
            },
            //Boolean to control showng loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
            xAxis: {
                //currentMin: 0,
                //currentMax: 10000,
                title: {text: 'values'}
            },
            //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.


            useHighStocks: false,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            size: {
            },
            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };
    }

})();

