import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';
const alertsKey = 'alerts';

const alertBaseUrl ='http://localhost:8060/api';
export function listAlerts(){
    let url = `${alertBaseUrl}/alert`;
    return axios.get(url).then(function(res){
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.date;
    }).catch(err=>{
        console.error("Error sending Alert Request",err);
    });
}
/*
export function listAlerts(){
    return new Promise((resolve, reject)=>{
        resolve(_listAlerts());
    }); 
}
function _listAlerts(){
    
    let alertItems = localStorage.getItem(alertsKey);
    let alerts;
    
    if(alertItems){
        alerts = JSON.parse(alertItems);
    }
    else{
        localStorage.setItem(alertsKey,JSON.stringify([]));
    }
    
    return alerts;
}
*/
export function createAlert(name,money,expect_date){

    let url = `${alertBaseUrl}/alert`;
    console.log(`Make Alert request to :${url}`);
    return axios.post(url,{
        name,money,expect_date
    }).then(function(res){
        if(res.status !==200)
            throw new Error(`Unexcept response code: ${res.status}`);
        
        return _createAlert(res.data);
    });

}
/*
export function createAlert(name,money,date){
    
    return new Promise((resolve,reject)=>{
        resolve(_createAlert(name,money,date));
    });
}
*/
function _createAlert(data){
    
    const newAlert={
        id:uuid(),
        lender:data.lender,
        borrower:data.borrower,
        date:data.expect_date,
        money:data.money
    };
    const Alerts=[
        newAlert,
        ..._listAlerts()
    ];
    return newAlert;
}