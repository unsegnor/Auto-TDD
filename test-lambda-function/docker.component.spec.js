const uuid = require('uuid');
const {expect} = require('chai');
const axios = require('axios');
const runCommand = require('./runCommand');
const delay = require('./delay');
const domain_tests = require('../domain/test-cases/all.js');
const user_interface = require('./testing-lambda-function-user-interface')()

describe('Lambda container tests', function () {
  this.timeout(70000);
  const image_name = 'auto-test-lambda-image'
  async function buildProductionImage(){
      await runCommand(`docker build -t ${image_name} -f ./lambda-function/Dockerfile .`, `built ${image_name}`)
  }

  async function runContainer(containerId){
      await runCommand(`docker run -d -p 3000:8080 --name ${containerId} ${image_name}`, `created container ${containerId}`)
      await delay(1000) //TODO add this wait to the create command
      // await runCommand(`docker logs ${containerId}`, `logs for container ${containerId}: \n`) //TODO: show the logs and fail in case there are errors
  }

  async function removeContainer(containerId){
      await runCommand(`docker rm -f ${containerId}`, `removed container ${containerId}`)
  }

  before(async () => { //beforeAll
    this.containerId = uuid.v4()
    await buildProductionImage()
    await runContainer(this.containerId)
  });

  after(async () => { //afterAll
    await removeContainer(this.containerId)
  });

  it('should build and run the container', () => {});

  it('should respond to invocation', async () => {
    let response = await axios.post('http://localhost:3000/2015-03-31/functions/function/invocations', '{}')
    expect(response.status).to.equal(200)
  })

  it('should return content', async () => {
    let response = await axios.post('http://localhost:3000/2015-03-31/functions/function/invocations', '{}')
    expect(response.data).not.to.be.undefined
  })

  xit('play with the container before removing it', async () => {
    console.log("container deployed")
    await delay(60000)
  });

  //TODO: pass a testscenario with preArrange, postArrange, preAct, postAct, preAssert, postAssert methods
  domain_tests(user_interface);
});
