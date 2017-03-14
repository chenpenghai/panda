require('./assets/iconfont/iconfont.css');
import initStyle from './assets/sass/initStyle'
import Vue from 'vue'
import mHeader from './mainPage/mHeader'
import mInTheaters from './mainPage/mInTheaters'
import mGenres from './mainPage/mGenres'
import Router from 'vue-router'
import $ from 'n-zepto'
Vue.use(Router);

const mInTheatersMore = resolve => {
  require.ensure(['./mainPage/mInTheatersMore.vue'], () => {
    resolve(require('./mainPage/mInTheatersMore.vue'))
  })
};

const router = new Router({
  routes: [{
    path: '/InTheatersMore',
    name:'InTheatersMore',
    component: mInTheatersMore,
    beforeEnter: (to, from, next) => {
      next();
    }
  },{
    path: '/',
    name:'main',
    beforeEnter: (to, from, next) => {
      next();
    }
  }]
});

const vm = new Vue({
  el: '#main',
  router,
  data:{
    routerToMore:false,
    moreCallBack_data:[],
    moreCallBack : function(data){
      vm.moreCallBack_data = data;
      this.$router.push({ name: 'InTheatersMore'})
    }
  },
  components: {
  	"mHeader":mHeader,
  	"mInTheaters":mInTheaters,
  	"mGenres":mGenres
  },
  watch: {
    '$route':function(to, from) {
      if(to.name == 'InTheatersMore'){
        to.params.subjects = this.moreCallBack_data;
        this.routerToMore = true;
      }else if(to.name == 'main'){
        this.routerToMore = false;
      }
    }
  },
  mounted(){

  }
});
