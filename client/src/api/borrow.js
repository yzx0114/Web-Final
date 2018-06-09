import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';

export function listBorrowRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listBorrowRecords());
        }, 500);
    });
}


// Simulated server-side code
function _listBorrowRecords() {
    let borrowRecords = [
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
    return borrowRecords;
};