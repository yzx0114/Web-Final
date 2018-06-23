const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const borrowModel = require('../model/borrowform.js');

const router = express.Router();
router.use(accessController);
router.use(bodyParser.json());

router.get('/borrow', function(req, res, next) {
    const {user_account} = req.query;
    borrowModel.list(user_account).then(borrows => {
        console.log(borrows);
        res.json(borrows);
    }).catch(next);
});

router.post('/complete',function(req, res, next) {
    const {id} = req.body;
    let date = new Date();
    let dstr = date.getFullYear() + '-' +(date.getMonth() + 1) + '-' + date.getDate();
    borrowModel.complete(id, dstr).then(arrears => {
        res.json(arrears);
    }).catch(next);
});

router.post('/deletes',function(req, res, next) {
    const {id} = req.body;
    borrowModel.deletes(id).then(arrears => {
        res.json(arrears);
    }).catch(next);
});
/*
router.get('/borrow', function(req, res, next) {
    borrowModel.list(req.query.user_account).then(borrows => {
        res.json(borrows);
    }).catch(next);
});*/

module.exports = router;
