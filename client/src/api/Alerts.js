import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';
const alertsKey = 'alerts';
const alertBaseUrl ='http://localhost:8060/api';
var myUserName=localStorage.getItem('Account');

export function listAlerts(){
    let url = `${alertBaseUrl}/listAlert`;
    return axios.post(url,{myUserName}).then(function(res){
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    }).catch(err=>{
        console.error("Error sending Alert Request",err);
    });
}

// export function listAlerts(){
//     return new Promise((resolve, reject)=>{
//         resolve(_listAlerts());
//     }); 
// }
// function _listAlerts(){
    
//     let alertItems = localStorage.getItem(alertsKey);
//     let alerts;
    
//     if(alertItems){
//         alerts = JSON.parse(alertItems);
//     }
//     else{
//         localStorage.setItem(alertsKey,JSON.stringify([]));
//     }
    
//     return alerts;
// }

export function createAlert(borrower,money,expect_date){
    let url = `${alertBaseUrl}/createAlert`;
    console.log(`Make Alert request to :${url}`);
    let newAlert = _createAlert(myUserName,borrower,money,expect_date);
    return axios.post(url,{newAlert}).then(function(res){
        if(res.status !==200)
            throw new Error(`Unexcept response code: ${res.status}`);
        return newAlert;
    });

}
/*
export function createAlert(name,money,date){
    
    return new Promise((resolve,reject)=>{
        resolve(_createAlert(name,money,date));
    });
}
*/
function _createAlert(lender,borrower,money,expect_date){
    const newAlert={
        id:uuid(),
        lender:lender,
        borrower:borrower,
        expect_date:expect_date,
        money:money
    };
    return newAlert;
}
export function cancelAlert(id){
    let url = `${alertBaseUrl}/cancelAlert`;
    console.log(`Make cancelAlert request to :${url}`);
    return axios.post(url,{id}).then(function(res){
        if(res.status !==200)
            throw new Error(`Unexcept response code: ${res.status}`);
    });

}
