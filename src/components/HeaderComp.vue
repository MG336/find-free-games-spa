<template>
<nav class="navbar navbar-expand-lg navbar-dark game-nav">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../assets/img/Logo.png">
    </a>
    <button class="game-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="navigation">
      <span class="d-flex align-items-center">
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11_90)">
        <rect width="27" height="3" fill="#3775D3"/>
        <rect y="6" width="27" height="3" fill="#3775D3"/>
        <rect y="12" width="27" height="3" fill="#3775D3"/>
        </g>
        <defs>
        <clipPath id="clip0_11_90">
        <rect width="20" height="15" fill="white"/>
        </clipPath>
        </defs>
        </svg>

      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <!-- <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Link3</a>
        </li>

      </ul> -->

      <ul class="navbar-nav ms-auto text-light" @mousedown.prevent @click="$emit('loginForm',$event.target.dataset.form)">
        <li class="nav-item me-2 py-3 py-md-0">
            <a class="nav-link text-primary-dark hover-text" type="button" data-form="login">Log in</a>
        </li>
          
 
        <li class="nav-item">
          <a class="nav-link btn btn-outline-primary" data-form="joinFree">Join Free</a>
        </li>
      </ul>

    </div>
  </div>
</nav>

  <div class="bg-secondary header h-200 ">
    <div class="container">
      <div class="header__titleBox">
        <h1 class="header__title fs-1 text-uppercase fw-bold text-light">Find the best free-to-play games!</h1>
      </div>
  </div>
  </div>
  
</template>
<script>
  export default{
    emits:['loginForm'],
    // {
    //   loginForm(e){
    //     return e? true : null
    //   }
    // },
    data(){
      return {
      }
    },

  }
</script>

<style lang="scss">


  .game-nav{
    // min-height:72px;
    z-index: 10;
    position: relative;
    background-color: black;
  }
  .header{
    height: 320px;
    justify-content: left;
    align-items: center;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:  url(../assets/img/bg2.jpg);
    background-position: center;
    &__titleBox {
      // max-width:400px;
      top: 30%;
      left: 50%;
    }
    &__title{
        font-size:3.5rem;
    }
      
  }
</style>