<template>
  <div class="rounded-lg text-center jumbotron jumbotron-fluid" :style="'background-color:' + cardCategory.color">
    <div class="container">
      <h1><router-link :to="'/categories/' + cardCategory.id"> {{ cardCategory.name.toUpperCase() }} </router-link></h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardCategory: Object,
  },
};
</script>

<style scoped>
.container a{
    color: rgb(45, 45, 45);
}
h1{
    transition: 2s;
}

h1:hover{
    transform: scale(1.5);
}
</style>