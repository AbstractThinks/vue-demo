<template>
  <div id="risk">
    <div class="blank20"></div>
    <mu-content-block>
    <mu-paper>
    <div class="blank20"></div>
    <mu-content-block class="text-center">
		<p class="text-left">
		本文所提及观点，是基于一定假设条件下，不代表未来市场走势，仅供参考，投资者请勿将本文观点作为投资决策的唯一参考因素，亦不要以本文观点取代自己的合理判断。在任何情况下，华西证券均不承诺投资者一定获利，且不对任何人因使用本文观点所导致的任何损失负任何责任。
		</p>
    <div class="text-right">
      <mu-flat-button label="更多必读" class="" @click="toggle()" primary/>
    </div>
    <div v-if="show" class="fade-in-up">
      <p  class="text-left">

        本文所提及股票，多为短期事件驱动，较适宜短线投资者参考，若投资者以此参考标的作出中长线投资决策，则产生大幅亏损的几率较大，不排除亏损幅度达到30%以上。若短线操作，在日常交易中，对于开盘涨幅超过3%的股票，应注意冲高回落的风险，避免追高，追高可能带来较大的亏损风险；对于持仓股应设置好止盈止损位，若产生盈利，应及时获利了结，若跌幅超过8%，应及时止损，避免深套。
            
      </p>
      <p class="text-left">

        
      本文版权归“华西证券股份有限公司”所有，未经书面授权，不得以任何方式篡改、拷贝，或在非“华西证券股票专家平台”外传播给任何其他人，或以任何侵犯本公司版权的方式使用。经过书面授权的引用需注明出处为“华西证券股份有限公司”。

            
      </p>
    </div>
		
    </mu-content-block>
    <div class="blank20"></div>
    </mu-paper>
    </mu-content-block>
    <div class="blank20"></div>
  </div>
</template>

<script>
export default {
  name: 'risk',
  data() {
    return {
      show: false,
    }
  },
  methods: {
  	toggle() {
  		if (this.show) {
  			this.show = false;
  		} else {
  			this.show = true;
  		}
  	}
  }
}
</script>  
<style lang="scss">
	#risk {
		button{
		}
	}
    
</style>