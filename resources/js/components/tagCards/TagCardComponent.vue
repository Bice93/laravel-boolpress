<template>
    <div class="card-tag">
        <h5><router-link :to="'/tags/' + cardTag.id"> #{{ cardTag.name.toUpperCase() }} </router-link></h5>
    </div>
</template>

<script>
export default {
  props: {
    cardTag: Object,
  },
};
</script>

<style scoped>
.card-tag{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    width: calc(100% / 3 - 6px);
    height: 5rem;
    text-align: center;
    background-color: rgb(220, 220, 220);
}

h5{
    font-size: .9rem;
}
</style>