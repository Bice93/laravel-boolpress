<template>
  <div class="container">
    <div class="row">
      <div v-if="isLoading" class="col-12">
        <LoaderComponent />
      </div>
      <div v-else class="col-12">
      <h1>Categories:</h1>
      <div class="row row-cols-1 row-cols-md-3">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :cardCategory="category"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../../components/categoryCards/CategoryCardComponent.vue";
import LoaderComponent from "../../components/LoaderComponent.vue";
import axios from "axios";

export default {
  components: {
    CategoryCard,
    LoaderComponent,
  },

  data: function () {
    return {
      categories: [],
      isLoading: true,
    };
  },

  methods: {
    getCategories() {
      axios
        .get("api/categories")
        .then((response) => {
          //console.log(response.data.result);
          this.categories = response.data.result;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.getCategories();
  },
};
</script>

<style>
</style>