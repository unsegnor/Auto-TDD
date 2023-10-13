// features/support/world.js
const { setWorldConstructor } = require('@cucumber/cucumber')

class CustomWorld {
  constructor () {
    this.variable = 0
  }

  setTo (number) {
    this.variable = number
  }

  incrementBy (number) {
    this.variable += number
  }

  decrementBy (number) {
    this.variable -= number
  }
}

setWorldConstructor(CustomWorld)
