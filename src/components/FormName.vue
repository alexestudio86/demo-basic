<template>
  <div class="border-bottom border-2 border-success animate__animated animate__fadeInRight" style="overflow:scroll; height:80vh">
    <div class="py-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ej. José Blaz" v-model='name' >
        <div class="form-text" v-if='customer.length > 0 && customer.length < 4'>Su nombre no puede ser tan corto</div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'


export default {

  name: 'FormName',
  data(){
    return{
      name: ''
    }
  },
  watch: {
    sentName( ){
    }
  },
  computed: {
    ...mapState(['customer']),
    sentName(){
      this.$store.commit('setCustomerName', this.name);
    }
  }

}
</script>