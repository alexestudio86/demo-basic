<template>
  <div class="home">
    <Navbar />
    <Header />
    <main class="bg-light py-3">
        <div class="container py-4">
            <h1 class="text-center">Nuestro productos</h1>
              <Labels />
            <div class="row">
              <Articles />
            </div>
        </div>
    </main>
    <Footer />
    <CheckoutOffcanvas />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Labels from '@/components/Labels.vue'
import Articles from '@/components/Articles.vue'
import Footer from '@/components/Footer.vue'
import CheckoutOffcanvas from '@/components/CheckoutOffcanvas.vue'


export default {
  name: 'HomeView',
  components: {
    Navbar, Header, Labels, Articles, Footer, CheckoutOffcanvas
  }
}
</script>
