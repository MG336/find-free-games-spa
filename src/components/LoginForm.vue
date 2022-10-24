<template>
    
        <div :class="[{'game-form__mask':maskActive},'game-form']">
            <transition name="fade">
                <div class="game-form__box mt-3" v-show="form">
                    <div class="game-form__close" type="button" @click="$emit('close') ">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L20 20" stroke="#579AFF" stroke-width="0.558824"/>
                        <path d="M20 1L0.999999 20" stroke="#579AFF" stroke-width="0.558824"/>
                        </svg>
                    </div>
                    <img class="w-25" src="../assets/img/Logo.png">
                    <h1 class="text-primaty-dark text-primary-dark fs-6">Log in to FindGame</h1>
                    <span class="bg-secondary p-2 rounded-2 text-dark" v-show="error" >
                        <strong>ERROR!</strong>
                        Sorry the credentials you are using are invalid.
                    </span>
                    <form class="w-100" id="formLogin" @submit.prevent="sendForm($event)">
                        <div class="mb-3">
                            <input class="form-control game-form__input text-primary" name="email" type="email"  
                             aria-describedby="emailHelp" placeholder="Email" autocomplete="on" required>
                        </div>
                        <div class="mb-3">
                            <input class="form-control game-form__input text-primary" name="password" type="password" 
                             placeholder="Password" autocomplete="on" required>
                        </div>
                        <button class="btn btn-primary w-100 game-form__btn text-light" type="submit">Login</button>
                    </form>
                    <div class="game-form__footer">
                        <a class="fs-7" href="#" @click="$emit('forgotPas')">Forgot Password?</a>
                        <span class="text-light-dark fs-7"> Not a member yet? <a @click="$emit('create-account')" href="#">Create Account</a></span>
                    </div>
                </div>
            </transition>
        </div>
    
</template>

<script>
export default{
    emits:['close','forgotPas','create-account'],
    data(){
        return {
            error:false,
            form: false,
            maskActive: false
            
        }
    },
    methods:{
        async sendForm(e){
            const url = 'https://jsonplaceholder.typicode.com/posts1';
            const form = new FormData(e.target);
            const options = {
                method: "POST", 
                body: form
            };
            fetch(url, options)
            .then(res => {
                if(!res.ok){
                    this.error = true;
                    return Promise.reject()
                }
                return res
            })
            .catch(() => {
                this.error
            });
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
        },

    },
    watch:{
    },
    
    created(){
        this.showForm()
        this.showMask()
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
        justify-content: center;
        align-items: center;
        opacity:0;
        transition: opacity 1s ease;
        display:flex;
        
        &__box{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap:20px;
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
        &__mask{
            opacity: 1;
        }
    };
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