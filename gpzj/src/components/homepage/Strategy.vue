<template>
  <div id="strategy">
    <mu-list-item :title="data.title" :describeText="data.remark" class="header" :href="data.link">
      <mu-avatar :icon="data.icon" slot="leftAvatar" :class="iconColor"/>
      <mu-icon slot="right" value=":iconfont icon-fenxiang1"/>
    </mu-list-item>
  	<!-- <mu-content-block> -->
		
  		<mu-list-item :title="data.datas[0].name || data.datas[0].title" class="content"  :href="data.detail_link">
  			<mu-avatar :src="data.resource+'/'+data.datas[0].pic" slot="leftAvatar"/>
        <div class="mu-item-text">
          <span v-if="data.keyword == 'short'">
            30日累计收益<span :class="data.datas[0].profit|showStatus">{{data.datas[0].profit|showNum}}</span> 30日成功率<span :class="data.datas[0].rate|showStatus">{{data.datas[0].rate|showNum}}</span>
          </span>
          <span v-if="data.keyword == 'plan'">
             计划65天内 目标<span :class="data.datas[0].profit|showStatus">{{data.datas[0].profit|showNum}}</span>
          </span>
         
        </div>
  		</mu-list-item>
      <mu-list-item :title="buttonText" :href="data.detail_link" class="footer"/>
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
  	this.data.keyword == 'short'?(this.buttonText = `立即关注（${this.data.datas[0].viewcount}人已关注）`):(this.buttonText = `立即加入（${this.data.datas[0].subscribe}人已加入）`)
  	this.data.keyword == 'short'?(this.iconColor = "icon-short-color"):(this.iconColor = "icon-plan-color")
  },
  filters: {

    showStatus(val) {
      let str = '';
      if (val && parseFloat(val) > 0) {
        str = 'red';
      } else if (parseFloat(val) < 0) {
        str = 'green';
      } else {
        str = '';
      }
      return str;
    },
    showNum (val) {
      return `${parseFloat(val).toFixed(2)}%`;
    }
  }
   
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
  #strategy {
    .red {
      color: $red7;
      .mu-item-content {
        color: $red7;
      }
    }
    .green {
      color: $green2;
    }
  }
</style>