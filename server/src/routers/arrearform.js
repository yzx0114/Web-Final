const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const arrearModel = require('../model/arrearform.js');

const router = express.Router();
router.use(accessController);
router.use(bodyParser.json());

// List
router.get('/arrear', function(req, res, next) {
    arrearModel.list(req.query.user_account).then(arrears => {
        res.json(arrears);
    }).catch(next);
});

/*DB
router.get('/arrear', function(req, res, next) {
    const {user_account} = req.query;
    arrearModel.list(user_account).then(arrears => {
        res.json(arrears);
    }).catch(next);
});
*/

module.exports = router;
