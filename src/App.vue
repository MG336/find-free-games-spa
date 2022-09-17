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
    <!-- <div class="scroll-top" v-show="scroll">
      <div class="scroll-top__box" @click="scrollToTop">
        <svg width="16" height="16" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.64502 0.34363L15.2856 6.98426C15.7446 7.44324 15.7446 8.18543 15.2856 8.63953L14.1821 9.74305C13.7231 10.202 12.981 10.202 12.5269 9.74305L7.81494 5.0409L3.10791 9.74793C2.64893 10.2069 1.90674 10.2069 1.45264 9.74793L0.344238 8.64441C-0.114746 8.18543 -0.114746 7.44324 0.344238 6.98914L6.98486 0.348513C7.44385 -0.115354 8.18604 -0.115354 8.64502 0.34363V0.34363Z" fill="#3e81e6d2"/>
        </svg>
      </div>
    </div> -->


  </div>
  
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FilterNav from './components/FilterNav.vue';
import ContantComp from './components/ContantComp.vue';
import FooterComp from './components/FooterComp.vue';
import PageNumbering from './components/PageNumbering.vue';
import GameDetails from "./components/gameDetails.vue";
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

    // scrollToTop(){
    //   this.$refs.top.scrollIntoView()
    // },

    // scrollTopShow(){
    //   window.onscroll = () => {
    //     console.log(document.documentElement.scrollTop)
    //     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    //           this.scroll = true
    //         } else {
    //           this.scroll = false
    //         }
    //       }
    // },
    
  },
  created(){
    // this.scrollTopShow()
  }
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

      
     
            
                


            
            




    
          
                    
      
      
      
                
                

   
