<template>
  <navbar :pages="pages" :active-page="activePage" :nav-theme-toggle="(index) => (activePage = index)" />
  <page-viewer v-show="pages.length > 0" :page="pages[activePage]"></page-viewer>
  <create-page :page-created="pageCreated"></create-page>
</template>

<script>
import PageViewer from "./components/PageViewer.vue";
import Navbar from "./components/MyNavbar.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: { Navbar, PageViewer, CreatePage },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
