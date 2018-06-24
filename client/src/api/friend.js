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
export function listFriend(user_account) {

    let url = `${arrearBaseUrl}/friend`;
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
        }
        return res.data;
    });
}
