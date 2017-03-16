require('./assets/iconfont/iconfont.css');
import initStyle from './assets/sass/initStyle'
import Vue from 'vue'
import mHeader from './mainPage/mHeader'
import mInTheaters from './mainPage/mInTheaters'
import mGenres from './mainPage/mGenres'
import Router from 'vue-router'
import $ from 'n-zepto'
Vue.use(Router);

const mMovieList = resolve => {
  require.ensure(['./mainPage/mMovieList.vue'], () => {
    resolve(require('./mainPage/mMovieList.vue'))
  })
};

const router = new Router({
  routes: [{
    path: '/',
    name:'main',
  },{
    path: '/search',
    name:'mMovieList',
    component: mMovieList
  }]
});

const vm = new Vue({
  el: '#main',
  router,
  data:{
    routerToMore:false
  },
  components: {
  	"mHeader":mHeader,
  	"mInTheaters":mInTheaters,
  	"mGenres":mGenres
  },
  watch: {
    '$route':function(to, from) {
      if(from.name == 'main'){
        this.routerToMore = true;
      }else if(to.name == 'main'){
        this.routerToMore = false;
      }
    }
  },
  mounted(){

  }
});
