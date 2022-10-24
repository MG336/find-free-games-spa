<template>

    <div class="game-loading" v-if="loading">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">loading...</span>
        </div>
    </div>

    <filter-nav  @filtr-send="getDropMenu"/>

    <div class="game-loading" v-if="error">
        <h1>Error</h1>
    </div>
    <div class="container" v-if="post">
        
        <div class="con-card" @click="$emit('gameSelect', $event)">
            <template v-for="item in gamesArr.slice(0,pages)" :key="item.id">
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
        <div class="container d-flex justify-content-center mt-4 mb-5">
            <button type="button" class="btn btn-dark-light text-primary"
                @click="pages+=9">Show More</button>
        </div>
    </div>
            
           

        
</template>

<script>
import filterNav from './FilterNav.vue'
export default {
    name: 'ContantComp',
    props: {
        gamesUrl: String,
        showPage: Array,
        
    },
    components: {
        filterNav
    },
    emits: ["gameSelect"],

    data() {
        return {
            gamesArr: [],
            pages: 12,

            error: null,
            loading: false,
            post: null,

            filtr: ''
        }
    },


    methods: {
        async getJsonFromServer(filtr) {
            this.error = this.post = null;
            this.loading = true;

            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
            // let url = 'https://www.freetogame.com/api/games';

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            url = url + filtr;
            await fetch(url, options)
                .then(res => {
                    return res.ok ? res.json() : Promise.reject(res)
                })
                .then(res => {
                    this.post = true;
                    this.loading = false;
                    
                    this.gamesArr.push(...res)
                })
                .catch(() => {
                    this.loading = null;
                    this.error = true;
                })
        },
        getDropMenu(e){
            this.filtr = e;
            this.gamesArr = [];
            this.getJsonFromServer(this.filtr)
        },
    },
    created() {
        this.getJsonFromServer('')
    }
}


</script>
<style lang="scss">
@import "../style/main.scss";

.anim-grow{
  transition-property: transform;
  transform: scale(1);
  transition-duration: 1s;
}
.anim-grow:hover{
  transform: scale(1.02);

}


.con-card {
    position: relative;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);

    @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(3, 1fr)
    }

    &__link {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;

        &::after {
            contain: '';
        }
    }

}
</style>