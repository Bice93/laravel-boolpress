<template>
  <main>
    <div v-if="isLoading" class="col-12">
      <LoaderComponent />
    </div>
    <div v-else class="container">
      <div class="row col-6 offset-md-3">
        <PostCard :post="post" />
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from "../components/PostCard";
import LoaderComponent from "../components/LoaderComponent.vue";
import axios from "axios";

export default {

  components: {
    PostCard,
    LoaderComponent,
  },

  data: function () {
    return {
      post: {
        user: "",
      },
      isLoading: true,
    };
  },

  methods: {
    getPost() {
      const id = this.$route.params.id;
      axios
        .get(`/api/posts/${id}`)
        .then((response) => {
          this.post = response.data.result;
          console.log(response.data.result);
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.getPost();
  },
};
</script>

<style>

</style>