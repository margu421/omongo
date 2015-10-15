/**
 * Created by Martin on 2015-09-19.
 */
'use strict';

var Portfolio = require('../models/portfolioModel.js');

exports.create = function (req, res ) {
    var entry = new Portfolio ({
        portfolioName : req.body.portfolioName,
        portfolioOwnerName: req.body.portfolioOwnerName,
        definedBy: req.body.definedBy,
        includeAccounts: req.body.includeAccounts,
        includeInstrumentTypes: req.body.includeInstrumentTypes
         });

    entry.save();

    //redirect to home page
    res.redirect(301, '/');

};

exports.getPortfolio = function (req, res) {
    res.render('newportfolio', {title: 'New portfolio'});
};