const express = require('express');
const bodyParser = require('body-parser');

const borrowModel = require('../model/borrowform.js');

const router = express.Router();

router.use(bodyParser.json());

// List
router.get('/borrow', function(req, res, next) {
    borrowModel.list(req.query.user_account).then(borrows => {
        res.json(borrows);
    }).catch(next);
});


module.exports = router;
