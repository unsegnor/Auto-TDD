const axios = require('axios');

module.exports = function({baseUrl}){
    return Object.freeze({
        sum
    })

    async function sum(a, b){
        const response = await axios.get(`${baseUrl}/sum?a=${a}&b=${b}`);
        return response.data
    }
}
