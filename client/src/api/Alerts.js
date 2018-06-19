import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';
const alertsKey = 'alerts';

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
export function createAlert(name,money,date){
    
    return new Promise((resolve,reject)=>{
        resolve(_createAlert(name,money,date));
    });
}

function _createAlert(name,money,date){
    
    const newAlert={
        id:uuid(),
        name:name,
        money:money,
        date:date
    };
    
    
    const Alerts=[
        newAlert,
        ..._listAlerts()
    ];
    localStorage.setItem(alertsKey,JSON.stringify(Alerts));
    return newAlert;
}