import { ref } from "vue";

export const getPosts = () => {
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

  return { posts, error, load };
};
