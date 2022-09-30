<template>
    <div class="container">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
        <div class="dot dot-4"></div>
        <div class="dot dot-5"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dot{
    width: .6rem;
    height: .6rem;
    background-color: rgb(84, 84, 84);
    border-radius: 50%;
    display: inline-block;
    margin-right: .8rem;
}

.dot-1{
    animation: dotTransform 2s linear infinite;
    /* animation: dotTransform 2s linear infinite; */
}

.dot-2{
    animation: dotTransform 2s linear 0.4s infinite; 
}
.dot-3{
    animation: dotTransform 2s linear 0.8s infinite; 
}
.dot-4{
    animation: dotTransform 2s linear 1.1s infinite; 
}
.dot-5{
    animation: dotTransform 2s linear 1.6s infinite; 
}

@keyframes dotTransform {
    10%{
        transform: scale(1);
    }

    30%{
        transform: scale(1.5);
    }

    50%{
        transform: scale(2);
        filter: drop-shadow(1px 1px 4px rgb(69, 69, 69));
    }
    60%{
        transform: scale(1.5);
    }
    90%{
        transform: scale(1);
    }
}
</style>