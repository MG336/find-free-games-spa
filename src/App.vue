<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <!-- dropMenu -->
    <header-comp class="mb-3" />
    <filter-nav  class="mb-2" @filtr-send="getDropMenu" />
    <contant-comp class="mb-4" :key="updateKey" :filtr="filtr" :showPage="pageNumber" @gameSelect="imageSelect"/>
    <GameDetails v-if="gameDetailsShow" :gameId="gameId"/>
    <footer-comp/>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import HeaderComp from './components/HeaderComp.vue';
import FilterNav from './components/FilterNav.vue';
import ContantComp from './components/ContantComp.vue';
import FooterComp from './components/FooterComp.vue';
import PageNumbering from './components/PageNumbering.vue';
import GameDetails from "./components/gameDetails.vue";


export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderComp,
    FilterNav,
    ContantComp,
    FooterComp,
    PageNumbering,
    GameDetails
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

      gameId:0,
      gameDetailsShow: true
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
    }
      
  },





  created(){

  }
}
            
                


            
            




    
     
</script>

<style>

</style>
          
                    
      
      
      
                
                

   
