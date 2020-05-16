<template>
  
<div id="app"> 
    <div class="nav">
        <router-link to="/"> Home </router-link>
        <router-link to="/about">About</router-link>
    </div>
    <transition name="view">
    <router-view />
    </transition>
    </div>
</template>

<script>

export default{
    
}

</script>

<style >

#app{
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: black;
     z-index: -1;
}

.nav a{
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    margin-left: 30px;
    font-size: 25px;
    z-index: 3;
    align-content: center;
    justify-content: center;

}
.nav a.router-link-exact-active{
    transition: ease-in 0.5s;
    color: greenyellow;
    transition-delay: 0.5s;   
}
.fade-enter-active, .fade-leave-active{
    transition-delay: 0.7s;
    transition: all .5s ease-in;
} 
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.view-enter-active, .view-leave-active{
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;

}
.view-enter, .view-leave-to{
    opacity: 0;
    transform: translateY(-100px);
}
.view-enter-to, .view-leave{
    opacity: 1;
    transform: translateY(0px);
}
.view-enter-active{
    transition-delay: 0.5s;
}

</style>
