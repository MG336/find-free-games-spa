<template>

    <div :class="[{'game-form__mask': maskActive}, 'game-form']" >
        
        <transition name="fade">
            <div class="game-form__box mt-3" v-show="form">
                <div class="game-form__close" type="button" @click="$emit('close') ">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L20 20" stroke="#579AFF" stroke-width="0.558824"/>
                    <path d="M20 1L0.999999 20" stroke="#579AFF" stroke-width="0.558824"/>
                    </svg>
                </div>
                <img class="game-form__logo" src="../assets/img/Logo.png">
                <h1 class="text-primaty-dark text-primary-dark fs-6">Create My Account!</h1>
                <form class="w-100" id="formLogin" @submit.prevent="sendForm($event)">
                    <div class="mb-3">
                        <input class="form-control game-form__input text-primary" name="email" type="email"  
                         aria-describedby="emailHelp" placeholder="Email" autocomplete="on" required>
                    </div>
                    <div class="mb-3 game-form__passwords">
                        <input class="form-control game-form__input text-primary" name="password" type="password" 
                         placeholder="Password" autocomplete="off" required>
                        <input class="form-control game-form__input text-primary" name="confirmPassword" type="password" 
                         placeholder="Confirm password" autocomplete="off" required>
                    </div>
                    <button class="btn btn-primary w-100 game-form__btn text-light" type="submit">Create Account</button>
                </form>
                <div class="game-form__footer">
                    <span class="text-light-dark fs-7">Already a member? <a @click="$emit('login')" href="#">Log In</a></span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>

    export default{
        emits:['close','login'],
        data(){
            return{
                form: false,
                mask: false,
                maskActive:false,
                error:false
            }
        },
        methods:{
            async sendForm(e){
                const url = 'https://jsonplaceholder.typicode.com/posts';
                const form = new FormData(e.target);
                const options = {
                    method:"POST",
                    body:form
                }
                fetch(url, options)
                .then((rec)=>{
                    if(!rec.ok){
                        return Promise.reject()
                    }
                }).catch(() => {
                    console.log("error")
                
                })
            },

            // Animation
            async showForm(){
                setTimeout(() => {
                    this.form = true
                }, 500);
            },
            async showMask(){
                setTimeout(() => {
                    this.maskActive = true;
                },0);
            }  
        },
        watch(){

        },
        created(){
            
            this.showMask();
            this.showForm();
        },
        mounted(){
        document.documentElement.style.overflow = 'hidden';
      },
        unmounted(){
            document.documentElement.style.overflow = 'visible';
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/main.scss';
    .game-form {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: $dark;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity:0;
        transition: opacity 1s ease;

        &__box{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap:20px;
           max-width: 680px;
           padding: 40px; 
           border-radius: 8px;
           background-color: $dark-light;
           flex-grow: 1;
           border-radius: 8px;
           z-index:11;
        }
        &__logo{
            width: 100px;
        }
        &__close{
            position: absolute;
            right: 10px;
            top: 10px;
        }

        &__input{
            min-height: 48px;
        }
        &__footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4;
        }
        &__btn{
            height: 48px ;
        }
        &__passwords{
            display: flex;
            gap: 16px;
            @include media-breakpoint-down(md){
                flex-direction: column;
            }
        }
        &__mask{
            opacity: 1;
        }
    }

    // Animation Form
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 1s ease, transform 0.5s ease-out
    }
    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    transform: scale(0.5);
    }
        

     
</style>