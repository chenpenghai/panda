require('../assets/sass/init-style.scss');
require('./details.scss');
require('../assets/iconfont/iconfont.css');
import Vue from 'vue'
import mHeader from '../mainPage/mHeader'
import Router from 'vue-router'
import $ from 'n-zepto'
Vue.use(Router);

const router = new Router({
	routes: [{
		path: '/',
		name:'main',
	}]
});

const vm = new Vue({
	el: '#main',
	data:{
		title:"",
		subject:false,
		recommend:false
	},
	components: {
		"mHeader":mHeader,
	},
	methods:{
		loadData:function(url){
			var _this = this;
			$.ajax({
				url : url, 
				dataType : "jsonp",	
				// url : "../jsondata/details.json", 
				// dataType : "json",
				success : function(data, textStatus, jqXHR){ 
					_this.subject = data;
					_this.searchMovie(data.genres[0]+data.genres[1]);
				},
				error : function(XMLHttpRequest, textStatus, errorThrown){
					console.log("error in mMovieList ");	
				},
				complete :function(){
					console.log("completecomplete");
				}
			});
		},
		searchMovie:function(keyword){
			var _this = this;
			$.ajax({
				url : "https://api.douban.com/v2/movie/search?tag="+keyword+"&count=8", 
				dataType : "jsonp",	
				success : function(data, textStatus, jqXHR){ 
					if(data.subjects.length == 0){
						return;
					}
					_this.recommend = data;
				},
				error : function(XMLHttpRequest, textStatus, errorThrown){
				},
				complete :function(){
				}
			});
		}
	},
	watch: {
		'$route':function(to, from) {
		}
	},
	mounted(){
		var arrSet = window.location.search.substring(1).split("&");
		for(var i=0;i<arrSet.length;i++){
			arrSet[arrSet[i].split("=")[0]] = arrSet[i].split("=")[1]
		}
		var url = "https://api.douban.com/v2/movie/subject/"+arrSet.id;
		this.loadData(url);
	}
});
