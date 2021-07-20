import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

function _draw() {
    let template = ''
    ProxyState.houses.forEach(house => {
        template += house.Template
    })
    document.getElementById('houses').innerHTML = template
}

export default class HousesController {
    constructor() {
        ProxyState.on('houses', _draw)
        _draw()
    }

    async createHouse() {
        try {
            event.preventDefault()
            let form = event.target
            let rawHouse = {
                // @ts-ignore
                bedrooms: form.bedrooms.value,
                // @ts-ignore
                bathrooms: form.bathrooms.value,
                // @ts-ignore
                levels: form.levels.value,
                // @ts-ignore
                price: form.price.value,
                // @ts-ignore
                year: form.year.value,
                // @ts-ignore
                imgUrl: form.imgUrl.value,
                // @ts-ignore
                description: form.description.value
            }
            await housesService.createHouse(rawHouse)
            // @ts-ignore
            form.reset()
        } catch (error) {
            window.alert("We ran into an error creating this house : " + error)
        }

    }

    deleteHouse(houseId) {
        housesService.deleteHouse(houseId)
    }

    bidHouse(houseId) {
        housesService.bidHouse(houseId)
    }
}