import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';

export function listHistoryRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listHistoryRecords());
        }, 500);
    });
}


// Simulated server-side code
function _listHistoryRecords() {
    let historyRecords = [
        {   
            id : 1,
            name : 'Turtle',
            money : 100,
            date : '2018-04-22',
            repayDate: '2018-05-22'
        },
        {   
            id : 2,
            name : 'Shan',
            money : 10,
            date : '2018-04-23',
            repayDate: '2018-05-23'
        }
    ]; 
    return historyRecords;
};