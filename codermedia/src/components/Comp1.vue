<template>
  <h3>{{ title }}</h3>
  <p>{{ content }}</p>
  <button @click="changeContent">ubah content</button>
</template>

<script>
export default {
  name: "comp1",
  props: ["title", "content"],
  data() {
    return {
      newTitle: "komponen satu",
    };
  },
  methods: {
    changeContent() {
      this.$emit("ubahKonten", this.newTitle);
    },
  },
  emits: ["ubahKonten"],
};
</script>

<style></style>
