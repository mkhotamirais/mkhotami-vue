<template>
  <h1>{{ title }}</h1>
  <slot>default slot</slot>
  <slot name="judul"></slot>
</template>

<script>
export default {
  props: ["title"],
};
</script>
