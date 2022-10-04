import { createRouter, createWebHashHistory } from 'vue-router'
import GameDetails from '../components/GameDetails.vue'
import ContantComp from '../components/ContantComp.vue'
// import App from '../App.vue'


export default new createRouter({
    history: createWebHashHistory(),
    routes: [
        // {path:'/', component: App},
        {path:'/detail', component: GameDetails},
        {path:'/', component: ContantComp}
    ]
})