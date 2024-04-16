<template>
  <Header></Header>
  <main class="min-h-[calc(100vh-8rem)] bg-slate-100 px-3 lg:px-16 pt-2">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: { Header, Footer },
};
</script>
