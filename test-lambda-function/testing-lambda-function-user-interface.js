const axios = require('axios');

module.exports = function(){
    return Object.freeze({
        sum
    })

    async function sum(a, b){
        const response = await axios.post('http://localhost:3000/2015-03-31/functions/function/invocations', `{"a": ${a}, "b": ${b}}`)
        //console.log(response)
        return response.data
    }
}
