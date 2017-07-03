<template>
 <div id="account">
 	<mu-list-item title="我的账户" describeText="近期热门计划" class="header" :disabled="true">
		<mu-avatar icon=":iconfont icon-wo" slot="leftAvatar" class="icon-account-color"/>
	</mu-list-item>
  	<mu-content-block>
		<mu-list-item class="content"  :disabled="true">
			<mu-flexbox>
				<mu-flexbox-item>
					<mu-list-item title="2334" describeText="积分余额"  :disabled="true">
						
					</mu-list-item>
				</mu-flexbox-item>
				<mu-flexbox-item>
					<mu-list-item title="开户认证" describeText="领取相关福利"  :disabled="true">
						
					</mu-list-item>
				</mu-flexbox-item>
			</mu-flexbox>
	  </mu-list-item>
	</mu-content-block>
	<mu-flat-button label="查看更多"/>
  </div>
</template>

<script>
export default {
  name: 'account'
}
</script>  
<style lang="scss">
</style>