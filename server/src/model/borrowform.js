const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function list(user_account = '') {
  //  user_account = 'admin1'; // 登入此帳號的人(借款人))
  console.log(user_account ,'borrow form');
    const where = [];

    if(user_account){
        where.push(`lender = '${user_account}'`);
        where.push(`paid = false`);
    }
    const sql = `
        SELECT record_id,name,expect_date,amount
        FROM record
        INNER JOIN users ON record.borrower = users.account
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
    `;

    return db.any(sql);
}
function complete(id)
{
  const sql = `
      UPDATE record SET paid = true where record_id = ${id}
  `
  return db.none(sql);
}
function deletes(id)
{
  const sql = `
      DELETE FROM record where record_id = ${id}
  `
  return db.none(sql);
}
// function list(user_account = '') {
//     return new Promise((resolve, reject) => {
//         if (!fs.existsSync('data-borrow.json')) {
//             fs.writeFileSync('data-borrow.json', '');
//         }

//         fs.readFile('data-borrow.json', 'utf8', (err, data) => {
//             if (err) reject(err);

//             let borrows = data ? JSON.parse(data) : [];
//             resolve(borrows);
//         });
//     });
// }


module.exports = {
    list,
    complete,
    deletes
};
