<template>
  <div class="container navbar navbar-expand-lg navbar-dark filter-nav rounded-2 bg-dark-light">
        <div class="container">
          <button class="game-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="d-flex align-items-center">
              <svg width="19" height="19"  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5979 1.60833C12.6279 1.60833 11.8416 2.39463 11.8416 3.36458C11.8416 4.33453 12.6279 5.12083 13.5979 5.12083C14.5678 5.12083 15.3541 4.33453 15.3541 3.36458C15.3541 2.39463 14.5678 1.60833 13.5979 1.60833ZM10.7294 2.77917C11.0006 1.44311 12.1818 0.4375 13.5979 0.4375C15.014 0.4375 16.1952 1.44311 16.4664 2.77917H18.8666V3.95H16.4664C16.1952 5.28606 15.014 6.29167 13.5979 6.29167C12.1818 6.29167 11.0006 5.28606 10.7294 3.95H0.133301V2.77917H10.7294ZM5.40205 7.4625C4.4321 7.4625 3.6458 8.2488 3.6458 9.21875C3.6458 10.1887 4.4321 10.975 5.40205 10.975C6.372 10.975 7.1583 10.1887 7.1583 9.21875C7.1583 8.2488 6.372 7.4625 5.40205 7.4625ZM2.53352 8.63333C2.80473 7.29727 3.98595 6.29167 5.40205 6.29167C6.81815 6.29167 7.99938 7.29727 8.27058 8.63333H18.8666V9.80417H8.27058C7.99938 11.1402 6.81815 12.1458 5.40205 12.1458C3.98595 12.1458 2.80473 11.1402 2.53352 9.80417H0.133301V8.63333H2.53352ZM13.5979 13.3167C12.6279 13.3167 11.8416 14.103 11.8416 15.0729C11.8416 16.0429 12.6279 16.8292 13.5979 16.8292C14.5678 16.8292 15.3541 16.0429 15.3541 15.0729C15.3541 14.103 14.5678 13.3167 13.5979 13.3167ZM10.7294 14.4875C11.0006 13.1514 12.1818 12.1458 13.5979 12.1458C15.014 12.1458 16.1952 13.1514 16.4664 14.4875H18.8666V15.6583H16.4664C16.1952 16.9944 15.014 18 13.5979 18C12.1818 18 11.0006 16.9944 10.7294 15.6583H0.133301V14.4875H10.7294Z" fill="#3775D3"/>
                  </svg>
              </span>
          </button>
          <div class="collapse navbar-collapse game-navbar" id="navbarNavDarkDropdown">
            <ul class="navbar-nav game-navbar ">
              <!-- dropdown 1-->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle game-navbar__text" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Platform
                </a>
                <ul class="dropdown-menu dropdown-menu-dark game-navbar__dropdown" aria-labelledby="navbarDarkDropdownMenuLink"  @click="createFilter">
                  <li class="dropdown-item game-navbar__text" :data-drop="'platform='+item" v-for="item in platform" :key="item.id">{{item}}</li>
                </ul>
              </li>
              <!-- dropdown 2-->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle game-navbar__text" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </a>
                <ul class="dropdown-menu dropdown-menu-dark game-navbar__dropdown" aria-labelledby="navbarDarkDropdownMenuLink" @click="createFilter">
                  <li class="dropdown-item game-navbar__text" :data-drop="'category='+item" v-for="item in category" :key="item.id">{{item}}</li>

                </ul>
              </li>
              <!-- dropdown 3-->
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle game-navbar__text" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort
                </a>
                <ul class="dropdown-menu dropdown-menu-dark game-navbar__dropdown" aria-labelledby="navbarDarkDropdownMenuLink" @click="createFilter">
                  <li class="dropdown-item game-navbar__text" :data-drop="'sort-by='+item" v-for="item in sort" :key="item.id">{{item}}</li>
                </ul>
              </li>
            </ul>
          </div>
      </div>

    </div>

</template>
<script>
  export default {
    name: 'FilterNav',
    emits:['filtrSend'],
    
    data(){
      return {
          category: [
          "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts" 
          ],
          platform: [
            "browser", "pc", "all"
          ],
          sort:[
            "release-date", "popularity", "alphabetical", "relevance"
          ],
          filtrResult: [],
          filtrSend:''
      }
    },

    methods: {
      getDropMenu(e){
        console.log(e)
      },
      createFilter(e){
        let data = e.target.dataset.drop
        let result = this.filtrResult

        if(result.includes(data)) return

        let index = result.findIndex((value) => {
            return value.split('=')[0] === data.split('=')[0]
        });

        if (index != -1){
            console.log(result[index].split('=')[1])
            result[index].split('=')[1] = data.split('=')[1];
            result[index] = data;
        }else{
            result.push(data)
        }

        this.filtrResult = result
      },
    },

    watch: {
      filtrResult: {
        deep: true,
        handler(e){
        e = e.length > 1? e.join('&') : e.join('')
        this.filtrSend = '?'+e
        this.$emit('filtrSend', this.filtrSend)
      },
      },
    },    
created(){

  }
}

</script>

<style lang="scss">

  @import "../style/custom.scss";
      
    .game-navbar{
      &__text{
        color: $primary-dark !important;
      }

      &__dropdown{
        max-height: 300px;
        overflow-y: auto;
        background-color: $dark-light !important;
        box-shadow: -4px -8px 13px rgba(0, 0, 0, 0.3);
      }
    }
</style>

      
 
      
  