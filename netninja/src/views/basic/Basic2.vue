<template>
  <ol class="list-decimal list-inside">
    <li>Conditional Rendering v-if, v-show</li>
    <li>v-if: vanish all parent and child tags</li>
    <li>v-show: give style display none</li>
  </ol>
  <div v-if="false">conditional1</div>
  <div v-else>else contitional1</div>
  <div v-show="true">v-show true</div>
  <button class="border p-1 rounded" @click="toggleCondition()">
    <span v-if="!showCondition">Show</span>
    <span v-else>Hide</span>
  </button>
  <div v-show="showCondition">
    <p>Conditional toggle</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCondition: false,
    };
  },
  methods: {
    toggleCondition() {
      this.showCondition = !this.showCondition;
    },
  },
};
</script>
