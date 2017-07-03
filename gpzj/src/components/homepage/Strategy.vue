<template>
  <div id="strategy">
    <mu-list-item :title="data.title" :describeText="data.title" class="header">
      <mu-avatar :icon="icon" slot="leftAvatar" :class="iconColor"/>
      <mu-icon slot="right" value=":iconfont icon-fenxiang1"/>
    </mu-list-item>
  	<mu-content-block>
		
  		<mu-list-item :title="data.datas[0].name || data.datas[0].gsname" describeText="发觉蓝筹股上涨" class="content"  :disabled="true">
  			<mu-avatar :src="data.resource+'/'+data.datas[0].pic" slot="leftAvatar"/>
  		</mu-list-item>
  	</mu-content-block>
	<mu-flat-button :label="buttonText"/>
  </div>
</template>

<script>
export default {
  name: 'strategy',
  data() {
    return {
      icon:"",
      buttonText: "",
      iconColor: "",
    }
  },
  props: ["data"],
  mounted () {
  	this.data.keyword == 'short'?(this.icon = ":iconfont icon-duan1"):(this.icon = ":iconfont icon-zhong")
  	this.data.keyword == 'short'?(this.buttonText = `立即关注（人已关注）`):(this.buttonText = `立即加入（人已加入）`)
  	this.data.keyword == 'short'?(this.iconColor = "icon-short-color"):(this.iconColor = "icon-plan-color")
  }
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
</style>