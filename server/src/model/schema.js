require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaSql = `

    -- Drop (droppable only when no dependency)
    DROP TABLE IF EXISTS user;
    DROP TABLE IF EXISTS record;
    DROP TABLE IF EXISTS remind;

    DROP INDEX IF EXISTS record_idx_ts;
    DROP INDEX IF EXISTS record_idx_text;

    DROP INDEX IF EXISTS remind_idx_ts;
    DROP INDEX IF EXISTS remind_idx_text;


    
    -- Create
    CREATE TABLE user 
	{
		account			text PRIMARY KEY NOT NULL,
		password		text NOT NULL,
		name			text NOT NULL
    };
    
    CREATE TABLE record
	{
		record_id 		serial PRIMARY KEY NOT NULL,
		lender 		    text REFERENCES user (account) NOT NULL,
		borrower        text REFERENCES user (account) NOT NULL,
		expect_date		date NOT NULL,
		repay_date 		date DEFAULT NULL,
		amount			integer NOT NULL,
		paid			boolean NOT NULL DEFAULT FALSE
    };
    
	CREATE TABLE remind
	{
		remind_id		serial PRIMARY KEY NOT NULL,
		sender			text REFERENCES user (account) NOT NULL,
		receiver		text REFERENCES user (account) NOT NULL,
		record_id		integer REFERENCES record (record_id) NOT NULL		
    };
    
    CREATE INDEX record_idx_ts ON record USING btree(ts);
    CREATE INDEX record_idx_text ON record USING gin(text gin_trgm_ops);

    CREATE INDEX remind_idx_ts ON remind USING btree(ts);
    CREATE INDEX remind_idx_text ON remidnd USING gin(text gin_trgm_ops);
`;

const dataSql = `
    -- Populate dummy posts
    INSERT INTO user (account, password, name)
    VALUES ('admin', '12345678', 'QAQ');
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
