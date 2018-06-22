import axios from 'axios';

const arrearBaseUrl = 'http://localhost:8060/api';

export function Confirm(id){
  let url = `${arrearBaseUrl}/confirm`;
  return axios.post(url, {
      id
  }).then(function(res) {
      if (res.status !== 200)
          throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
  });
}
export function listArrearRecords(user_account) {

    let url = `${arrearBaseUrl}/arrear`;
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

    /*let url = `${arrearBaseUrl}/arrear`;
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
};*/
