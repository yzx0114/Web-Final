const express = require('express');
const bodyParser = require('body-parser');


const showModel = require('../model/friend.js')

const router = express.Router();

router.use(bodyParser.json());


router.get('/friend', function(req, res, next) {
    const {user_account} = req.body;
    if (!user_account) {
        const err = new Error('Account and Password are required');
        err.status = 400;
        throw err;
    }
    showModel.show(user_account).then(login => {
        console.log(login);
        res.json(login);
    }).catch(next);
});

module.exports = router;
