<template>
  <h2>hello {{ nama }}</h2>
  <button @click="changeName">change name</button>
  <br />

  <a v-bind:href="url">go to google</a>
  <br />

  <a :href="url2">go to vue</a>
  <br />

  <input type="text" v-model="nama2" />
  <p>{{ nama2 }}</p>
  <br />

  <ul v-if="products.length">
    <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}</li>
  </ul>
  <p v-else>no data</p>
  <br />

  <input type="text" placeholder="cari" v-model="cari" />
  <ul v-if="products2.length">
    <li v-for="product2 in cariData" :key="product2.id">{{ product2.name }} - {{ product2.price }}</li>
  </ul>
  <p v-else>no data</p>
  <br />

  <h2>Components</h2>
  <Comp1 title="component 1" :content="contentComp1" @ubahKonten="ubahKonten" />

  <h2>Router</h2>
  <div>
    <router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Comp1 from "./components/Comp1.vue";
export default {
  name: "app",
  components: { Comp1 },
  data() {
    return {
      nama: "M Fikri",
      url: "https://www.google.com",
      url2: "https://vuejs.org/",
      nama2: "Ayu",
      products: [
        { id: 1, name: "product 1", price: 1000 },
        { id: 2, name: "product 2", price: 2000 },
        { id: 3, name: "product 3", price: 3000 },
      ],
      products2: [],
      cari: "",
      contentComp1: "ini adalah content component 1",
    };
  },
  methods: {
    changeName() {
      this.nama = "abdul";
    },
    ubahKonten(contentBaru) {
      this.contentComp1 = contentBaru;
    },
  },
  // lifecycle simulation
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
    this.products2 = [
      { id: 1, name: "product2 1", price: 1000 },
      { id: 2, name: "product2 2", price: 2000 },
      { id: 3, name: "product2 3", price: 3000 },
    ];
  },
  computed: {
    cariData() {
      return this.products2.filter((p2) => p2.name.match(this.cari));
    },
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
