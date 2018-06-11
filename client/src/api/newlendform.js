import axios from 'axios';

const newlendBaseUrl = 'http://localhost:8060/api';

export function createNewlend(name, money, date) {
    let url = `${newlendBaseUrl}/newlend`;

    console.log(`Making Newlend request to: ${url}`);
    console.log(name, money, date);
    return axios.post(url, {
        name,
        money,
        date
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}