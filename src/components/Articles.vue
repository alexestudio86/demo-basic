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
                            <button class="btn btn-light text-danger w-100" @click="minusItem(index)">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <div class="col-4">
                            <input class="form-control w-100 text-center" type="number" v-model.number='post.quantity' :name='"quantity"+index' min="0" max='50' />
                        </div>
                        <div class="col-4">
                            <button class="btn btn-light text-primary w-100" @click="plusItem(index)">
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
import { mapState } from 'vuex'


export default {

    name: 'Articles',
    data(){
        return{
            item: {
                id:             null,
                title:          null,
                picture:        null,
                quantity:       null,
                price:          null
            }
        }
    },
    computed: {
        ...mapState('blogger', ['posts'])
    },
    methods: {
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
        makeItem( y ){
            this.item.id    =   y;

            if( y ){

            }
        },
        minusItem( idx ){
            if( this.posts[idx].quantity >1 ){
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