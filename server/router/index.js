/**
 * Created by Martin on 2015-09-19.
 */
var express = require('express');
var router = express.Router();
var fpCtrl = require ('../controllers/fp.server.controller.js');


/*GET home page */
router.get('/', function(req, res) {
    res.sendFile(__dirname + '../../client/public/index.html');
    console.log('Sent index to client');
});

/*GET Define portfolio page */
router.get('/newportfolio', function(req,res){
    return fpCtrl.getPortfolio(req, res);
});

/*POST Define portfolio page */
router.post('/newportfolio', function(req,res) {
    return fpCtrl.create(req, res);
});

//module.exports = router;