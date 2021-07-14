export default class House {
    constructor({ beds, bathrooms, squareFeet, price, imgUrl, description }) {
        this.beds = beds
        this.bathrooms = bathrooms
        this.squareFeet = squareFeet
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
                        <p><b>${this.beds} Bedroom - ${this.bathrooms} Bathroom - ${this.squareFeet} ft²</b></p>
                    </div>
                    <p>${this.description}</p>
                    <p><em>$${this.price}</em></p>
                </div>
            </div>
        </div>
        `
    }
}