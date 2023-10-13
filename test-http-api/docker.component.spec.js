const uuid = require('uuid');
const container_test_cases = require('./container-test-cases');
const runCommand = require('./runCommand');
const delay = require('./delay');
const domain_tests = require('../domain/test-cases/all.js');
const baseUrl = "http://localhost:3000"
const http_user_interface = require('./http-api-user-interface')({baseUrl})

describe('Docker container test', function () {
  this.timeout(300000);

    async function buildImage(){
        await runCommand('docker build -t auto-test-image -f ./http-api/Dockerfile .', 'built image auto-test-image')
    }

    async function runContainer(containerId){
        await runCommand(`docker run -d -p 3000:3000 --name ${containerId} auto-test-image`, `created container ${containerId}`)
        await delay(1000) //TODO add this wait to the create command
        // await runCommand(`docker logs ${containerId}`, `logs for container ${containerId}: \n`) //TODO: show the logs and fail in case there are errors
    }

    async function removeContainer(containerId){
        await runCommand(`docker rm -f ${containerId}`, `removed container ${containerId}`)
    }

  before(async () => { //beforeAll
    this.containerId = uuid.v4()
    await buildImage()
    await runContainer(this.containerId)
  });

  after(async () => { //afterAll
    await removeContainer(this.containerId)
  });

  container_test_cases({baseUrl});

  //TODO: pass a testscenario with preArrange, postArrange, preAct, postAct, preAssert, postAssert methods
  domain_tests(http_user_interface);
});
