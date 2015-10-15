/**
 * Created by Martin on 2015-09-23.
 */
'use strict';

var advisorModel = new Schema({

    employeeId: {
        type : String,
        required : true
    },
    advisorName : {
        type : String,
        required : true
    },
    branchId : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    },
    isActive: Boolean

});
module.exports = mongoose.model('Customer', advisorModel /*, collection Name*/ );
