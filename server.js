// Created by Martin on 2015-09-06.
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// Connect to MongoDB...
mongoose.connect('mongodb://localhost/fp');
console.log("Connected to database");

var Portfolio = require('./server/models/portfolioModel');
var Market = require('./server/models/marketModel');

var app = express();

var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.route('/portfolios')
    .get(function(req, res) {
        var query = req.query;
        console.log(req.query);
        if(req.query.portfolioOwnerName) {
            Portfolio.find({
                'portfolioOwnerName': {
                    '$regex': query.portfolioOwnerName,
                    '$options': 'i'
                }
            }, function (err, portfolios) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(portfolios);
                }
            });
        }
        else if (req.query.portfolioName) {
            Portfolio.find({
                'portfolioName': {
                    '$regex': query.portfolioName,
                    '$options': 'i'
                }
            }, function (err, portfolios) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(portfolios);
                }
            });
        }
    })
    .post(function(req, res) {
        var portfolio = new Portfolio(req.body);
        console.log(req.body);
        portfolio.save(function (err, portfolio) {
            if(err)
                res.status(403).send(err);
            else {res.status(201).send(portfolio);
            }
        });


    });

router.route('/instruments')
    .get(function(req, res) {
        console.log(req.query);
        var query = req.query;

        Market.find({'marketCode': req.query.marketCode},
            function(err, market){
            if(err)
                res.status(500).send(err);
            else {
                res.json(market);
            }
        });
    });




app.use('/api', router);
/*GET home page */

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/client/public/index.html');
    console.log('Sent index to client');
});

app.use('/', express.static(__dirname + '/client/public/'));
app.use('/node_modules', express.static(__dirname + '/nodemodules/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//Drar igång servern
app.listen(port, function() {
    console.log('Running my app on: ' + port);
});

module.exports = app;
