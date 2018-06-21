const express = require('express');
const bodyParser = require('body-parser');

const accessController = require('../middleware/access-controller.js');

const alertModel = require('../model/alertList.js');

const router = express.Router();

router.use(accessController);
router.use(bodyParser.json());

//List
router.get('/alert', function(req, res, next) {
    alertModel.list().then(alerts => {
         res.json(alerts);
    }).catch(next);
});
router.use(accessController);
//Create
router.post('/alert', function(req, res, next) {
    console.log("server get post cmd");
    let lender="蔡旻翰";
    let borrower="貓咪上樹";
    const {name, money, expect_date} = req.body;
    if (!name || !money || !expect_date) {
        const err = new Error('error');
        err.status = 400;
        throw err;
    }
    alertModel.create(lender,name,expect_date,money).then(newAlert => {
         res.json(newAlert);
    }).catch(next);
});

module.exports = router;
