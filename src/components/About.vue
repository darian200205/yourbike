<template>
  <div class="about-page">


    <div class="square">
       YOUR<span id="greentext">BIKE </span>
       </div>

</div>
      
</template>

<script>
export default {
    el:'about-page',
    data(){
      return{
          isShowing: false
      }
    }
}
</script>

<style scoped>

#greentext{
  color: greenyellow;
}
.about-page{
  box-sizing: border-box;
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}




</style>

