<template>
        <div class="con-wrap">
            <div class="container border">
                <div class="con-cards">
                    <template v-for="item in gamesArr" :key="item.id">
                       
                        <div class="card con-cards__card"  >
                            <a class="con-cards__link" href="#"></a>
                            <img :src="item.thumbnail" class="card-img-top" alt="...">
                            <div class="card-body">
                                
                                <h5 class="card-title">{{item.title}}</h5>
                                <p class="card-text">{{item.short_description}}</p>
                                

                                <!-- <a href="#" class="btn btn-primary">Перейти куда-нибудь</a> -->
                            </div>
                            <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Genre: {{item.genre}}</li>
                                    <li class="list-group-item">Release date: {{item.release_date}}</li>
                                    <li class="list-group-item">Platform: {{item.platform}}</li>
                            </ul>
                        </div>
                       
                    </template>
                </div>
            </div>
        </div>

            
  </template>
  <script>
// import { throwStatement } from '@babel/types';

      export default {
            name: 'ContantComp',
            props: {
                gamesUrl: String,
                filtr:String,
            },
            data(){
                return {
                    params: {
                        platform:'platform=browser'
                    },
                    // url:this.gamesUrl,
                    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                    gamesArr:[],
                    
                    options: {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                        }
                    }
                    
                }
            },
            methods: {
                async getJsonFromServer(){
                        console.log(this.filtr)
                        let filtrArr = [...this.filtr]
                        filtrArr.unshift('?')
                        console.log(filtrArr.join(''))
                        // let url = this.url + filtrArr.join('')
                        let url = this.url + '?' + this.filtr

                        await fetch(url, this.options)
                        .then(res =>{return res.json()})
                        .then(res => res.slice(0,12))
                        .then(res => this.gamesArr.push(...res))
                          
                    },

            watch: {
                async filtr(){
                    console.log('test')
                    let url = this.url + this.filtr
                    await fetch(url, this.options)
                        .then(res =>{return res.json()})
                        .then(res => res.slice(0,12))
                        .then(res => this.gamesArr.push(...res))
                }
            }
            },
            
  created(){
    this.getJsonFromServer()
    console.log(this.gamesArr)
  }
        }
  </script>
<!-- lang="scss" -->
  <style lang="scss">
    .con-cards{
        position: relative;
        display: grid;
        gap:1rem;
        grid-template-columns: repeat(3, 1fr);
        &__link{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            &::after{
                contain: '';
            }
        }
        &__card{
            // cursor: pointer;
        }
    }
  </style>