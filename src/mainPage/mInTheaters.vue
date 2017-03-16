<template>
	<section class="in_theaters">
		<header>
			<h3>{{title}}</h3>
			<!-- <a href="javascript:;" v-on:click="routerToMore">更多 > </a> -->
			<router-link :to="{ path: 'search', query: { rank:rank, title:title }} " >更多</router-link>
		</header>
		<div class="ul_warp">
			<ul class="ul_subjects">
				<li class="subject" v-for="subject in subjectsSlice">
					<a :href="'details.html?id='+subject.id">
						<div class="imgwarp" :style="{backgroundImage:'url('+subject.images.medium+')'}">
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

					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

</script>
<script>
	export default {
		props: ['rank','title'],
		data: function() {
			return {
				subjects: []
			}
		},
		computed:{
			subjectsSlice:function(){
				return  this.subjects.slice(0,8);
			}
		},
		methods:{
		},
		mounted(){
		},
		created(){
			var _this = this;
			$.ajax({
				url : 'https://api.douban.com/v2/movie/'+this.rank, 
				dataType : "jsonp",	
				// url : "../jsondata/in_theaters.json", 
				// dataType : "json",
				success : function(data, textStatus, jqXHR){ 
					_this.subjects = data.subjects;
				},
				error : function(XMLHttpRequest, textStatus, errorThrown){
					console.log("error v2/movie/in_theaters : "+textStatus);	
				}
			});
		}
	}
</script>
<style scoped lang="scss">
	.in_theaters{
		/*padding: 0 .1rem;*/
	}
	header{
		padding: .1rem .11rem;
		display: flex;
		justify-content: space-between;
	}
	.ul_warp{
		overflow: scroll;
		margin-bottom: .1rem;
		&::-webkit-scrollbar{
			width:0px;
			height: 0px;
		}
	}
	.ul_subjects{
		margin-bottom: .1rem;
		display: inline-block;
		white-space: nowrap;
		padding: 0 .08rem;

		.subject{
			width: .85rem;
			display: inline-block;
			vertical-align: top;
			padding: 0 .03rem;
			text-align: center;

			.imgwarp{
				height: 1.2rem;
				background-size: cover;
				background-position: center;			
			}
			.title{
				padding: .05rem 0 .03rem;
				text-align: center;
				display: block;
				overflow:hidden; 
				white-space:nowrap; 
				text-overflow: ellipsis; 
				font-size: .13rem;
			}
			.rating{
				font-size: .1rem;
				color:gray;
				i.iconfont{
					font-size: .1rem;
				}
			}
		}
	}
</style>