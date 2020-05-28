<template>

<div id="hey">
     <button id="getOut" @click="signOut"> Sign Out </button>
</div>

</template>

<script>
import firebase from "firebase";
import "firebase/auth";
export default {
    methods: {
        signOut: function(){
            firebase.auth().signOut().then(() =>{
                this.$router.push('/');
                this.$store.commit("updateLoggedIn", false);
            })
        }
    }
}
</script>


<style>

 #getOut{
    border: none;
    appearance: none;
    width: 50%;
    height: 10vh;
    align-content: center;
    font-size: 50px;
    font-weight: 800;
    background-image: linear-gradient(to right,#FFF , greenyellow);
    cursor: pointer;
}
#hey{
    align-content: center;
    align-items: center;
    position: relative;
    top: 700px;
}
@media only screen and (max-width: 600px){
    #hey{
        top: 500px
    }
}
@media only screen and (max-width: 375px){
    #hey{
        top: 400px
    }
}

</style>