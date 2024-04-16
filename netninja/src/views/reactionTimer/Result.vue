<template>
  <p>{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 400) {
      this.rank = "ninja finger";
    } else if (this.score < 550) {
      this.rank = "rapid finger";
    } else {
      this.rank = "snail pace";
    }
  },
};
</script>
