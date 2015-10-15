/**
 * Created by Martin on 2015-08-31.
 */

(function(){
    'use strict';

    angular
        .module('app.instrument')
        .controller('listInstruments', listInstruments);

    listInstruments.$inject = ['dataservice'];

    function listInstruments (dataservice) {
        var vm = this;
        vm.instruments = [];
        vm.getInstrumentsOnMarket = getInstrumentsOnMarket;
        vm.setSelectedInstrument = setSelectedInstrument;
        vm.selectedInstrument = null;
        vm.markets = [
            {'marketCode': 'x', 'name': 'Välj marknad'},
            {'marketCode': 'STO', 'name': 'Stockholmsbörsen'}
        ];


        function getInstrumentsOnMarket(query) {
                return dataservice.getInstrumentsOnMarket(query).then(function (data) {
                    vm.instruments = data;
                    return vm.instruments;
                });
        }
        function setSelectedInstrument(instrument) {
            dataservice.setSelectedInstrument(instrument)
        }


    }
})();