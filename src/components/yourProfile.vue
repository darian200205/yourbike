<template>
    <div>
       <h1> Add a profile picture! </h1>
       
       <div class="addFile">
           <input type="file" @change="uploadImage">
           <button @click="onUpload = true"> Upload </button>
            
            <div v-for="image in images" :key="image.src">
                <img :src="image.src" id="uploaded">
            </div>
         
       
       </div>

      <signOut> </signOut>
    </div>
</template>

<script>
import signOut from "./signOut.vue";
import * as firebase from "firebase";
import "firebase/storage";

export default {
    components: {
        signOut
    },
    data(){
        return {
            selectedFile: null,
            images:[]
        }
    },
    methods: {
       async uploadImage(e){
           try {
           let file = e.target.files[0];

           const storageRef = firebase.storage().ref('profilePictures/' + file.name);
        
           
           await storageRef.put(file);

            const downloadUrl = await storageRef.getDownloadURL();
            this.images.push({src: downloadUrl})

           } catch(error){
               console.log(error);
           }
            
       }
    }
}
</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1{
    font-weight: 800;
    font-size: 25px;
    position: relative;
    top: 100px;
}
.profilePic{
    width: 30%;
    position: relative;
    left: 300px;
    top: 200px;
}


</style>