const { exec } = require('child_process');

module.exports = async function runCommand(command, reason){
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout) => {
            if (error) return reject(error)
            //console.log(reason)
            //console.log(stdout)
            resolve();
          });
    })
}
