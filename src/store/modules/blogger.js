export default {
  namespaced: true,
  state: {
    title:    '',
    subtitle: '',
    labels:   [],
    posts:    []
  },
  mutations: {
    allData( state, { blogTitle, blogSubtitle, allLabels, allPosts } ){
      state.title         = blogTitle;
      state.subtitle      = blogSubtitle;
      state.labels        = allLabels;
      state.posts         = allPosts;
    },
    updateInputs( state ){
      //console.log( this.state.car )
      this.state.car.forEach( c => {
        const buscaEnPost    = state.posts.indexOf( state.posts.find( p => p.id.$t === c.id ) );
        if( buscaEnPost >= 0 ){
          const postQuantity    = this.state.car[ this.state.car.indexOf( this.state.car.find( c => c.id === state.posts[buscaEnPost].id.$t ) ) ].quantity;
          state.posts[buscaEnPost].quantity = postQuantity;
        }
      })
    }
  },
  actions: {
    getAllData: async function ({ commit }) {
      try{
        // Limitado a 199 elementos
        const data          = await fetch(`https://www.blogger.com/feeds/5038678016736099105/posts/default?alt=json&max-results=100`);
        /*
        const data          = await fetch(`https://paraisodj.blogspot.com/feeds/5038678016736099105/posts/default`, {
          'mode': 'cors',
          'headers': {
              'Access-Control-Allow-Origin': '*',
          }
        });
        */
        const allData       = await data.json();
        const blogTitle     = allData.feed.title.$t;
        const blogSubtitle  = allData.feed.subtitle.$t
        const allLabels     = allData.feed.category;
        const allPosts      = allData.feed.entry;

        allPosts.forEach( (e, i) => {
          allPosts[i].quantity = 0;
        });

        commit('allData', { blogTitle, blogSubtitle, allLabels, allPosts });
        commit('updateInputs');
      }catch(error){
        console.log(error)
      }
    }
  }
}