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
      }
    },
    actions: {
      getAllData: async function ({ commit }) {
        try{
          // Limitado a 199 elementos
          const data          = await fetch(`https://www.blogger.com/feeds/5038678016736099105/posts/default?alt=json&max-results=20`);
          /*
          const data          = await fetch(`https://paraisodj.blogspot.com/feeds/5038678016736099105/posts/default?max-results=20`, {
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
          
          commit('allData', { blogTitle, blogSubtitle, allLabels, allPosts })
        }catch(error){
          console.log(error)
        }
      }
    }
  }