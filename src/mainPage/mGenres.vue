<template>

	<section>
		<ul>
			<li class="icon_Item" v-for="icon in iconList">
			<router-link :to="{ path: 'search', query: { tag:icon.name, title:icon.name}} " >
				<i :class="['iconfont',icon.iconTag]"></i>
				<p>{{icon.name}}</p>
			</router-link>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
		data(){
			return{
				iconList:[
					{name:"经典",iconTag:"icon-jiaopian"},
					{name:"动作",iconTag:"icon-37457"},
					{name:"喜剧",iconTag:"icon-yingmeiju"},
					{name:"爱情",iconTag:"icon-love"},
					{name:"悬疑",iconTag:"icon-zhentanjianying"},
					{name:"恐怖",iconTag:"icon-mogui"},
					{name:"科幻",iconTag:"icon-kehuan"},
					{name:"文艺",iconTag:"icon-font38"},
					{name:"动画",iconTag:"icon-mickey"},
					{name:"全部",iconTag:"icon-quanbu"}
				],
			}
		}
	}
</script>
<style scoped lang="scss">
	.icon_Item{
		width: 20%;
		display:inline-block;
		text-align: center;
		i{
			display: inline-block;
			background-color: white;
			border-radius: .1rem;
			padding: .05rem;
			font-size: .4rem;
		}
		p{
			letter-spacing: .01rem;
			font-size: .12rem;
			padding: .07rem 0;
		}
	}
</style>