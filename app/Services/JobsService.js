import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js"
import { api } from "../Services/AxiosService.js"

class JobsService {
    constructor() {
        this.getAllJobs()
    }

    async createJob(rawJob) {
        const res = await api.post('jobs', rawJob)
        ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    }

    async getAllJobs() {
        try {
            const res = await api.get('jobs')
            ProxyState.jobs = res.data.map(j => new Job(j))
        } catch (error) {
            window.alert("We ran into an error getting this job : " + error)
        }
    }

    async deleteJob(jobId) {
        try {
            const res = await api.delete('jobs/' + jobId)
            console.log(res.data)
            ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
        } catch (error) {
            window.alert("We ran into an error deleting This Job : " + error)
        }
    }

}

export const jobsService = new JobsService()