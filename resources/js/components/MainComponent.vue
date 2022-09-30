<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-if="isLoading" class="col-12">
          <LoaderComponent />
        </div>
        <div v-else>
          <h1>Posts:</h1>
          <div class="row row-cols-1 row-cols-md-3">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from "./PostCard.vue";
import LoaderComponent from "./LoaderComponent.vue";
import axios from "axios";

export default {

  components: {
    PostCard,
    LoaderComponent,
  },

  data: function () {
    return {
      posts: [],
      isLoading: true,
    };
  },

  methods: {
    getPosts(postPage = 1) {
      axios
        .get("api/posts", {
          page: postPage,
        })
        .then((response) => {
          console.log(response.data.result);
          this.posts = response.data.result.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<style>

</style>