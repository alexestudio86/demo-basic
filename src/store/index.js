import { createStore } from 'vuex'
import blogger from './modules/blogger.js'


export default createStore({
  state: {
    car:      JSON.parse(localStorage.getItem('car')) || [],
    customer: ''
  },
  getters: {
    totalItems(state){
      return state.car.reduce( (sum, value) => (typeof value.quantity === 'number' ? sum + (value.quantity) : sum), 0 );
    },
    totalPrice(state){
      return state.car.reduce( (sum, value) => (typeof value.quantity === 'number' ? sum + (value.quantity * value.price) : sum), 0 );
    }
  },
  mutations: {
    setCustomerName( state, name ){
      state.customer = name
    },
    addToCar( state, item ){
      state.car.push( item );
      this.commit('setLocal');
    },
    updateCar( state, { productQuantity, productPrice, buscaDuplicado } ){
      state.car[ buscaDuplicado ].quantity = productQuantity;
      state.car[ buscaDuplicado ].price    = productPrice;
      this.commit('setLocal');
    },
    deleteProduct( state, e ){
      state.car.splice(e, 1);
      this.commit('setLocal');
    },
    setLocal( state ){
      const carString = JSON.stringify(state.car);
      localStorage.setItem('car', carString);
    }
  },
  actions: {
  },
  modules: {
    blogger
  }
})
