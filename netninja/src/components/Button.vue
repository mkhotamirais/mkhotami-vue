<template>
  <button :disabled="isPlaying" class="bg-blue-500 text-white disabled:opacity-70 hover:opacity-70 rounded p-2 leading-none">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["isPlaying"],
};
</script>
