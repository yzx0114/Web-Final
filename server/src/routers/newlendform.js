const express = require('express');
const bodyParser = require('body-parser');

const newlendModel = require('../model/newlendform.js');
const accessController = require('../middleware/access-controller.js');

const router = express.Router();
router.use(accessController);
router.use(bodyParser.json());

//List
router.get('/newlend', function(req, res, next) {
    newlendModel.list().then(newlends => {
        res.json(newlends);
    }).catch(next);
});



router.use(bodyParser.json());

// List
// router.get('/newlend', function(req, res, next) {
//     newlendModel.list().then(newlends => {
//         res.json(newlends);
//     }).catch(next);
// });

//Create
router.post('/newlend', function(req, res, next) {
    const {name, money, date} = req.body;
    if (!name || !money || !date) {
        const err = new Error('error');
        err.status = 400;
        throw err;
    }
    newlendModel.create(name, money, date).then(newlend => {
        res.json(newlend);
    }).catch(next);
});

module.exports = router;
