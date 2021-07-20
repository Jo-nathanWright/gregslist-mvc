import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "../Services/AxiosService.js"

class HousesService {
    constructor() {
        this.getAllHouses()
    }

    async createHouse(rawHouse) {
        const res = await api.post('houses', rawHouse)
        ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    }

    async getAllHouses() {
        try {
            const res = await api.get('houses')
            ProxyState.houses = res.data.map(h => new House(h))
        } catch (error) {
            window.alert("We ran into an error getting this house" + error)
        }
    }

    async bidHouse(houseId) {
        try {
            let foundHouse = ProxyState.houses.find(h => h.id == houseId)
            foundHouse.price += 10000
            const res = await api.put('houses/' + houseId, foundHouse)
            console.log(res.data)
            ProxyState.houses = ProxyState.houses
        } catch (error) {
            window.alert("We ran into an error Bidding this house" + error)
        }
    }

    async deleteHouse(houseId) {
        try {
            const res = api.delete('houses/' + houseId)
            console.log(res.data)
            ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
        } catch (error) {
            window.alert("We ran into an error deleting This House" + error)
        }
    }
}

export const housesService = new HousesService()