const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(user_account = '', target_account) {
  //  user_account = 'admin1'; // 登入此帳號的人(借款人))
    const where = [];
    where.push(`WHERE paid = true AND (borrower = '${user_account}'`);
    if(target_account != 'unknown') where.push(`AND lender = '${target_account}') OR`);
    else where.push(') OR');
    where.push(` (lender = '${user_account}'`)
    if(target_account != 'unknown') where.push(`AND borrower= '${target_account}')`);
    else where.push(')');
    const sql = `
        SELECT record_id,name,expect_date,repay_date,amount,
        CASE
            WHEN (borrower = '${user_account}') THEN 'borrower'
            WHEN (lender = '${user_account}') THEN 'lender'
            END AS who
        FROM record
        INNER JOIN users ON CASE WHEN borrower = '${user_account}' THEN record.lender = users.account ELSE record.borrower = users.account END
        ${where.join('')}
        ORDER BY repay_date
        `;


    return db.any(sql);
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
