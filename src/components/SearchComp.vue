<template>
    <div class="container">
        <div class="row row-cols-2  bg-dark-light d-flex justify-content-between align-items-center text-bg-secondary px-3 py-3 round-2 rounded-3 mt-4">
                    <div class="col-lg-5 col-10" >
                        <input class="form-control text-primary col-4" type="search" v-model="searchValue" id="" name="" placeholder="Find Game">
                    </div>   

                    <div class="col-1 col-md-auto d-flex ustify-content-end">
                    <router-link to="/" class="ms-auto d-inline-block">
                        <svg  role="button"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="#579AFF" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </router-link>
                    </div>

        </div>
                     
        
        <div class="con-card my-4" @click="$emit('gameSelect', $event)">
            <template v-for="item in filtrArr" :key="item.id">
                        <div class="card con-card__card anim-grow">
                        
                            <a class="con-card__link" @click.prevent href="#" :data-id="item.id">
                                
                            </a>
                            <img :src="item.thumbnail" class="card-img-top"
                                alt="thumbnail">
                            <div class="card-body">
                                <h5
                                    class="card-title text-uppercase text-primary fw-bold">
                                    {{item.title}}</h5>
                                <p class="card-text">{{item.short_description}}</p>
                            </div>

                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Genre: {{item.genre}}</li>
                                <li class="list-group-item">Platform: {{item.platform}}
                                </li>
                                <li class="list-group-item">Release date:
                                    {{item.release_date}}</li>
                            </ul>
                        </div>
            </template>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            gamesArr: [],
            filtrArr: [],
            searchValue:''
        }
    },
    methods: {
        async getJsonFromServer(){

            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            await fetch(url, options)
                .then(res => {
                    return res.ok ? res.json() : Promise.reject(res)
                })
                .then(res => {
                    this.gamesArr.push(...res)
                })
                .catch(() => {

                })
        },
        search(value){
            if(!value) return []
            let reg = new RegExp(`^${value}`,'ig');
           
            this.filtrArr = this.gamesArr.filter((item)=>{
                if(reg.test(item.title)){
                    return true
                }
                return false
            })
        },    

    },
    watch:{
        searchValue(e){
            this.search(e)
          
        }
    },
    created(){
        this.getJsonFromServer()
        
    }
}
</script>

<style>

</style>