<template>
    <div class="containder">
        <div class="mt-5">
            <nav  style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">HOME</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                        {{game.title}}</li>
                </ol>
            </nav>
            <h1 class="text-uppercase mt-2 ">{{game.title}}</h1>
            <div class="row row-cols-2 mt-4">
                <div class="col-4">
                    <img class="img-fluid w-100" :src="game.thumbnail">
                </div>
                <div class="col-6">
                    <h3 class="fs-4 mb-3">Minimum system requirements:</h3>
                    <div class="row row-coloms-2">
                        <div class="col">
                            <span class="fs-6 fw-bold text-secondary">OS</span>
                            <p class="mt-1">{{systemRequirements.os}}</p>
                            <span
                                class="fs-6 fw-bold text-secondary">Memory</span>
                            <p class="">{{systemRequirements.memory}}</p>
                            <div class="">
                                <span
                                    class="fs-6 fw-bold text-secondary">Genre:</span>
                                <span>{{' '+game.genre}}</span>
                            </div>
                        </div>

                        <div class="col">
                            <span
                                class="fs-6 fw-bold text-secondary">Graphics</span>
                            <p>{{systemRequirements.graphics}}</p>
                            <span
                                class="fs-6 fw-bold text-secondary">Processor</span>
                            <p>{{systemRequirements.processor}}</p>
                            <div class="">
                                <a class="" :href="game.game_url"
                                    target="_blank">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="mt-5 col-8">
            <h3 class="fs-3 mb-4">Description</h3>
            <p>{{game.description}}</p>
        </div>
        <div class="row row-cols-3 mt-5 mb-5">
            <img class="col" :src="item.image" v-for="item in images"
                :key="item.id" alt="image">
        </div>

    </div>
</template>

<script>
// import { response } from 'express';

// import { create } from 'domain';

export default {
    props:{
        gameId: Number
    },
    data(){
        return {
            game:{},
            systemRequirements:{},
            images:[],
        }
    },
    methods:{
        async getDetailsForId(){
            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id='+String(this.gameId);
            
            let options = {
                method: 'GET',
               headers: {
                    'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            }

           await fetch(url, options).then(response => {
                let json = response.json();
                return json
            }).then(response => {
                this.game = response;
                this.systemRequirements = response.minimum_system_requirements;
                this.images = response.screenshots;
                console.log(this.images)
            }); 
        }
    },
    created(){
        this.getDetailsForId()
    }
}
</script>

<style>

</style>