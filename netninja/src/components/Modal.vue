<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="box">
      <h1>title</h1>
      <p>content</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background: white;
  width: 40%;
  border-radius: 1rem;
  padding: 10px;
}
</style>
