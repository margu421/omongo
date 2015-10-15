/**
 * Created by Martin on 2015-09-23.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;


var marketModel = new Schema({

    ticker  : {
        type : String,
        required : true
    },
    quandlCode : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }

});
module.exports = mongoose.model('Market', marketModel /*, collection Name*/ );
