const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

function list(user_account = '') {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data-history.json')) {
            fs.writeFileSync('data-history.json', '');
        }

        fs.readFile('data-history.json', 'utf8', (err, data) => {
            if (err) reject(err);
            
            let historys = data ? JSON.parse(data) : [];
            resolve(historys);
        });
    });
}

module.exports = {
    list
};