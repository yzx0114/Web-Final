require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaSql = `
    CREATE EXTENSION IF NOT EXISTS pg_trgm;

    -- Drop (droppable only when no dependency)
    
    DROP TABLE IF EXISTS remind;
    DROP TABLE IF EXISTS record;
    DROP TABLE IF EXISTS users;

    
    -- Create
    CREATE TABLE users 
	(
		account			text PRIMARY KEY NOT NULL,
		password		text NOT NULL,
		name			text NOT NULL
    );
    
    CREATE TABLE record
	(
		record_id 		serial PRIMARY KEY NOT NULL,
		lender 		    text REFERENCES users (account) NOT NULL,
		borrower        text REFERENCES users (account) NOT NULL,
		expect_date		date NOT NULL,
		repay_date 		date DEFAULT NULL,
		amount			integer NOT NULL,
		paid			boolean NOT NULL DEFAULT FALSE
    );
    
	CREATE TABLE remind
	(
		remind_id		serial PRIMARY KEY NOT NULL,
		sender			text REFERENCES users (account) NOT NULL,
		receiver		text REFERENCES users (account) NOT NULL,
		record_id		integer REFERENCES record (record_id) NOT NULL		
    );
    
  `;

const dataSql = `
    -- Populate dummy posts
    INSERT INTO users (account, password, name)
    VALUES ('admin', '12345678', 'QAQ');

    INSERT INTO record (lender, borrower, expect_date, repay_date, amount, paid)
    VALUES ('admin', 'admin', '2017-08-08', '2018-08-08', 100, FALSE);
`;

db.none(schemaSql).then(() => {
    console.log('Schema created');
    db.none(dataSql).then(() => {
        console.log('Data populated');
        pgp.end();
    });
}).catch(err => {
    console.log('Error creating schema', err);
});
