/**
    This is the user that performs the test.
    It receives a user interface which is the one it will use for testing.
    It doesn't know what interface it is using, that specificities will go in the user interface.
    It is aware of:
        the operations that are needed to be performed on the interface
        the time it takes to get the results
        the errors generated
        all the information that is only known by the user that could be relevant for the testing, like (credentials, name, age ... )
        
    We can add specific user expectations here regarding the error messages or the time it takes to get the results
**/

module.exports = function(user_interface){
    return Object.freeze({
        sum
    })

    async function sum(a, b){
        return await user_interface.sum(a, b)
    }
}
