/**
    This file is the entry point for the domain tests.
    It mainly defines what is the user interface that we are going to use to test the domain.
    
    In this case it is the javascript-user-interface.
    It will run all the tests that we have defined.
**/

const test_all = require('./test-cases/all')
const domain_user_interface = require('./javascript-user-interface')()

describe('Domain tests', function(){
    test_all(domain_user_interface)
})
