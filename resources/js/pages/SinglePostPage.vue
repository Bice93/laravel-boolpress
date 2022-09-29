<template>
  <main>
    <div class="container">
        <div class="row col-6 offset-md-3">
            <PostCard :post="post"/>
        </div>
    </div>
  </main>
</template>

<script>
import PostCard from '../components/PostCard';
import axios from 'axios';
export default {

    components: {
        PostCard
    },

    data: function() {
        return{
            post : {},
        }
    },

    methods: {
        getPost(){
            const id = this.$route.params.id;
            axios.get(`/api/posts/${id}`).then((response) => {
                this.post = response.data.result;
                console.log(response.data.result);
            }).catch((error) =>{
                console.error(error);
            })
        }
    },

    created(){
        this.getPost();
    },
}
</script>

<style>

</style>