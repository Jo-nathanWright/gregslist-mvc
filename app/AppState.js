import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]
  /** @type {House[]} */
  houses = [
    new House({
      beds: 3,
      bathrooms: 1,
      squareFeet: 1025,
      price: 50000,
      description: "Nice little place to raise a family",
      imgUrl: '//placehold.it/200x200'
    })
  ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
