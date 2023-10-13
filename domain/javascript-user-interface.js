/**
    This is one of the multiple user interfaces that the application could have.
    User interfaces translate user actions into operations over the system through the specific interface.
    
    The user wants to sum two numbers and we translate that into the instantiation and usage of the calculator.
    An http-api user interface would translate the same action into an http call.
**/

//TODO: Actually we could replace this one by a package-user-interface and require the index.js file instead of the calculator directly.
const Calculator = require("./calculator")

module.exports = function(){

    const calculator = Calculator()
    return Object.freeze({
        sum
    })

    function sum(a, b){
        return calculator.sum(a,b)
    }
}
