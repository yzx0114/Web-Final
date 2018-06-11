const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

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
    return new Promise((resolve, reject) => {
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
    });
}
module.exports = {
    create
};