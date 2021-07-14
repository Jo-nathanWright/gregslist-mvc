export default class Job {
    constructor({ company, position, startPay, requirments, description, imgUrl }) {
        this.company = company
        this.position = position
        this.startPay = startPay
        this.requirments = requirments
        this.description = description || "No job description provided"
        this.imgUrl = imgUrl || '//placehold.it/200x200'
    }

    get Template() {
        return `
        <div class="col-md-3 col-sm-2 my-3">
                <div class="job bg-light shadow">
                    <img src="${this.imgUrl}" class="w-100" alt="${this.position}">
                    <div class="p-3">
                        <div class="text-center">
                            <p><b>${this.company} - ${this.position}</b></p>
                            <p><b>${this.requirments}</b></p>
                        </div>
                        <p>${this.description}</p>
                        <p><em>$${this.startPay} an hour</em></p>
                    </div>
                </div>
            </div>
        `
    }
}