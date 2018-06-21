const express = require('express');
const bodyParser = require('body-parser');

const loginModel = require('../model/login.js');
const registerModel = require('../model/register.js')

const router = express.Router();

router.use(bodyParser.json());


router.post('/login', function(req, res, next) {
    const {account, password} = req.body;
    if (!account || !password) {
        const err = new Error('Account and Password are required');
        err.status = 400;
        throw err;
    }
    loginModel.login(account, password).then(login => {
        console.log(login);
        res.json(login);
    }).catch(next);
});

router.post('/register', function(req, res, next) {
    const {name, account, password} = req.body;
    if (!name || !account || !password) {
        const err = new Error('Account and Password are required');
        err.status = 400;
        throw err;
    }
    registerModel.register(name, account, password).then(login => {
        console.log(login);
        res.json(login);
    }).catch(next);
});
module.exports = router;
