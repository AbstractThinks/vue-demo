<template>
 <div id="account">
 	<mu-list-item :title="data.title" :describeText="data.remark" class="header" :href="data.detail_link">
		<mu-avatar :icon="data.icon" slot="leftAvatar" class="icon-account-color"/>
	</mu-list-item>
  	<mu-content-block>
		<mu-list-item class="content auth"  v-if="data.khtype == 1" :href="data.detail_link">
			<mu-flexbox :gutter="24">
				<mu-flexbox-item >
					<mu-list-item :title="data.datas[0].leftcash" describeText="积分余额" :disabled="true">
						
					</mu-list-item>
				</mu-flexbox-item>
				<mu-flexbox-item>
					<mu-list-item :title="data.khtype|getTitleText(data.btn_title,data.datas[0].RATING_LVL_NAME)" :describeText="data.khtype|getDescribeText"  class="authentication" :disabled="true">
						
					</mu-list-item>
				</mu-flexbox-item>
			</mu-flexbox>
	    </mu-list-item>
	    <mu-list-item class="content"  :disabled="true" v-if="!(data.khtype == 1)">
			<mu-flexbox :gutter="24">
				<mu-flexbox-item >
					<mu-list-item :title="data.datas[0].leftcash" describeText="积分余额" :href="data.detail_link">
						
					</mu-list-item>
				</mu-flexbox-item>
				<mu-flexbox-item>
					<mu-list-item :title="data.khtype|getTitleText(data.btn_title,data.datas[0].RATING_LVL_NAME)" :describeText="data.khtype|getDescribeText"  class="authentication decoration" :href="data.link">
						
					</mu-list-item>
				</mu-flexbox-item>
			</mu-flexbox>
	    </mu-list-item>
	</mu-content-block>
	<mu-list-item title="查看更多" :href="data.detail_link" class="footer"/>
	<!-- <mu-flat-button label="查看更多" :href="data.detail_link"/> -->
  </div>
</template>

<script>
export default {
  name: 'account',
  props: ["data"],
  filters: {
  	getTitleText(val, val1, val2) {
  		return val == 1?
  				val2?`${val2}`:"暂无"
  				:
  				`${val1}`;
  	},
  	getDescribeText(val) {
  		return val == 1? `客户风险承受能力`: `领取相关福利`;
  	}
  },
}
</script>  
<style lang="scss">

</style>