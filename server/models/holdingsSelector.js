/**
 * Created by Martin on 2015-09-19.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var holdingsSelectorModel = new Schema({


    definedBy: {
        type : String
    },
    includeAccounts: {
        type : Array
    },
    includeInstrumentTypes: {
        type : Array
    },
    createdOn : {
        type : Date,
        default: Date.now
    }
});

// Export model
module.exports = mongoose.model('HoldingsSelector', holdingsSelectorModel);