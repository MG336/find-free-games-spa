<template>
    <div class="scroll-top" v-show="scroll">
      <div class="scroll-top__box" @click="scrollToTop">
        <svg width="16" height="16" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.64502 0.34363L15.2856 6.98426C15.7446 7.44324 15.7446 8.18543 15.2856 8.63953L14.1821 9.74305C13.7231 10.202 12.981 10.202 12.5269 9.74305L7.81494 5.0409L3.10791 9.74793C2.64893 10.2069 1.90674 10.2069 1.45264 9.74793L0.344238 8.64441C-0.114746 8.18543 -0.114746 7.44324 0.344238 6.98914L6.98486 0.348513C7.44385 -0.115354 8.18604 -0.115354 8.64502 0.34363V0.34363Z" fill="#3e81e6d2"/>
        </svg>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
               scroll:false
            }
        },
        methods:{
            scrollToTop(){
                    document.body.scrollIntoView()
                },

                scrollTopShow(){
                    window.onscroll = () => {
                    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
                            this.scroll = true
                        } else {
                            this.scroll = false
                        }
                    }
                },
        },
        created(){
            this.scrollTopShow()
        }
    }
</script>

<style lang="scss">
    @import "../style/main.scss";
    .scroll-top {
      position: absolute;
      &__con{
        
      }
      &__box{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 15;
        width: 40px;
        height: 40px;
        position: fixed;
        background-color: $dark-light;
        bottom: 100px;
        right: 5vw;
        border-radius: 4px;
      }
    }
  </style>