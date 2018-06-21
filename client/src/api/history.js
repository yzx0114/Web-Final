import axios from 'axios';

const historyBaseUrl = 'http://localhost:8060/api';

export function listHistoryRecords(user_account = '') {
    
    let url = `${historyBaseUrl}/history`;
    let query = [];
    if (user_account)
        query.push(`user_account=${user_account}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
    
    /*let url = `${historyBaseUrl}/history`;
    if (user_account)
        url += `?user_account=${user_account}`;

    console.log(`Making GET request to: ${url}`);
    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });*/
    
}

/*
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
};*/