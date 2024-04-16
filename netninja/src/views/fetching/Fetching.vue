<template>
  <section class="bg-white p-3 rounded">
    <h1>fetching</h1>
    <div v-if="jobs.length">
      <ul v-for="job in jobs">
        <li>{{ job.title }}</li>
        <router-link :to="`/fetching/${job.id}`" class="underline">visit</router-link>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
