<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <Header></Header>
  <main class="min-h-screen px-3 py-2 lg:px-16">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>
