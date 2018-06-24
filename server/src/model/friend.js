const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function show(user_account)
{
	const sql =`
    SELECT name,amount
    CASE
        WHEN (borrower = '${user_account}') THEN 'borrower'
        WHEN (lender = '${user_account}') THEN 'lender'
        END AS who
    FROM record
    INNER JOIN users ON CASE WHEN borrower = '${user_account}' THEN record.lender = users.account ELSE record.borrower = users.account END
	`;
	toprint = db.any(sql); //to see what db any get
  return toprint;
}
module.exports =
{
  show
};
