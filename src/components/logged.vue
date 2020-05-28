<template>
    <div class="hey">
        
        <span id="theuser" v-if="loggedIn"> logged as {{currentUser}} </span>

        <span v-else> No </span>

        <signOut />
        <div class="in">
            <div class="text">
                YOU ARE <span id="in2"> IN! </span>
            </div>
            </div>

    </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase/auth";
import signOut from "./signOut.vue";
export default {
    components:{
        signOut
    },
    created(){
        if( firebase.auth().currentUser ){
            this.loggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
        
    },
    data(){
        return{
            loggedIn: false,
            currentUser: false,
        
        }
    }
}
</script>


<style>
.in{
    align-items: center;
    align-content: center;
    position: relative;
}
.text{
    position: relative;
    top: 200px;
    font-size: 50px;
    font-weight: 800;

}
#in2 {
    color: greenyellow;
}
#theuser{
    font-size: 25px;
    background-color: rgba(0, 0, 0 , 0.25);
    border-radius: 3px;
    position: relative;
    top: 300px;
    height: 1vh;
}
@media only screen and (max-width: 600px){
    
        #theuser {
            top: 100px;
        }
    .text {
        top: 50px;
    }
    
}
</style>