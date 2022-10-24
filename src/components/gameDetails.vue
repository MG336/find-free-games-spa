<template>
    <div class="">
    <div class="game-loading" v-if="loading">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">loading...</span>
        </div>
    </div>

    <div class="game-loading" v-if="error">
       <h1>Error</h1>
    </div>      

    <div class="container mt-4" v-if="post">
        
        <div class="bg-dark-light d-flex justify-content-between align-items-center text-bg-secondary px-3 py-3 round-2 rounded-3 ">
            <h1 class="text-uppercase fs-5 m-0 fw-bold text-primary">{{game.title}}</h1>
                <svg class="" role="button" @click="close"

                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="#579AFF" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
        </div>

        <div class="row row-cols-1 row-cols-md-2 mt-4 gx-5 mb-5">
            <div class="col-12 col-md-8" >
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" v-if="images.length > 0">
                <div class="carousel-inner">
                    <div :class="['carousel-item', index === 0? 'active' : '']" v-for="(item,index) in images" :key="item.id">
                    <img :src="item.image" class="d-block w-100" alt="...">
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Preview</span>
                </button>
                </div>


                <div class="mt-4 col-12 col-md-10">
                    <h3 class="fs-6 mb-3 text-primary-dark text-uppercase fw-bold">Description</h3>
                    <p class="text-light-dark">{{game.description}}</p>
                </div>
            </div>



            <div class="col-12 col-md-4">
                <div class="p-3 border border-primary-dark mt-4 mt-lg-0" v-if="systemRequirements">
                        <h3 class="fs-5 mb-3 text-primary-dark text-uppercase fw-bold">Minimum system requirements:</h3>
                        <span class="fs-6 text-primary-dark">OS</span>
                        <p class="mt-1 text-light-dark">{{systemRequirements.os}}</p>
                        <span class="fs-6 text-primary-dark">Memory</span>
                        <p class="text-light-dark">{{systemRequirements.memory}}</p>
                     


                        <span class="fs-6 text-primary-dark">Graphics</span>
                        <p class="text-light-dark">{{systemRequirements.graphics}}</p>
                        <span class="fs-6 text-primary-dark">Processor</span>
                        <p class="text-light-dark">{{systemRequirements.processor}}</p>
             
                </div>
                <div class="border border-primary-dark p-3 mt-3" v-if="!systemRequirements">
                    <div class="">
                            <span class="fs-6 text-primary-dark">Platform:</span>
                            <span class="text-light-dark">{{' '+game.platform}}</span>
                    </div>
                </div>    
        

                <div class="border border-primary-dark p-3 mt-3">
                    <div class="">
                            <span class="fs-6 text-primary-dark">Genre:</span>
                            <span class="text-light-dark">{{' '+game.genre}}</span>
                    </div>
        

                </div>
                <div class="border p-3 mt-3 border-primary-dark">
                    <div class="">
                        <a class="" :href="game.game_url" target="_blank">Website</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>    
</template>

<script>

export default {
    props:{
        // gameId: {String, Number}
    },
    emits:['close'],
    data(){
        return {
            game:{},
            systemRequirements:{},
            images:[],
            gameId: this.$route.params.id,

            loading: false,
            post: null,
            error: null
        }
    },
    methods:{
        async fetchData(){
            this.error = this.post = null;
            this.loading = true;
            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + String(this.gameId);
            let options = {
                method: 'GET',
               headers: {
                    'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            }

           await fetch(url, options)
           .then(res => {
                return res.ok ? res.json() : Promise.reject(res)
                
            }).then(res => {
                
                this.game = res;
                this.systemRequirements = res.minimum_system_requirements;
                this.images = res.screenshots;

                this.loading = false;
                this.post = true;
            }).catch(() => {
                this.loading = null;
                this.error = true;
            }); 
        },
        close(){
            this.$router.go(-1)
        }

    },
    watch: {
        // $route(to, from){
        //     console.log(1111)
        //     this.fetchData()
        // }
    },        
    created(){
        console.log('gameId',this.gameId)
        // this.$router.push(`/${this.gameId}`)
        this.fetchData()
    }
}
</script>

<style lang="scss">


    .game-container{
        max-width: 800px;
        margin: 0 auto;
    }

</style>