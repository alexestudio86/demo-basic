<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'


export default {

  created(){
    this.getAllData();
  },
  methods: {
    ...mapActions('blogger', ['getAllData'])
  }

}
</script>
