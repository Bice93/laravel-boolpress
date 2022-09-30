<template>
  <div class="error-box">
    <div class="text-error w-75 p-5">
        <h1>OOOPS!</h1>
        <p class="font-weight-bold">Error 404 - Page Not Found</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.error-box{
    background-image: url('https://i.pinimg.com/originals/00/c9/74/00c974b0d1a66f8d7e1b9aa500c8fe46.jpg');
    background-position-x: center;
    background-repeat: no-repeat;
    background-color: #013080;
    height: 90vh;
    color: white;
}

.text-error{
    position: absolute;
    top: 10%;
    left: 10%;
}

h1{
    font-size: 8rem;
}
p{
    font-size: 2rem;
}
</style>