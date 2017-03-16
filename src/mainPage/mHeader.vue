<template>
	<header>
		<i class="iconfont icon-panda2"></i>
		<strong >熊猫电影</strong>
		<div class="inputwarp">
			<input type="search" name="">
			<i class="iconfont icon-sousuo1"></i>
		</div>
		<i class="iconfont icon-wodejuhuasuan"></i>
	</header>
</template>
<script>
	export default {

	}
</script>
<style type="text/css">
	/*body{
		margin-top: .4rem;
	}*/
	#main{
		margin-top: .4rem;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y: hidden;
		background-color: #eee;
	}
	.main_content{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: scroll;
	}
</style>
<style scoped lang="scss">
	header{
		max-width: 1024px;
		width: 100%;
		height: .4rem;
		position: fixed;
		top: 0;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;

		.icon-panda2{
			padding-top: 0.04rem;
			margin: 0 .07rem;
			font-size: .3rem;
		}
		.inputwarp{
			flex:1;
			position: relative;
			margin: 0 .1rem;
			display: flex;
			align-items: center;
			input{
				width: 100%;
				background-color: #eee;
				border: none;
				border-radius: .2rem;
				height: .25rem;
				padding: 0 .3rem 0 .1rem;
			}
			.icon-sousuo1{
				position: absolute;
				right: .12rem;
				color:#aaa;
			}
		}
		.icon-wodejuhuasuan{
			margin-right: .1rem;
			font-size: .2rem;
		}
	}
</style>