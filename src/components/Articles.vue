<template>
    <article class="col-md-6 p-2" v-for="(post, index) of posts" :key="index">
        <div class="card p-2">
            <div class="row p-2">
                <div class="col-3">
                    <img class="w-100" :src="filterImage(post.media$thumbnail.url)" :alt="post.title.$t" width="320">
                </div>
                <div class="col-9">
                    <div class="row">
                        <header class="col-8">
                            <h1 class="fs-4 text-uppercase text-primary cadr-title">{{ post.title.$t }}</h1>
                        </header>
                        <div class="col-4">
                            <span class="fw-bold price text-success">{{ filterPrice( post.category ) }}</span>
                        </div>
                        <div class="col-12">
                            <span class="fs-5 badge bg-secondary my-2">{{ filterLabel( post.category ) }}</span>
                        </div>
                        <p class="col-12">{{ filterText( post.content ) }}</p>
                    </div>
                </div>
                <div class="col-12 d-block d-sm-none">
                    <form class="row border p-1" @submit.prevent="">
                        <div class="col-4">
                            <button v-if='post.quantity === 0' class="btn btn-light w-100" type="button" disabled>
                                <i class="fas fa-ban text-secondary" ></i>
                            </button>
                            <button v-else-if='post.quantity === 1' class="btn btn-light w-100" type="button" @click.stop="[minusItem(index),deleteProduct(index)]">
                                <i class="far fa-trash-alt text-danger" ></i>
                            </button>
                            <button v-else class="btn btn-light w-100" type="button" @click.stop="[minusItem(index),preOrder(post.id.$t, post.title.$t, post.quantity, parseInt(post.category[0].term) ? parseInt(post.category[0].term) : parseInt(post.category[1].term))]" >
                                <i class="fas fa-minus text-danger" ></i>
                            </button>
                        </div>
                        <div class="col-4">
                            <input class="form-control w-100 text-center" type="number" v-model.number='post.quantity' :name='"quantity"+index' min="0" max='50' />
                        </div>
                        <div class="col-4">
                            <button class="btn btn-light text-primary w-100" type="button" @click.stop="[plusItem(index), preOrder(post.id.$t, post.title.$t, post.quantity, parseInt(post.category[0].term) ? parseInt(post.category[0].term) : parseInt(post.category[1].term))]">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex'


export default {

    name: 'Articles',
    computed: {
        ...mapState('blogger', ['posts']),
        ...mapState(['car']),
    },
    methods: {
        ...mapMutations(['addToCar', 'updateCar', 'deleteProduct']),
        filterLabel( evt ){
            if(evt.length < 1){
                return 'Varios'
            } else {
                if( parseInt(evt[0].term) ){
                    return evt[1].term
                }else{
                    return evt[0].term
                }
            }
        },
        filterPrice( evento ){
            if(evento.length < 1){
                return '500'
            } else {
                if( parseInt(evento[0].term) ){
                    return evento[0].term
                }else{
                    return evento[1].term
                }
            }
        },
        filterText( x ){
            let div         = document.createElement('div');
            div.innerHTML   = x.$t;
            return div.textContent || div.innerText;
        },
        filterImage( y ){
            return y.replace('s72', 's320')
        },
        filterID( z ){
            // Extract with regex
            const id = ( z.match(/\post-\d+/g) ).toString();
            id.substring(id.indexOf('-')+1);
            return z.substring(z.lastIndexOf('-')+1)
        },
        preOrder( productID, productTitle, productQuantity, productPrice ){
            // Donst use data return, because allways use only one space in array
            const item = {
                id          :   productID,
                title       :   productTitle,
                quantity    :   productQuantity,
                price       :   productPrice
            }
            const buscaDuplicado = this.car.indexOf( this.car.find( c => c.id === item.id ) );
            if( buscaDuplicado >= 0 ){
                this.updateCar({productQuantity, productPrice, buscaDuplicado});
            }else{
                this.addToCar(item);
            }
        },
        minusItem( idx ){
            if( this.posts[idx].quantity >0 ){
                this.posts[idx].quantity--
            }
        },
        plusItem( index ){
            if( this.posts[index].quantity < 9 ){
                this.posts[index].quantity++
            }
        }
    }

}
</script>