<template>
  <nav :class="`navbar navbar-expand-sm navbar-${theme} bg-${theme}`">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(page, index) in publishedPages">
            <navbar-link :page="page" :isActive="activePage === index" @click.prevent="navThemeToggle(index)"></navbar-link>
          </li>
        </ul>
        <button class="btn btn-primary btn-sm ms-auto" @click="changeTheme">Toggle Theme</button>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  props: ["pages", "activePage", "theme", "navThemeToggle"],
  components: { NavbarLink },
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  data() {
    return {
      theme: "dark",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      if (theme) this.theme = theme;
    },
  },
};
</script>
