import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { SandboxApi } from "./AxiosService.js";

class JobsService {
  async getJobs() {
    const res = await SandboxApi.get(`api/jobs`);
    console.log(res.data);
    AppState.jobs = res.data.map((j) => new Job(j));
    console.log(AppState.jobs);
  }
}

export const jobsService = new JobsService();
