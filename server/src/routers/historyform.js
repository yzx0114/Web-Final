const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const historyModel = require('../model/historyform.js');

const router = express.Router();
router.use(accessController);
router.use(bodyParser.json());


router.get('/history', function(req, res, next) {
    const {user_account, target_account} = req.query;
    historyModel.list(user_account, target_account).then(historys => {
        res.json(historys);
    }).catch(next);
});

/*
router.get('/history', function(req, res, next) {
    historyModel.list(req.query.user_account).then(historys => {
        res.json(historys);
    }).catch(next);
});*/

module.exports = router;
