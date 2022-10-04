<template>

    <div class="game-loading" v-if="loading">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">loading...</span>
        </div>
    </div>

    <div class="game-loading" v-if="error">
        <h1>Error</h1>
    </div>
    <div class="container" v-if="post">
        
        <div class="con-card" @click="$emit('gameSelect', $event)">
            
                <template v-for="item in gamesArr.slice(0,pages)" :key="item.id">
                    <div class="card con-card__card anim-grow">
                       
                        <a class="con-card__link" href="#" :data-id="item.id">
                            
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
export default {
    name: 'ContantComp',
    props: {
        gamesUrl: String,
        filtr: String,
        showPage: Array,
    },

    emits: ["gameSelect"],

    data() {
        return {
            gamesArr: [],
            pages: 3,

            error: null,
            loading: false,
            post: null,
        }
    },


    methods: {
        async getJsonFromServer() {
            this.error = this.post = null;
            this.loading = true;

            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '149ec3339amsha0518ee016e5238p1b47fdjsn88e4cd783202',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            url = url + this.filtr;
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
    },
    
    created() {
        this.$router.push('/')
        console.log(this.$route)

        this.getJsonFromServer()
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