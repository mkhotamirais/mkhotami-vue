<template>
  <section class="bg-white rounded p-3">
    <!-- <button @click.prevent="$router.go(-1)" class="underline">back</button> -->
    <!-- or you can do this -->
    <button @click="back" class="underline">back</button>
    <h2>product detail with param id {{ $route.params.id }}</h2>
  </section>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    toPath() {
      this.$router.push("/");
    },
  },
};
</script>
