<template>
  <ol class="list-decimal list-inside">
    <li>looping v-for</li>
    <li>attribute binding v-bind: / :</li>
    <li>dynamic classes</li>
    <li>computed</li>
  </ol>
  <ul>
    <li>{{ books[0].title }} - {{ books[0].author }}</li>
    <li>{{ books[1].title }} - {{ books[1].author }}</li>
    <li>{{ books[2].title }} - {{ books[2].author }}</li>
  </ul>
  <ul>
    <li
      v-for="(book, index) in books"
      class="my-2 rounded p-3"
      :class="{ 'bg-slate-200': book.isFav }"
      @click="toggleFav(index)"
    >
      <img :src="book.img" :alt="book.title" class="w-1/6" />
      <div>{{ index + 1 }}. {{ book.title }} - {{ book.author }}</div>
    </li>
  </ul>
  <p>{{ filteredBooks }}</p>
  <ul>
    <li v-for="(book, index) in filteredBooks" class="my-2 rounded p-3 bg-slate-300">
      <img :src="book.img" :alt="book.title" class="w-1/6" />
      <div>{{ index + 1 }}. {{ book.title }} - {{ book.author }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      showBooks: true,
      books: [
        { title: "judul1", author: "pengarang1", img: "/src/assets/1.jpg", isFav: true },
        { title: "judul2", author: "pengarang2", img: "/src/assets/2.jpg", isFav: false },
        { title: "judul3", author: "pengarang3", img: "/src/assets/3.jpg", isFav: true },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(i) {
      this.books[i].isFav = !this.books[i].isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
};
</script>
