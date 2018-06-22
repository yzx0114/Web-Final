import axios from 'axios';

const borrowBaseUrl = 'http://localhost:8060/api';
export function complete(id){
    let url = `${borrowBaseUrl}/complete`;
    return axios.post(url, {
        id
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
export function deletes(id){
    let url = `${borrowBaseUrl}/deletes`;
    return axios.post(url, {
        id
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
export function listBorrowRecords(user_account = '') {

    let url = `${borrowBaseUrl}/borrow`;
    let query = [];
    if (user_account)
        query.push(`user_account=${user_account}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        else{
            // Convert Date format
            for(var i=0; i<res.data.length; i++){
                const date = new Date(res.data[i].expect_date);
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var dt = date.getDate();
                if (dt < 10) {
                    dt = '0' + dt;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                res.data[i].expect_date = year +　'-' + month + '-' + dt;
            }
        }
        return res.data;
    });


    /*let url = `${borrowBaseUrl}/borrow`;
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
