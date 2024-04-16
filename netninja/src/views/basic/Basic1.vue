<template>
  <ol class="list-decimal list-inside">
    <li>(lihat file main.js) createApp(App).mount('#app')</li>
    <li>data(){return object }</li>
    <li>event and methods</li>
  </ol>
  <h1>{{ title }}</h1>
  <p>{{ name }} - {{ age }}</p>
  <div>
    <p>three way events</p>
    <button v-on:click="age++" class="rounded border p-1 leading-none">inc age</button>
    <button @click="age++" class="rounded border p-1 leading-none">inc age</button>
    <button @click="incAge" class="rounded border p-1 leading-none">inc age</button>
    <button @click="name = 'abdul'" class="rounded border p-1 leading-none">change name abdul</button>
    <button @click="changeName('siti')" class="rounded border p-1 leading-none">change name siti</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Judul",
      name: "ahmad",
      age: 10,
    };
  },
  methods: {
    incAge() {
      this.age++;
    },
    changeName(data) {
      this.name = data;
    },
  },
};
</script>
