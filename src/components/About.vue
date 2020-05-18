<template>
  <div class="home">
       
       <div class="block">
           <header>
        
               <h1> JOIN YOUR<span id="greenytext">BIKE</span> </h1>
              
           </header>
           <div class="form-group">
           <div class="form">
               <button id="button1" type="button"> Register </button>
               <p class="registering"> Already have an account? </p>
               <router-link to="/"><button id="button2" type="button"> Login </button></router-link>
               <input type="text" placeholder="Fullname" class="name3">
               <input type="email" placeholder="Email" class="name">
               <input type="password" class="name2" placeholder="Password">
               
           </div>
           
           
           </div>
       </div>
       <div v-if="error" class="error">{{error.message}} </div>

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

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
.home{
font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    color:#2c3e50;
     text-align: center;
    align-content: center;
}
.block{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
   
#greenytext{
    color: greenyellow;
}
header{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 150px;
    border-top: 1px solid black;
   
   
}
h1{
    font-weight: 800;
    font-size: 30px;
}
h2{
    font-weight: 600;
    font-size: 20px;
    color: slategrey; 
    transition: ease-in-out 0.4s;

}
.form{
    width: 100%;
    max-width: 400px;
  align-content: center;
  justify-content: center;
    padding: 32px;

    background-color: #EEE;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;
    top: 210px;
    border: 1px solid black;
  
}
.form-group{
    position: relative;
    
    margin-top: 16px;
    transition: 0.4s;
    top: 20%;
    width: 400px;
    
}
.name{
    position: relative;
    bottom: 160px;
    z-index: 1;
    display: block;
    width: 100%;
    background-color: #FFF;
    appearance: none;
    -webkit-appearance:none;
    border: none;
    outline: none;
    margin-bottom: 20%;
    padding: 16px;
    font-weight: 500;
    border: 1px solid black;
}
.name2{

    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    background-color: #FFF;
    appearance: none;
    -webkit-appearance:none;
    border: none;
    outline: none;;

    margin-bottom: 16px;
    padding: 16px;
    font-weight: 500;
    border: 1px solid black;
    bottom: 190px;
}
#button1{
    position: relative;
    display: block;
    width: 100%;
    max-width: 200px;
    margin-left: auto;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance:none;
    border-radius: 0px;
    padding: 16px;
    margin-bottom: 16px;
    margin-top: 16px;
    text-transform: uppercase;
    transition: 0.4s;
    color:#2c3e50;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: 500;
    top: 260px;
    border: 1px solid black; 
}
button:hover{
    background-color: rgba(255,255,255,0.5);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
}
#button2{
    position: relative;
    display: block;
    width: 100%;
    max-width: 200px;
    margin-left: auto;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance:none;
    border-radius: 0px;
    padding: 16px;
    margin-bottom: 16px;
    margin-top: 16px;
    text-transform: uppercase;
    transition: 0.4s;
    color:#2c3e50;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: 500;
    top: 250px;
    border: 1px solid black; 
}
.registering{
    position: relative;
    top: 250px;
    font-weight: 600;
    font-style: oblique;
}
.name3{
   position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    background-color: #FFF;
    appearance: none;
    -webkit-appearance:none;
    border: none;
    outline: none;;

    margin-bottom: 16px;
    padding: 16px;
    font-weight: 500;
    border: 1px solid black;
    bottom: 170px;
}



</style>

