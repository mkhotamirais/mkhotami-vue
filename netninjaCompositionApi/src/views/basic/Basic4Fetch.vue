<template>
  <h1>basic4Fetch</h1>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="posts.length">
    <PostsListFetch :posts="posts" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { ref } from "vue";
import PostsListFetch from "./basic4/PostsListFetch.vue";

export default {
  name: "basic4fetch",
  components: { PostsListFetch },
  setup() {
    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let response = await fetch("http://localhost:3000/post");
        if (!response.ok) {
          throw Error("no data available");
        }
        posts.value = await response.json();
      } catch (err) {
        error.value = err.message;
        console.log(err.message);
      }
    };
    load();
    return { posts, error };
  },
};
</script>
