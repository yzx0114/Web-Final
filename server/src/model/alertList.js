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
function create(newAlert){
   const sql=
    `INSERT INTO alerts(id,lender,borrower,expect_date,money)
    VALUES ('${newAlert.id}','${newAlert.lender}','${newAlert.borrower}','${newAlert.expect_date}','${newAlert.money}')
    `
    ;
    return db.none(sql,newAlert);
    
}
function list(myUserName){
    const sql=
    `SELECT * 
    FROM alerts
    WHERE borrower= '${myUserName}'
    ORDER BY money DESC
    `;
    return db.any(sql);
}
function cancel(id){
    const sql=
    `DELETE FROM alerts 
     WHERE id='${id}';
    `;
    return db.none(sql,id);
}

module.exports = {
    list,
    create,
    cancel
};