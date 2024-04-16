<template>
  <ol class="list-decimal list-inside">
    <li>template refs</li>
    <li>halo</li>
  </ol>
  <input type="text" ref="name" class="border p-2 rounded" />
  <button @click="focusName" class="rounded border p-1">focus name</button>
</template>

<script>
export default {
  methods: {
    focusName() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>
