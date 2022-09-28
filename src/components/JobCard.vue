<template>
  <div class="card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5>{{ job.company }} {{ job.title }}</h5>
      <div class="align-items-center d-flex gap-2"></div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";

export default {
  props: {
    job: { type: Job, required: true },
  },
  setup(props) {
    onMounted(() => {
      console.log("Doing Something!");
    });

    return {
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style></style>
