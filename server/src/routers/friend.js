const express = require('express');
const bodyParser = require('body-parser');


const showModel = require('../model/friend.js')

const router = express.Router();

router.use(bodyParser.json());


router.get('/friend', function(req, res, next) {
    const {user_account} = req.query;
    console.log(req.query);
    if (!user_account) {
        const err = new Error('Account and Password are required');
        err.status = 400;
        throw err;
    }
    showModel.show(user_account).then(friend=> {
        console.log(friend);
        res.json(friend);
    }).catch(next);
});

module.exports = router;
