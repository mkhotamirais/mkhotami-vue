<template>
  <section class="bg-white rounded text-center p-3">
    <h1 class="capitalize leading-loose font-semibold text-xl">ninja reaction timer</h1>
    <Button @click="start" :isPlaying="isPlaying">Play</Button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
    <div v-if="showResult" class="text-center">
      <p>Reaction time: {{ score }}ms</p>
      <Result :score="score" />
    </div>
  </section>
</template>

<script>
import Button from "../../components/Button.vue";
import Result from "./Result.vue";
import Block from "./Block.vue";

export default {
  name: "app",
  components: { Button, Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
      rank: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
};
</script>
