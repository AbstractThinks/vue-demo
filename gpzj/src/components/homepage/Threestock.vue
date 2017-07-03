<template>
  <div id="threestock">
  	<mu-list-item :title="data.title|showTitle(data.sub_title)" describeText="Jan 9, 2014" class="header" :disabled="true">
		<mu-avatar icon=":iconfont icon-san" slot="leftAvatar" class="icon-threestock-color"/>
	</mu-list-item>
  	<mu-content-block>
		
		<div v-html="data.datas[0].sremark"></div>
		<div class="text-center">
			<mu-raised-button label="点击查看个股" primary/>
		</div>
		<h6 class="text-center tip text-center">开户用户及适当性匹配用户<br />目前免费查看以下内容</h6>

		<h6 class="text-center tip text-center">以上个股不做推荐，仅供参考<br />股市有风险，投资须谨慎</h6>
        <h6 class="text-center tip text-left">风险提示：投资者请按照自身的股票操作能力谨慎参考以上内容，在股票投资中养成严格执行止损、止盈操作的习惯（短线操作通常止损止盈线为±3%），如不严格执行止损、止盈可能会造成较大亏损的</h6>
        
		<mu-list-item v-for="(subResult, index) in data.datas[0].yesterday" :key="index">
		  <mu-row gutter >
		    <mu-col width="60" tablet="60" desktop="60" class="text-left">
		      {{subResult.stock_name}}（{{subResult.stock_code}}）
		    </mu-col>
		    <mu-col width="18" tablet="15" desktop="15" class="text-right">
		      {{subResult.profit_rate}}
		    </mu-col>
		    <mu-col width="22" tablet="25" desktop="25" class="text-right">
		      {{subResult.profit_rate}}
		    </mu-col>
		  </mu-row>
		</mu-list-item>
		<h6 class="text-center tip">数据统计至收盘后<br />回顾股票现在已失去参考意义</h6>
	</mu-content-block>
	<mu-flat-button label="历史回顾"/>
  </div>
</template>

<script>
export default {
  name: 'threestock',
  props: ["data"],
  filters: {
    showTitle(val, val2) {
    	return `${val}·${val2}`
    }
  },
}
</script>  
<style lang="scss">
</style>