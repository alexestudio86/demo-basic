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
                        <div class="col-3">
                            <button class="btn w-100 text-danger">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <div class="col-6">
                            <input class="form-control w-100 text-center" type="number" value="1">
                        </div>
                        <div class="col-3">
                            <button class="btn w-100 text-success">
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
    computed: {
        ...mapState('blogger', ['posts'])
    },
    methods: {
        filterLabel( evt ){
            if(evt.length == 0){
                return 'Varios'
            }else if (evt.length == 1) {
                return evt[0].term
            } else {
                return evt[0].term
            }
        },
        filterPrice( evento ){
            if(evento.length == 0){
                return '500'
            }else if (evento.length == 1) {
                return evento[1].term
            } else {
                return evento[1].term
            }
        },
        filterText( x ){
            let div         = document.createElement('div');
            div.innerHTML   = x.$t;
            return div.textContent || div.innerText;
        },
        filterImage( y ){
            return y.replace('s72', 's320')
        }
    }

}
</script>