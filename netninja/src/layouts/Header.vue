<template>
  <header class="border-b h-16 flex items-center justify-between px-3 lg:px-16 sticky top-0 bg-white">
    <router-link to="/">Home</router-link>
    <nav>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link to="/reactionTimer">ReactionTimer</router-link>
      <router-link to="/basic">Basic</router-link>
      <router-link to="/modal">Modal</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/fetching">Fetching</router-link>
    </nav>
  </header>
</template>
