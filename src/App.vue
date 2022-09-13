<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 

  
  <div class="d-flex flex-column min-vh-100">
  <header-comp class="mb-4" @loginForm="loginFormToggle"/>
  <login-form v-if="login">
    <div class="game-form__close" type="button" @click="login=false">
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L20 20" stroke="#579AFF" stroke-width="0.558824"/>
    <path d="M20 1L0.999999 20" stroke="#579AFF" stroke-width="0.558824"/>
    </svg>
    </div>
  </login-form>
  <filter-nav  class="mb-4 mt-4" v-if="!gameDetailsShow" @filtr-send="getDropMenu" />
  <!-- <contant-comp class="mb-4" v-if="!gameDetailsShow" :key="updateKey" :filtr="filtr" :showPage="pageNumber" @gameSelect="imageSelect"/> -->
  <GameDetails class="mt-4" v-if="gameDetailsShow" :gameId="gameId" @close="gameDetailsShow=false"/> 
  <footer-comp class="mt-auto"/>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'



// import './style/main.scss';


import HeaderComp from './components/HeaderComp.vue';
import FilterNav from './components/FilterNav.vue';
import ContantComp from './components/ContantComp.vue';
import FooterComp from './components/FooterComp.vue';
import PageNumbering from './components/PageNumbering.vue';
import GameDetails from "./components/gameDetails.vue";
import LoginForm from "./components/LoginForm.vue";



export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderComp,
    FilterNav,
    ContantComp,
    FooterComp,
    PageNumbering,
    GameDetails,
    LoginForm,

},
  data(){
    return {
      gamesArr:[],
      params: {
        platform:''
      },
      filtr:'',
      filtrArr:[],
      updateKey:0,

      pageNumber:[0,12],

      gameId: 0,
      gameDetailsShow: false,

      login: false
    }
  },
  methods: {
    async getJsonFromServer(){
      let arr = []
      const options = {
            method: 'GET',
            params: {patform: this.params.platform},
            headers: {
                'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
            };

            await fetch(this.url, options)
            .then(res => res.json())
            .then(res => this.gamesArr.push(...res))
      return arr
    },
    getDropMenu(e){
      this.filtr = e
      console.log('APP', e)
      this.updateKey++
    },
        

    imageSelect(e){
      let gameId = e.target.dataset.id
      if (!gameId) return
      console.log(gameId)
      this.gameId = gameId
      this.gameDetailsShow? this.gameDetailsShow = false : this.gameDetailsShow = true    
    },

    loginFormToggle(e){
      if(e === 'login'){
        console.log(this.login)
       this.login = this.login? false : true
      }

    }
      
  },





  created(){

  }
}
            
                


            
            




    
     
</script>

<style lang="scss">
  // @import './style/var.scss';

  body{
    background-color: red;
  }
</style>
          
                    
      
      
      
                
                

   
