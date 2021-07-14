import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
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
      price: 9526,
      description: "A Nice little place to raise a family",
      imgUrl:
        //#region THE IMAGE LINK
        'data:image/jpeg;base64,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'
      //#endregion
    })
  ]
  jobs = [
    new Job({
      company: "Aperture Science",
      position: "Entry Level",
      startPay: 3.75,
      requirments: "Basic Knowledge",
      description: "You will be working with a [REDACTED] learning the facilty while doing minor tests",
      imgUrl:
        //#region THE IMAGE LINK
        'data:image/png;base64,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'
      //#endregion
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
