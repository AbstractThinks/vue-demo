<template>
  <div id="stock">
    <mu-list-item :title="data.title|showTitle(data.sub_title)" :describeText="data.datas[0].format_time" class="header" :href="data.link">
      <mu-avatar :icon="data.icon" slot="leftAvatar" :class="iconColor"/>
      <mu-icon slot="right" value=":iconfont icon-fenxiang1" />
    </mu-list-item>		
		<mu-list-item :title="data.datas[0].wxbt" :describeText="data.datas[0].wxzy" class="content" :href="data.detail_link" />

   <mu-list-item title="立即查看（积分解锁）" :href="data.detail_link" class="footer"/>
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
  },
  filters: {
    showTitle(val, val2) {
      return `${val}·${val2}`;
    },
    showDate: function(val) {
        let date = new Date(val);
        let str = val?`${date.getMonth()+1}月${date.getDate()}日`:'';
        return str;
        
    },
  },
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
</style>