const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const arrearModel = require('../model/arrearform.js');

const router = express.Router();
router.use(accessController);
router.use(bodyParser.json());


router.get('/arrear', function(req, res, next) {
    const {user_account, target_account} = req.query;
    arrearModel.list(user_account, target_account).then(arrears => {
        res.json(arrears);
    }).catch(next);
});

router.post('/confirm',function(req, res, next) {
    const {id} = req.body;
    arrearModel.confirm(id).then(arrears => {
        res.json(arrears);
    }).catch(next);
});
router.post('/payback',function(req, res, next) {
    const {id,payBack} = req.body;
    arrearModel.payback(id,payBack).then(payback => {
        res.json(payback);
    }).catch(next);
});

/*
router.get('/arrear', function(req, res, next) {
    arrearModel.list(req.query.user_account).then(arrears => {
        res.json(arrears);
    }).catch(next);
});*/

module.exports = router;
