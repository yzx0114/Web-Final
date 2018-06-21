if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}
// function create(name,money,date){
//     const sql = 
//         `INSERT INTO alerts($<this:name>) 
//         VALUES ($<this:value>) 
//         RETURNING *`
//     ;
//     return db.none(sql,{name,money,date});
// }
function create(lender,borrower,expect_date,money){
   const sql=
    `INSERT INTO alerts(lender,borrower,expect_date,money)
    VALUES ($<lender>,$<borrower>,$<expect_date>,$<money>)
    RETURNING *`
    ;
    console.log("in model");
    return db.one(sql,{lender,borrower,expect_date,money});
    
}
function list(){
    const sql=
    `SELECT * 
    FROM alerts
    ORDER BY date DESC
    `;
    return db.any(sql);
}
module.exports = {
    list,
    create
};