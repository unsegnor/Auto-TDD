const AWS = require('aws-sdk');
const Calculator = require('./domain/calculator');

exports.handler = async (event) => {
    const calculator = Calculator();
    let result = await calculator.sum(event.a, event.b);
    return result
};
