<template>
	<section>
		<header>
			<h3>{{title}}</h3>
		</header>
		<div class="ul_warp">
			<ul class="ul_subjects">
				<li class="subject" v-for="subject in subjects">
					<div class="imgwarp" :style="{backgroundImage:url(subject.images.medium)}">
					</div>
					<span class="title">{{subject.title}}</span>
					<div class="rating">
						<span v-if="subject.rating.average > 0">
							<i v-for="n in 5" :style="{color:n<=subject.rating.stars.charAt(0)?'yellow':'gray'}" class="iconfont icon-11"></i>
							<span>{{subject.rating.average}}</span>
						</span>
						<span v-else>
							暂无评分
						</span>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

</script>
<script>
	export default {
		data () {
			return {
				subjects: [],
				title:"加载中..."
			}
		},
		methods:{
			url:function(url){
				return "url("+url+")";
			},
			loadDate(url,title){
				console.log(url);
				var _this = this;
				$.ajax({
					url : url, 
					dataType : "jsonp",	
					success : function(data, textStatus, jqXHR){ 
						_this.subjects = data.subjects;
						_this.title = title;
					},
					error : function(XMLHttpRequest, textStatus, errorThrown){
						console.log("error in mMovieList ");	
					}
				});
			}
		},
		mounted(){
			
		},
		beforeRouteEnter (to, from, next) {
			var url = "https://api.douban.com/v2/movie/";
			console.log("fffffffffffffffffffffff");
			console.log(to);
			if(to.query.rank){
				url += to.query.rank
			}else if(to.query.tag){
				url += "search?tag="+to.query.tag;
			}else{
				next(false);
				return;
			}
			next(function(vm){
				vm.loadDate(url,to.query.title);
			});
		},
		// beforeRouteLeave (to, from, next) {
			// console.log(111111111111111111);
			// next();
		// },
	}
</script>
<style scoped lang="scss">
	header{
		padding: .1rem .11rem;
		display: flex;
		justify-content: space-between;
	}
	.ul_warp{
		overflow: scroll;
		&::-webkit-scrollbar{
			width:0px;
			height: 0px;
		}
	}
	.ul_subjects{
		padding: 0 .03rem;
		.subject{
			width: 33.3333%;
			box-sizing: border-box;
			display: inline-block;
			vertical-align: top;
			padding: 0 .1rem 0.15rem;
			text-align: center;
			.imgwarp{
				width: .85rem;
				height: 1.2rem;
				margin: auto;
				background-size: cover;
				background-position: center;			
			}
			.title{
				width: .85rem;
				margin:auto;
				padding: 0.05rem 0 .03rem;
				text-align: center;
				display: block;
				overflow:hidden; 
				white-space:nowrap; 
				text-overflow: ellipsis; 
				font-size: .13rem;
			}
			.rating{
				width: .85rem;
				margin:auto;
				font-size: .1rem;
				color:gray;
				i.iconfont{
					font-size: .1rem;
				}
			}
		}
	}
</style>