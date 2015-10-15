/**
 * Created by Martin on 2015-09-19.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var portfolioModel = new Schema({

    portfolioOwnerId: String,

    portfolioType : {
        type : String
       // required: true
    },

    portfolioName : {
        type : String
    },
    portfolioOwnerName: {
        type : String
        //required: true
        //validate : portfolioOwnerValidator
    },
    accounts:[],

    createdOn : {
        type : Date,
        default: Date.now
    }
});

// Export model
module.exports = mongoose.model('Portfolio', portfolioModel);