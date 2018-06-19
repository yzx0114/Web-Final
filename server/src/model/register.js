const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function register(name, account, password)
{
	const sql =`
    INSERT INTO users values('${name}','${account}','${password}')
	`;
	toprint = db.none(sql); //to see what db any get
  return toprint;
}
module.exports =
{
  register
};
