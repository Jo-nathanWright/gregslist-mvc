export default class House {
    constructor({ bedrooms, bathrooms, levels, price, year, imgUrl, description, id }) {
        this.id = id
        this.year = year
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.price = price
        this.imgUrl = imgUrl || '//placehold.it/200x200'
        this.description = description || "No description provided"
    }

    get Template() {
        return `
        <div class="col-md-3 col-sm-2 my-3">
            <div class="house bg-light shadow">
                <img src="${this.imgUrl}" class="w-100" alt="House image">
                <div class="p-3">
                    <div class="text-center">
                        <p><b>${this.bedrooms} Bedroom - ${this.bathrooms} Bathroom - ${this.levels} Levels - ${this.year} Year</b></p>
                    </div>
                    <p>${this.description}</p>
                    <p><em>$${this.price}</em></p>
                    <button class="btn btn-info btn-block" onclick="app.housesController.bidHouse('${this.id}')">Bid</button>
                    <button class="btn btn-alert btn-block" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        `
    }
}