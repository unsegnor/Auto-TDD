const runCommand = require('./runCommand');
const delay = require('./delay');

module.exports = function({baseUrl}){
    describe('container tests', function(){
        it('should build and run the container', () => {});
    
        it('should run containers in parallel')
      
        xit('play with the container before removing it', async () => {
          console.log("container deployed")
          await delay(60000)
        });
      
        it('container is up and running', async () => {
          await runCommand(`curl ${baseUrl}/health`, 'check api health')
        });
    })
}
