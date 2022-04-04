<template>
  <div class="container bg-white py-2 text-center" style="overflow: auto; white-space: nowrap" >
    <button type="button" class="btn badge rounded-pill bg-light text-dark p-2 m-1"  >
      Todo
    </button>
    <button type="button" v-for="(label, index) of labels" :key="index" 
    class="btn badge rounded-pill bg-light text-dark p-2 m-1"  >
      {{ label }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {

    name: 'Labels',
    data(){
      return{
        labels: ['Grill', 'Desayunos', 'Ensaladas', 'Extras', 'Postres', 'Alitas', 'Pollo', 'Hamburguesa-Res', 'Sincronizadas', 'Hotdog', 'Hamburguesa-Arrachera']
      }
    }
    /*
    computed: {
        ...mapState('blogger', ['labels'])
    }
    */
}
</script>