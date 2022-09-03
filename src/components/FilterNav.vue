<template>
  <div class="container navbar navbar-expand-lg navbar-dark bg-dark filter-nav border">
        <div class="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Platform
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink"  @click="createFilter">
                  <li class="dropdown-item" :data-drop="'platform='+item" v-for="item in platform" :key="item.id">{{item}}</li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
      <div class="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" @click="createFilter">
                  <li class="dropdown-item" :data-drop="'category='+item" v-for="item in category" :key="item.id">{{item}}</li>

                </ul>
              </li>
            </ul>
          </div>
      </div>

    </div>

</template>
<script>
  export default {
    emits:['filtrResult'],
    data(){
      return {
          category: [
          "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts" 
          ],
          platform: [
            "browser", "pc"
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
        // this.$emit('filtrResult',this.filtrResult)
      },
    },
    watch: {
      filtrResult(e){
        if(!e.includes('?')){
          e.unshift('?')
        }
     e = e.length > 2? e.join('=') : e.join('')
      
        this.filtrSend = e
        console.log('test',this.filtrSend)
      }
    },    
 
created(){
    // this.$emit('filtrResult',this.filtrResult)
  }
}
      
  
</script>

<style>

</style>