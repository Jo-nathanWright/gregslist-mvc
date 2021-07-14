import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

function _draw() {
    let template = ''
    ProxyState.houses.forEach(house => {
        template += house.Template
    })
    document.getElementById('houses').innerHTML = template
}

export default class HouseController {

    constructor() {
        ProxyState.on('houses', _draw)
        _draw()
    }

    createHouse(event) {
        event.preventDefault()
        let form = event.target
        let rawHouse = {
            beds: form.beds.value,
            bathrooms: form.bathrooms.value,
            squareFeet: form.squareFeet.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value
        }
        housesService.createHouse(rawHouse)
        form.reset()
    }
}