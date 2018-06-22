const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

require('../../config.js');

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list() {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data-newlend.json')) {
            fs.writeFileSync('data-newlend.json', '');
        }

        fs.readFile('data-newlend.json', 'utf8', (err, data) => {
            if (err) reject(err);

            let newlend = data ? JSON.parse(data) : [];
            resolve(newlend);
        });
    });
}

function create(name, money, date) {
    console.log("hiihihihi");
    /*return new Promise((resolve, reject) => {
        const newlend = {
            id: uuid(),
            name: name,
            money: money,
            date: date
        };

        list().then(newlends => {
            newlends = [
                newlend,
                ...newlends
            ];
            fs.writeFile('data-newlend.json', JSON.stringify(newlends), err => {
                if (err) reject(err);

                resolve(newlend);
            });
        });
    });*/

    const sql = `
    INSERT INTO record (lender, borrower, expect_date, amount)
    VALUES ('shan', $<name>, $<date>,$<money>)
    RETURNING *
  `;
    console.log(name, money, date);
    return db.one(sql, {
        name,
        money,
        date
    });
}
module.exports = {
    create,
    list
};