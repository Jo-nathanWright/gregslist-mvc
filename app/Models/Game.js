export default class Game {
    constructor({ genre, playerAmount, length, developer, imgUrl, description }) {
        this.genre = genre
        this.playerAmount = playerAmount
        this.length = length
        this.developer = developer
        this.imgUrl = imgUrl || '//placehold.it/200x200'
        this.description = description || "No description provided"
    }
    get Template() {
        return `
        <div class="col-md-3 col-sm-2 my-3">
            <div class="games bg-light shadow">
                <img src="${this.imgUrl}" class="w-100" alt="Game image">
                <div class="p-3">
                    <div class="text-center">
                        <p><b>${this.developer} - ${this.genre} - ${this.playerAmount} player</b></p>
                    </div>
                    <p>${this.description}</p>
                    <p><em>${this.length} minutes</em></p>
                </div>
            </div>
        </div>
        `
    }
}