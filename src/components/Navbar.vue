<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark zIndex-2 sticky-top">
      <div class="container">
        <a class="navbar-brand d-none d-sm-block" href="/">{{ title }}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="navbar-toggler-icon"></i>
        </button>
        <button class="btn btn-dark d-block d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
            <i class="fas fa-shopping-cart fa-lg me-1"></i>
            <span class="badge rounded-pill bg-danger">{{ totalItems }}</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link text-uppercase" href="#home">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase" href="#menu">
                        Menú
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase" href="#contact">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
      </div>
  </nav>
</template>


<script>
import { mapState, mapGetters } from 'vuex'


export default {

    name: 'Navbar',
    computed: {
      ...mapState('blogger', ['title']),
      ...mapGetters(['totalItems']),
    }

}
</script>

<style scoped>

    nav a.router-link-exact-active {
    color: #42b983;
    }

</style>