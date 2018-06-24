import axios from 'axios';

const newlendBaseUrl = 'http://salmoney-dev.us-west-2.elasticbeanstalk.com/api';

export function createNewlend(lender, name, money, date) {
    let url = `${newlendBaseUrl}/newlend`;

    console.log(`Making Newlend request to: ${url}`);
    console.log(name, money, date);
    return axios.post(url, {
        lender,
        name,
        money,
        date
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
