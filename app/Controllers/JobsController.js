import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js"

function _draw() {
    let template = ''
    ProxyState.jobs.forEach(job => {
        template += job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

export default class JobsContoller {

    constructor() {
        ProxyState.on('jobs', _draw)
        _draw()
    }

    async createJob(event) {
        try {
            event.preventDefault()
            let form = event.target
            let rawJob = {
                company: form.company.value,
                jobTitle: form.jobTitle.value,
                hours: form.hours.value,
                rate: form.rate.value,
                description: form.description.value
            }
            jobsService.createJob(rawJob)
            form.reset()
        } catch (error) {
            window.alert("We ran into an error creating this house " + error)
        }

    }
}