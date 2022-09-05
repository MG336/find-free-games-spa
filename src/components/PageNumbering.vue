<template>
  <div class="container d-flex justify-content-center">
    <button type="button" class="btn btn-light" @click="calculatePageNumbers">Show More</button>
  </div>
</template>

<script>
export default {
    data(){
      return{
        pageMinMax:[0,12]
      }
    },
    methods: {
      calculatePageNumbers(){
        this.pageMinMax = [this.pageMinMax[1], this.pageMinMax[1]+12]
        this.$emit('pageMinMax', this.pageMinMax)
      }
    }
}
</script>

<style lang="scss">
    
</style>