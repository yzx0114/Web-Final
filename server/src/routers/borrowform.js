const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const borrowModel = require('../model/borrowform.js');

const router = express.Router();
router.use(accessController);
router.use(bodyParser.json());
// List
router.get('/borrow', function(req, res, next) {
    borrowModel.list(req.query.user_account).then(borrows => {
        res.json(borrows);
    }).catch(next);
});

/*DB
router.get('/borrow', function(req, res, next) {
    const {user_account} = req.query;
    postModel.list(user_account).then(borrows => {
        res.json(borrows);
    }).catch(next);
});
*/

module.exports = router;
