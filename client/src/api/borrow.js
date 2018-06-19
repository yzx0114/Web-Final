import axios from 'axios';

const borrowBaseUrl = 'http://localhost:8060/api';

export function listBorrowRecords(user_account = '') {
    
    let url = `${borrowBaseUrl}/borrow`;
    if (user_account)x
        url += `?user_account=${user_account}`;

    console.log(`Making GET request to: ${url}`);
    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
/*
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
};*/