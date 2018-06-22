const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(user_account) {
    //user_account = 'admin2'; // 登入此帳號的人(借款人))
    const where = [];
    console.log(user_account,'hello');
    if(user_account){
        where.push(`borrower = '${user_account}'`);
        where.push(`paid = false`);
    }
    const sql = `
        SELECT record_id,name,expect_date,amount
        FROM record
        INNER JOIN users ON record.lender = users.account
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
    `;

    return db.any(sql);
}
function confirm(id)
{
  const sql = `
      UPDATE record SET confirm = true where record_id = ${id}
  `
  return db.none(sql);
}
/*function list(user_account = '') {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync('data-borrow.json')) {
            fs.writeFileSync('data-borrow.json', '');
        }

        fs.readFile('data-borrow.json', 'utf8', (err, data) => {
            if (err) reject(err);

            let arrears = data ? JSON.parse(data) : [];
            resolve(arrears);
        });
    });
}*/

module.exports = {
    list,
    confirm
};
