<template>
    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Carrito de compras</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active" style="overflow:scroll; height:80vh">
                        <ul class="list-group">
                            <li class="list-group-item my-1 d-flex justify-content-between align-items-center" v-for='(c, i) of car' :key="i">
                                <button class="btn" @click="deleteProduct(i)"><i class="far fa-times-circle text-danger fa-2x"></i></button>
                                <div class="text-end">
                                    <p class="fs-6 fw-bold">{{ c.title }} x {{ c.quantity }} | {{ c.price * c.quantity }}</p>
                                    <small>(1 x {{ c.price }})</small>
                                </div>
                            </li>
                        </ul>
                        <ul class="list-group">
                            <li class="list-group-item my-1 d-flex justify-content-between align-items-center">
                                <span>Total:</span>
                                <div>
                                    <span class='fw-bold'>{{ totalItems }}</span> | <span class='fw-bold price'>{{ totalPrice }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="carousel-item" style="overflow:scroll; height:80vh">
                        <FormName />
                    </div>
                </div>
            </div>

            <div class="my-1 px-3 fixed-bottom" v-if='car.length > 0'>
                <div class="row" v-if='slideStatus'>
                    <div class="col-12">
                        <button @click="changeSlideStatus" class="btn btn-primary w-100" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">Continuar</button>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-3">
                        <button @click="changeSlideStatus" class="btn btn-primary w-100" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" ><i class="fas fa-chevron-left"></i></button>
                    </div>
                    <div class="col-9">
                        <button  class="btn btn-success w-100" type="button" :disabled='customer.length < 4' >Realizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import FormName from '@/components/FormName.vue'


export default {

    name: 'CheckoutOffcanvas',
    data(){
        return{
            name:           null,
            slideStatus:    true
        }
    },
    components: {
        FormName
    },
    computed: {
        ...mapState(['car', 'customer']),
        ...mapGetters(['totalItems', 'totalPrice']),
    },
    methods: {
        ...mapMutations(['deleteProduct']),
        changeSlideStatus(){
            this.slideStatus = !this.slideStatus
        }
    }

}
</script>
