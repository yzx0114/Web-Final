const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(user_account, target_account) {
    //user_account = 'admin2'; // 登入此帳號的人(借款人))
    const where = [];
    if(user_account){
        where.push(`borrower = '${user_account}'`);
        where.push(`paid = false`);
    }
    if(target_account !== 'unknown')
    {
      where.push(`lender = '${target_account}'`);
    }
    const sql = `
        SELECT record_id,name,expect_date,amount,confirm,payback
        FROM record
        INNER JOIN users ON record.lender = users.account
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY expect_date
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
function payback(id,payBack)
{
  const sql = `
      UPDATE record SET payback = '${payBack}' where record_id = ${id}
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
    confirm,
    payback
};
