const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

function list(user_account = '') {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data-borrow.json')) {
            fs.writeFileSync('data-borrow.json', '');
        }

        fs.readFile('data-borrow.json', 'utf8', (err, data) => {
            if (err) reject(err);
            
            let borrows = data ? JSON.parse(data) : [];
            resolve(borrows);
        });
    });
}

module.exports = {
    list
};