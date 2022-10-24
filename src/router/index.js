import { createRouter, createWebHashHistory } from 'vue-router'
import GameDetails from '../components/GameDetails.vue'
import ContantComp from '../components/ContantComp.vue'
import SearchComp from '../components/SearchComp.vue'

export default new createRouter({
    history: createWebHashHistory(),
    routes: [
        // {path:'/', component: App},
        // {path:'/detail', component: GameDetails},
        {
            path:'/', 
            components: {
                contant: ContantComp
            }
        },
        {
            path:'/img/:id', 
            components: {
                detail: GameDetails
            }
        },
        {
            path:'/search',
            components: {
                search: SearchComp
            }
        }

    ]
})