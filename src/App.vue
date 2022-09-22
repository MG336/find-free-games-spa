<template>
  <div class="d-flex flex-column min-vh-100" id="head" ref="top">
    <!-- Nav -->
    <header-comp @loginForm="loginFormToggle"/>

    <!-- Form -->
    <login-form v-if="login" 
      @close="login=false" 
      @create-account="login=false, 
      join=true" 
      @forgotPas="forgotPas=true, 
      login=false"/>
    
    <join-form v-if="join" @close="join=false" @login="join=false, login=true"/>  
    <forgot-password v-if="forgotPas" @close="forgotPas=false" @login="forgotPas=false, login=true"/>
    
    
    <!-- Nav -->
    <filter-nav  v-if="!gameDetailsShow" @filtr-send="getDropMenu" />

    <!-- Contant -->
    <contant-comp v-if="!gameDetailsShow" :key="updateKey" :filtr="filtr" :showPage="pageNumber" @gameSelect="imageSelect"/>
    <GameDetails  v-if="gameDetailsShow" :gameId="gameId" @close="gameDetailsShow=false"/> 

    <footer-comp class="mt-auto"/>
    
    <scroll-to-top/>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FilterNav from './components/FilterNav.vue';
import ContantComp from './components/ContantComp.vue';
import FooterComp from './components/FooterComp.vue';
import PageNumbering from './components/PageNumbering.vue';
import GameDetails from "./components/GameDetails.vue";
import LoginForm from "./components/LoginForm.vue";
import JoinForm from "./components/JoinForm.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import ScrollToTop from './components/ScrollToTop.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    FilterNav,
    ContantComp,
    FooterComp,
    PageNumbering,
    GameDetails,
    LoginForm,
    JoinForm,
    ForgotPassword,
    ScrollToTop,
},
metaInfo: {
  title: 'Find the best free-to-play games!'
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

      login: false,
      join: false,
      forgotPas: false,

      scroll:false,
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
      this.updateKey++
    },
        

    imageSelect(e){
      let gameId = e.target.dataset.id
      if (!gameId) return
      this.gameId = gameId
      this.gameDetailsShow? this.gameDetailsShow = false : this.gameDetailsShow = true    
    },

    loginFormToggle(e){
      if(e === 'login'){
      this.join = false;
       this.login = this.login? false : true
      }
      if(e === 'joinForm'){
        this.login = false;
        this.join = this.join? false : true
      }
    },
    
  },
}
          

</script>

<style lang="scss">
  @import "./style/main.scss";
  .scroll-top {
    position: absolute;
    border: 5px solid white;
    &__con{
      
    }
    &__box{
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 15;
      width: 40px;
      height: 40px;
      position: fixed;
      background-color: $dark-light;
      bottom: 100px;
      right: 5vw;
      border-radius: 4px;
    }
  }
</style>

      
     
            
                


            
            




    
          
                    
      
      
      
                
                

   
