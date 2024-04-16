<template>
  <div @click.self="closeModal" :class="`fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)]`">
    <div class="w-[400px] p-[20px] my-[100px] mx-auto bg-white rounded-lg text-center">
      <h1 class="text-blue-500 text-xl font-semibold">{{ modalTitle }}</h1>
      <p>{{ modalContent }}</p>
      <slot>default slot will be displayed if there is no content slot</slot>
      <slot name="insideSlot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalTitle", "modalContent"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
