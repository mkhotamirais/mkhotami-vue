<template>
  <section class="bg-white rounded p-3">
    <div v-for="product in products">
      <h3>{{ product.name }}</h3>
      <router-link :to="`products/${product.id}`" class="underline">detail</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "product1" },
        { id: 2, name: "product2" },
        { id: 3, name: "product3" },
      ],
    };
  },
};
</script>
