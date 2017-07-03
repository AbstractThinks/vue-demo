<template>
  <div id="review">
  	<mu-content-block>
		<mu-list-item title="Photos" describeText="Jan 9, 2014" class="header">
			<mu-avatar icon=":iconfont icon-ping" slot="leftAvatar"/>
		</mu-list-item>
		<div class="text-center title">早评：指数张良不足，或校服正当上扬</div>
		<div class="text-center desc">06月20日 8：00</div>
		<div class="blank10"></div>
		<div class="content">
			今日观点：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬
			<div class="gradient-mask"></div>
		</div>
	</mu-content-block>
	<mu-flat-button label="查看更多"/>
  </div>
</template>

<script>
export default {
  name: 'review'
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#review {
		.content {
			position: relative;
		}
		.gradient-mask {
			position: absolute;
			bottom: 0;
			height: 42px;
			width: 100%;
			background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));

		}
	}
</style>