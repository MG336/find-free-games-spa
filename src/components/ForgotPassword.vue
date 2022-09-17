<template>
<div class="game-form bg-dark ">
            <transition name="fade">
                <div class="game-form__box mt-3" v-show="form">
                    <div class="game-form__close" type="button" @click="$emit('close') ">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L20 20" stroke="#579AFF" stroke-width="0.558824"/>
                        <path d="M20 1L0.999999 20" stroke="#579AFF" stroke-width="0.558824"/>
                        </svg>
                    </div>
                    <img class="w-25" src="../assets/img/Logo.png">
                    
                    <span class="text-light-dark text-center fs-6 ">
                        <h1 class="text-primaty-dark text-primary-dark fs-6">Forgot Your Password?</h1>
                        <p class="fs-7 m-0">
                            Just enter your email address below and we'll send you a link via email to reset your password!
                        </p>
                    </span>
                    <form class="w-100" id="formLogin" @submit.prevent="sendForm($event)">
                        <div class="mb-3">
                            <input class="form-control game-form__input text-primary" name="email" type="email"  
                             aria-describedby="emailHelp" placeholder="Email" autocomplete="on" required>
                        </div>
                        <button class="btn btn-primary w-100 game-form__btn text-light" type="submit">Send Reset Instructions</button>
                    </form>
                    <div class="game-form__footer">
                        <span class="text-light-dark fs-7">Remembered password? <a @click="$emit('login')" href="#">Login!</a></span>
                    </div>
                </div>
            </transition>
        </div>
</template>
<script>
    export default{
     emits:['close','login'],
        data(){
            return {
                form:false
            }
        },
        methods:{
            async sendForm(e){
                const url = 'https://jsonplaceholder.typicode.com/posts';
                const form = new FormData(e.target);
                const options = {
                    method:"POST",
                    body:form,
                }
                fetch(url, options)
                .then((rec)=>{
                    console.log("submitted");
                    if(!rec.ok){
                        return Promise.reject()
                    }
                }).catch(() => {
                    console.error('submitted error')
                })
            },
            async showForm(){
                setTimeout(()=>{
                    this.form = true;
                },100)
            }
        },
      created(){
          this.showForm()
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
    .game-form{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: $dark;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &__box{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap:20px;
            // height: 100%;
           max-width: 400px;
           padding: 40px; 
           border-radius: 8px;
           background-color: $dark-light;
           flex-grow: 1;
           border-radius: 8px;
           z-index:11;
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
    }

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
