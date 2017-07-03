<template>
  <div id="stock">
  	<mu-content-block>
		<mu-list-item title="Photos" describeText="Jan 9, 2014" class="header">
			<mu-avatar icon=":iconfont icon-unfold" slot="leftAvatar"/>
			<mu-icon slot="right" value=":iconfont icon-fenxiang1"/>
		</mu-list-item>
		<mu-list-item title="本周热点" describeText="发觉蓝筹股上涨" class="content">
		</mu-list-item>
	</mu-content-block>
	<mu-flat-button label="立即查看（积分解锁）"/>
  </div>
</template>

<script>
export default {
  name: 'stock'
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
</style>