<template>
  <header class="bg-dark pb-3">
      <div class="bg-header">
          <div class="container w3-display-container min-vh-88">
              <div class="w3-display-left d-none d-sm-block">
                  <h3 class="fs-2 text-white">{{ title }}</h3>
                  <h1 class="fs-4 text-white">{{ subtitle }}</h1>
              </div>
              <img class="d-block d-sm-none w-100" src="@/assets/bg-header.jpg" :alt="title" width='640' style="height:130px; object-fit:cover">
              <div class="w3-display-right w3-display-custom">
                  <img class="w-100" src="@/assets/logo.png" :alt="title" width="300">
              </div>
          </div>
      </div>
  </header>
</template>


<script>
import { mapState } from 'vuex'


export default {

    name: 'Header',
    computed: {
      ...mapState('blogger', ['title', 'subtitle'])
    }

}
</script>

<style scoped>

    .w3-display-container{
         position:               relative;
    }

    /* Display in desktop */
    @media (min-width:576px){
        .bg-header {
            background-image:       url( '@/assets/bg-header.jpg' );
            background-color:       #000;
            min-height:             100%;
            background-position:    center;
            background-repeat:      no-repeat;
            background-size:        cover;
        }
        .min-vh-88 {
            min-height:             88vh;
        }
        .w3-display-left {
            position:               absolute;
            top:                    50%;
            left:                   0;
            transform:              translate(0%, -50%);
        }
        .w3-display-right {
            position:               absolute;
            top:                    50%;
            right:                  0%;
            transform:              translate(0%, -50%);
        }
    }
    @media (max-width:576px){
        .w3-display-custom {
            position:               absolute;
            right:                  0;
            bottom:                 0;
            width:                  120px;
            background:             rgb(255, 255, 255);
            transform:              translate(-50%, 50%);
        }
    }

</style>