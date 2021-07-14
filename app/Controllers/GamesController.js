import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";

function _draw() {
    let template = ''
    ProxyState.games.forEach(game => {
        template += game.Template
    })
    document.getElementById("games").innerHTML = template
}

export default class GamesController {
    constructor() {
        ProxyState.on("games", _draw)
        _draw()
    }

    createGame(event) {
        event.preventDefault()
        let form = event.target
        let rawGame = {
            genre: form.genre.value,
            playerAmount: form.playerAmount.value,
            length: form.length.value,
            developer: form.developer.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value
        }
        gamesService.createGame(rawGame)
        form.reset()
    }
}