<template>
  <div class="container">
    <div class="row">
      <div v-if="isLoading" class="col-12">
        <LoaderComponent />
      </div>
      <div v-else class="col-12">
      <h1>Tags:</h1>
      <div class="d-flex flex-wrap">
        <TagCard
          v-for="tag in tags"
          :key="tag.id"
          :cardTag="tag"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagCard from "../../components/tagCards/TagCardComponent.vue";
import LoaderComponent from "../../components/LoaderComponent.vue";
import axios from "axios";

export default {
  components: {
    TagCard,
    LoaderComponent,
  },

  data: function () {
    return {
      tags: [],
      isLoading: true,
    };
  },

  methods: {
    getTags() {
      axios
        .get("api/tags")
        .then((response) => {
          //console.log(response.data.result);
          this.tags = response.data.result;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.getTags();
  },
};
</script>

<style>
</style>