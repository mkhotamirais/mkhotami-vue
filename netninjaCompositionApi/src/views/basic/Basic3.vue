<template>
  <h1>Basic3</h1>
  <button @click="showPosts = !showPosts" class="underline">
    <span v-if="showPosts">hide posts</span>
    <span v-else>show posts</span>
  </button>
  <PostsList v-if="showPosts" :posts="posts" />
  <button @click="posts.pop()" class="underline">delete post</button>
</template>

<script>
import { ref } from "vue";
import PostsList from "./basic3/PostsList.vue";

export default {
  name: "basic3",
  components: { PostsList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "title1",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laborum nam, numquam sed totam dolor culpa neque ut accusamus dolores itaque vel nobis labore illum, nisi reiciendis est, voluptatum sint saepe nulla sunt. Quam asperiores, dolorum consectetur minus cumque sit ea ullam quasi voluptas laborum quos velit assumenda inventore porro.",
      },
      {
        id: 2,
        title: "title2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima ullam ad, maxime quia aliquid voluptas laborum et! Exercitationem, maxime asperiores tempore ullam error, adipisci, deleniti fugiat repellat cumque assumenda sint delectus suscipit debitis deserunt molestiae quae! Esse ut quidem sequi pariatur id at cum aspernatur facilis quisquam assumenda quasi omnis reprehenderit, non architecto repellendus repudiandae nisi harum soluta quia expedita numquam cumque distinctio corporis repellat. Enim rerum tempora laudantium.",
      },
    ]);
    const showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>
