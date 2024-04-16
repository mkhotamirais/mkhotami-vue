<template>
  <section class="bg-white p-3 rounded">
    <h1>fetching detail</h1>
    <div v-if="job">
      <h2>{{ id }}</h2>
      <h2>{{ job.title }}</h2>
      <p>{{ job.content }}</p>
    </div>
    <div v-else>Loading Data</div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
