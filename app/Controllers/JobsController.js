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

    createJob(event) {
        event.preventDefault()
        let form = event.target
        let rawJob = {
            company: form.company.value,
            position: form.position.value,
            startPay: form.startPay.value,
            requirments: form.requirments.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
        }
        jobsService.createJob(rawJob)
        form.reset()
    }
}