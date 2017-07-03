<template>
  <div id="stock">
    <mu-list-item :title="data.title" :describeText="data.sub_title" class="header">
      <mu-avatar :icon="icon" slot="leftAvatar" :class="iconColor"/>
      <mu-icon slot="right" value=":iconfont icon-fenxiang1"/>
    </mu-list-item>
  	<mu-content-block>
		
		<mu-list-item :title="data.datas[0].wxbt" :describeText="data.datas[0].wxzy" class="content">
		</mu-list-item>
	</mu-content-block>
	<mu-flat-button label="立即查看（积分解锁）"/>
  </div>
</template>

<script>
export default {
  name: 'stock',
  data() {
    return {
      icon:"",
      iconColor: "",
    }
  },
  props: ["data"],
  mounted () {
  	this.data.keyword == 'hot'?(this.icon = ":iconfont icon-re"):(this.icon = ":iconfont icon-jin")
  	this.data.keyword == 'hot'?(this.iconColor = "icon-hot-color"):(this.iconColor = "icon-gold-color")
  }
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
</style>