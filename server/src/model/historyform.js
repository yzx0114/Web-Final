const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(user_account = '') {
    user_account = 'admin1'; // 登入此帳號的人(借款人))
    
    const sql = `
        SELECT record_id,name,expect_date,amount
        FROM record
        INNER JOIN users ON record.lender = users.account
        WHERE borrower = 'admin1' OR lender = 'admin1' AND paid = true
    `;
    
    console.log(sql);
   
    return db.any(sql, [user_account]);
}

/*function list(user_account = '') {
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
}*/

module.exports = {
    list
};