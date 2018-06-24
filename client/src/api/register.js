import axios from 'axios';
import uuid from 'uuid/v4';
import moment from 'moment';
import 'babel-polyfill';
//const todoBaseUrl = 'http://weathermood-11.us-west-2.elasticbeanstalk.com/api';
const loginBaseUrl = 'http://salmoney-dev.us-west-2.elasticbeanstalk.com/api';
//const todoKey = 'todos';
export function register(name, account, password) {
    /*return new Promise((resolve, reject) => {
        resolve(_createTodo(mood, text));
    });*/
    let url = `${loginBaseUrl}/register`;

    console.log(`Login to: ${url}`);
  
    return axios.post(url, {
        name,
        account,
        password
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}
