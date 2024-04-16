<template>
  <h1>basic2</h1>
  <div>
    <p>{{ name }}</p>
    <input type="text" v-model="search" class="border rounded p-1" placeholder="search name" />
    <p>search term - {{ search }}</p>
    <ul class="list-disc list-inside">
      <li v-for="name in matchingNames">{{ name }}</li>
    </ul>
    <button @click="handleStopWatching" class="underline">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "home",
  setup() {
    const name = computed(() => "ahmad");
    const names = ref(["ahmad", "abdul", "siti", "ayu", "iis", "cinta", "budi"]);
    const search = ref("");
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    const stopWatch = watch(search, () => console.log("watch function ran"));
    const stopEffect = watchEffect(() => console.log("watchEffect function ran", search.value));
    // if you don't want to that value inside the function, you could use watch.
    // if you don't want it to run for the first time around automatically you could usewatch
    // if you do want it to run once to begin with you could use watchEffect and also if you're using the value inside the function you could use watchEffect
    const handleStopWatching = () => {
      stopWatch();
      stopEffect();
    };
    return { name, search, matchingNames, handleStopWatching };
  },
};
</script>
