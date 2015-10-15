/**
 * Created by Martin on 2015-09-23.
 */
'use strict';

var customerModel = new Schema({

    personalId: {
        type : String,
        required : true
    },
    customerName : {
        type : String,
        required : true
    },
    advisorId : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    },
    isActive: Boolean

});
module.exports = mongoose.model('Customer', customerModel /*, collection Name*/ );
