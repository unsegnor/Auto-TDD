const uuid = require('uuid');
const runCommand = require('./runCommand');
const container_test_cases = require('./container-test-cases');
const domain_tests = require('../domain/test-cases/all.js');
const baseUrl = "http://localhost:3000"
const http_user_interface = require('./http-api-user-interface')({baseUrl})

describe('Docker compose container test', function () {
  this.timeout(300000);

    async function startApp(containerId){
        await runCommand(`export CONTAINER_NAME=${containerId} && docker-compose up -d --build --wait`, `composed application ${containerId}`)
    }

    async function removeApp(containerId){
        await runCommand(`export CONTAINER_NAME=${containerId} && docker-compose down`, `application removed ${containerId}`)
    }

  before(async () => { //beforeAll
    this.containerId = uuid.v4()
    await startApp(this.containerId)
  });

  after(async () => { //afterAll
    await removeApp(this.containerId)
  });

  container_test_cases({baseUrl});

  //TODO: pass a testscenario with preArrange, postArrange, preAct, postAct, preAssert, postAssert methods
  //also user interface and later other options to mock dependencies
  domain_tests(http_user_interface);
});
