<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-4 my-3" v-for="j in job" :key="j.id">
        <div>
          <!-- <router-link
            :to="{
              name: 'Details',
              params: {
                id: j.id,
              },
            }"
          > -->
          <JobCard :job="j" />
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jobsService } from "../services/JobsService.js";
import Pop from "../utils/Pop.js";
import JobCard from "../components/JobCard.vue";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    async function getJobs() {
      try {
        await jobsService.getJobs();
      } catch (error) {
        console.error(error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      getJobs();
    });

    return {
      job: computed(() => AppState.jobs),
    };
  },
  components: { JobCard },
};
</script>

<style></style>
