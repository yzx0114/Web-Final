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
function create(id){
   const sql1=
    `INSERT INTO alerts(record_id,iknow)
    VALUES ('${id}',false)
    `
    ;
    db.none(sql1);

    const sql2=
    `UPDATE record
    SET read=true
    WHERE record_id='${id}';
    `;
    db.none(sql2);

    const sql3=
    `SELECT alerts.record_id,name,expect_date,repay_date,amount
    FROM alerts
    INNER JOIN record ON  record.record_id ='${id}'
    INNER JOIN users ON lender=users.account
    `;
     return db.any(sql3);
}
function list(myUserName){
  let d = new Date();
  let rd =  d.toISOString().slice(0,10);
  
    const sql1 =
    `
      INSERT INTO alerts (record_id)
      SELECT record.record_id FROM record WHERE record.expect_date <= '${rd}' AND paid = false AND read = false AND confirm = true
    `;
    db.none(sql1);
    const sql2 =
    `
      UPDATE record set read = true where record.expect_date <= '${rd}' AND paid = false AND read = false AND confirm = true
    `;
    db.none(sql2);
    const sql3=
    `SELECT alerts.record_id,name,expect_date,repay_date,amount
    FROM alerts
    INNER JOIN record ON alerts.record_id = record.record_id AND record.borrower='${myUserName}'
    INNER JOIN users ON lender = users.account
    `;
    return db.any(sql3);
}
function cancel(id){

    const sql1=
    `DELETE FROM alerts
     WHERE record_id='${id}'
    `;
    db.none(sql1);
    const sql2=
    `UPDATE record
    SET read=false
    WHERE record_id='${id}'
    `;
    console.log(sql2);
    db.none(sql2);
    const sql3=
    `SELECT record_id FROM alerts
    `;
    return db.any(sql3);
}

module.exports = {
    list,
    create,
    cancel
};
