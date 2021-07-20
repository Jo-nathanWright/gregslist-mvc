export default class Job {
    constructor({ company, jobTitle, hours, rate, description, id }) {
        this.id = id
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description || "No job description provided"
    }

    get Template() {
        return `
        <div class="col-md-3 col-sm-2 my-3">
                <div class="job bg-light shadow">
                    <div class="p-3">
                        <div class="text-center">
                            <p><b>${this.company} - ${this.jobTitle}</b></p>
                            <p><b>${this.rate} rate - ${this.hours} hours</b></p>
                        </div>
                        <p>${this.description}</p>
                    <button class="btn btn-alert btn-block" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
                    </div>
                </div>
            </div>
        `
    }
}