<template>
  <div id="strategy">
  	<mu-content-block>
		<mu-list-item title="Photos" describeText="Jan 9, 2014" class="header">
			<mu-avatar icon=":iconfont icon-unfold" slot="leftAvatar"/>
			<mu-icon slot="right" value=":iconfont icon-fenxiang1"/>
		</mu-list-item>
		<mu-list-item title="本周热点" describeText="发觉蓝筹股上涨" class="content">
			<mu-avatar src="http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v3/avatar/20150317/zzj.jpg" slot="leftAvatar"/>
		</mu-list-item>
	</mu-content-block>
	<mu-flat-button label="立即查看（积分解锁）"/>
  </div>
</template>

<script>
export default {
  name: 'strategy'
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
</style>