<template>
  <ol class="list-decimal list-inside">
    <li>@mouseover, @mouseleave, @dblclick</li>
    <li>$event</li>
  </ol>
  <div class="flex">
    <div class="box" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
      {{ action }}
    </div>
    <div class="box" @dblclick="onDblClick">{{ action2 }}</div>
    <div class="box" @click="onClick">{{ action3 }}</div>
    <div class="box" @click="onClick2($event, 'ahmad')">{{ action4 }}</div>
    <div class="box" @mousemove="onMouseMove">Coordinate: {{ action5.x }} - {{ action5.y }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action: "action",
      action2: "action2",
      action3: "action3",
      action4: "action4",
      action5: { x: 0, y: 0 },
    };
  },
  methods: {
    onMouseOver() {
      this.action = "mouseover";
    },
    onMouseLeave() {
      this.action = "mouseleave";
    },
    onDblClick() {
      this.action2 = "dblClick";
    },
    onClick(e) {
      this.action3 = e.type + " lihat console";
    },
    onClick2(e, data) {
      if (data) {
        this.action4 = data;
      } else this.action4 = e.type;
    },
    onMouseMove(e) {
      this.action5.x = e.offsetX;
      this.action5.y = e.offsetY;
    },
  },
};
</script>

<style scoped>
.box {
  @apply w-44 h-32 bg-slate-200 rounded m-2 flex items-center justify-center;
}
</style>
