<template>
  <div class="container">
      <div class="row">
        <div v-if="isLoading" class="col-12">
          <LoaderComponent />
        </div>
        <div v-else>
          <h1>Category: {{ category.name }} </h1>
          <div class="row row-cols-1 row-cols-md-3">
            <PostCard v-for="post in category.posts" :key="post.id" :post="post" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import PostCard from "../../components/PostCard";
import LoaderComponent from "../../components/LoaderComponent.vue";
import axios from "axios";

export default {

  components: {
    PostCard,
    LoaderComponent,
  },

  data: function () {
    return {
      category: {
        post: "",
      },
      isLoading: true,
    };
  },

  methods: {
    getPost() {
      const id = this.$route.params.id;
      axios
        .get(`/api/categories/${id}`)
        .then((response) => {
          this.category = response.data.result;
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