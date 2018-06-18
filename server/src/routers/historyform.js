const express = require('express');
const bodyParser = require('body-parser');

const historyModel = require('../model/historyform.js');

const router = express.Router();

router.use(bodyParser.json());

// List
router.get('/history', function(req, res, next) {
    historyModel.list(req.query.user_account).then(historys => {
        res.json(historys);
    }).catch(next);
});

/*DB
router.get('/history', function(req, res, next) {
    const {user_account} = req.query;
    postModel.list(user_account).then(historys => {
        res.json(historys);
    }).catch(next);
});
*/


module.exports = router;
