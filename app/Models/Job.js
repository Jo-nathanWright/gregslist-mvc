export default class Job {
    constructor({ company, position, startPay, requirments, description, imgUrl }) {
        this.company = company
        this.position = position
        this.startPay = startPay
        this.requirments = requirments
        this.description = description
        this.imgUrl = imgUrl
    }
}