import { ProxyState } from "../AppState.js"
import Game from "../Models/Game.js"

class GamesService {
    createGame(rawGame) {
        ProxyState.games = [...ProxyState.games, new Game(rawGame)]
    }
}

export const gamesService = new GamesService()