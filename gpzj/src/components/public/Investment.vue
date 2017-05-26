<template>
  <div id="investment">
    <div class="blank20"></div>
    <mu-content-block class="text-center">
    	<mu-paper :zDepth="1" >
		    <mu-content-block>
			    <mu-list>
					<mu-list-item title="量价操盘3期" describeText="计划35天目标收益10%">
						<mu-avatar src="http://r0.hx168.com.cn/gpzj//img/v3/avatar/20170330/aktj.png" slot="leftAvatar"/>
					</mu-list-item>
				</mu-list>
				<mu-raised-button label="立即加入" fullWidth backgroundColor="#49a5f0"/>
				<h6>75人已加入</h6>
				<mu-flat-button label="更多投资计划" class="investment-btn"/>
			</mu-content-block>
		</mu-paper>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'investment'
}
</script>  
<style lang="scss">
	#investment {
		.investment-btn {
			width: 100%;
		}
	}
	
</style>