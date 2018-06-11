import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';

export function listArrearRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listArrearRecords());
        }, 500);
    });
}


// Simulated server-side code
function _listArrearRecords() {
    let arrearRecords = [
        {   
            id : 1,
            name : 'Turtle',
            money : 100,
            date : '2018-04-22'
        },
        {   
            id : 2,
            name : 'Shan',
            money : 10,
            date : '2018-04-23'
        }
    ]; 
    return arrearRecords;
};