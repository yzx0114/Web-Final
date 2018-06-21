const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function login(account, password)
{
	const sql =`
		SELECT COUNT(*) from users
		WHERE account = '${account}' AND password = '${password}'
	`;
	toprint = db.any(sql); //to see what db any get
  return toprint;
}
module.exports =
{
  login
};
