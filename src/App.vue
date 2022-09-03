<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <!-- dropMenu -->
    <HeaderComp/>
    <filter-nav @filtr-result="getDropMenu"/>
    <ContantComp :key="updateKey" :filtr="filtr"/>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import HeaderComp from './components/HeaderComp.vue';
import FilterNav from './components/FilterNav.vue';
import ContantComp from './components/ContantComp.vue';



export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderComp,
    FilterNav,
    ContantComp
  },
  data(){
    return {
      gamesArr:[],
      params: {
        platform:''
      },
      filtr:'',
      filtrArr:[],
      updateKey:0
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
  //  getDropMenu(e){
  //   function addFiltr(str){
  //       let url = this.filtr;
  //       if(url === ''){
  //         url = '?'
  //       }else {
  //         this.url.search(str.split('='))
  //       }

  //       url += str;
  //       console.log(url)
  //       this.updateKey++
  //       return url
  //   }
  //   switch(e.target.dataset.drop) {
  //     case 'browser':
  //       this.filtr = addFiltr.call(this,'platform=browser')
  //       break;
  //       case 'pc':
  //       this.params.platform = 'pc'
  //       this.filtr = addFiltr.call(this,'pc')
  //       break;
  //     }
  //     console.log(e.target.dataset.drop)
  //   },
  getDropMenu(e){
    //     function addFiltr(str){
    //     let basicUrl = this.filtr
    //     if(basicUrl.includes(str))return
    //     let index = basicUrl.findIndex((value) => {
    //         return value.split('=')[0] === str.split('=')[0]
    //     });
    //     if (index != -1){
    //         console.log(basicUrl[index].split('=')[1])
    //         basicUrl[index].split('=')[1] = str.split('=')[1];
    //         basicUrl[index] = str;
    //     }else{
    //         basicUrl.push(str)
    //     }
    //     this.filtr = basicUrl
    //     this.updateKey++
    // }
    // this.filtr = e.target.dataset.drop
    // this.updateKey++
    let arr = [...e]
    console.log(1)
      if(!e.includes('?')){
          e.unshift('?')
      }
      arr = arr.join('')
      // e.length > 2? e.join('=') : e.join('')
      console.log('test',arr)
  },



  },

  created(){

  }
}
            
                


            
            




    
     
</script>

<style>

</style>
          
                    
      
      
      
                
                

   
