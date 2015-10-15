

function getInstruments() {
    return $http.get('https://www.quandl.com/api/v3/datasets/GOOG/STO_NN_B.json?auth_token=HFk8WJ4U41zh3F5gscni').then(function (response) {
        console.log(response);
        return response.data;
    })
        .catch(function(message) {
            console.log(message);
        });

}