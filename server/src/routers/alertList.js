const express = require('express');
const bodyParser = require('body-parser');

const accessController = require('../middleware/access-controller.js');

const alertModel = require('../model/alertList.js');

const router = express.Router();

router.use(accessController);
router.use(bodyParser.json());

//List
router.post('/listAlert', function(req, res, next) {
    const {myUserName} = req.body;
    
    alertModel.list(myUserName).then(alerts => {
        res.json(alerts);
    }).catch(next);
});
router.use(accessController);
//Create
router.post('/createAlert', function(req, res, next) {
    const {newAlert} = req.body;
   
    if (!newAlert) {
        const err = new Error('error');
        err.status = 400;
        throw err;
    }
    alertModel.create(newAlert).then(newAlert => {
         res.json(newAlert);
    }).catch(next);
});
router.post('/cancelAlert', function(req, res, next) {
    const {id} = req.body;
    if (!id) {
        const err = new Error('error');
        err.status = 400;
        throw err;
    }
    alertModel.cancel(id);
});
module.exports = router;
