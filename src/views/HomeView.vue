<template>
  <div id="home">
    <Navbar />
    <Header />
    <main class="bg-light py-3" id='services'>
        <div class="container py-4">
            <h1 class="text-center">Nuestro productos</h1>
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
import Articles from '@/components/Articles.vue'
import Footer from '@/components/Footer.vue'
import CheckoutOffcanvas from '@/components/CheckoutOffcanvas.vue'


export default {
  name: 'HomeView',
  components: {
    Navbar, Header, Articles, Footer, CheckoutOffcanvas
  }
}
</script>
