<template>
  <mu-content-block id="stock">
  	<h6 class="text-center">{{dateInt|show_date}} 8:25前发布</h6>
  	<div v-html="sremark"></div>
  	<div class="text-center">
  		<mu-raised-button label="点击查看个股" />
  	</div>
  	<mu-list-item v-for="item in stocks" :key="item.id" class="text-center rise" >
		{{item.stock_name}}({{item.stock_code}})
	</mu-list-item>
	<div class="blank10"></div>
	<h6 class="text-center warning">以上个股不做推荐，仅供参考<br/>股市有风险，投资须谨慎</h6>
	<h6 class="text-indent text-left warning">风险提示：投资者请按照自身的股票操作能力谨慎参考以上内容，在股票投资中养成严格执行止损、止盈操作的习惯（短线操作通常止损止盈线为±3%），如不严格执行止损、止盈可能会造成较大亏损的风险。</h6>
  	<div class="blank10"></div>
  	<h6 v-if="true" class="text-center">开户用户及适当性匹配用户<br/>目前免费查看以下内容</h6>
  	<mu-list-item class="text-center check-btn" @click="toggleHistory()">
        查看历史表现回顾
    </mu-list-item>
    <mu-list-item class="zoom-in" v-if="toggleHistoryShow" @click="toggleRule()">
	    <h6 class="text-center">发布个股近交易日最大涨幅 <mu-icon value=":iconfont icon-tishi"/></h6>
	    <h6 class="text-center">往期回顾不代表未来收益</h6>
	</mu-list-item>
	<mu-list class="zoom-in" v-if="toggleHistoryShow">
		 <mu-list-item :class="subResult.profit_rate|show_stock_status" v-for="(subResult, index) in yesterday" :key="index" >
          <mu-row gutter >
            <mu-col width="55" tablet="60" desktop="60" class="text-left">
              {{subResult.stock_name}}（{{subResult.stock_code}}）
            </mu-col>
            <mu-col width="20" tablet="15" desktop="15" class="text-right">
              {{subResult.profit_rate|show_status}}
            </mu-col>
            <mu-col width="25" tablet="25" desktop="25" class="text-right">
              {{subResult.profit_rate|show_num}}
            </mu-col>
          </mu-row>
        </mu-list-item>
		<div class="blank10"></div>
		<h6 class="text-center tip">数据统计至收盘后</h6>
		<h6 class="text-center tip">回顾股票现在已失去参考意义</h6> 
	</mu-list>
  	
  </mu-content-block>
</template>

<script>
export default {
  name: 'stock',
  data() {
  	 return {
  	 	toggleHistoryShow: false,
  	 	toggleRuleShow: false,
  	 }
   
  },
  props: ["dateInt", "stocks", "yesterday", "sremark"],
  methods: {
  	toggleHistory: function() {
  		this.toggleHistoryShow = this.toggleHistoryShow? false: true;
  	},
  	toggleRule: function() {
  		this.toggleRuleShow = this.toggleRuleShow? false: true;
  	}
  },
  filters: {
  	show_date: function(val) {
        let str = val?`${parseInt(val.substr(-4, 2))}月${parseInt(val.substr(-2, 2))}日`:'';
        return str;
    },
    show_stock_status: function (val) {
        let str = '';
        if (parseFloat(val) > 0) {
            str = "up";
        } else if (parseFloat(val) < 0) {
            str = "fall";
        } else {
            str = "";
        }
        return str;
        
    }, 
    show_status: function (val) {
        let str = '';
        if (val) {
            str = parseFloat(val) > 0? '涨幅': '跌幅';
        }
        return str;
    },
    show_num: function (val) {
        let str = '';
        if (val) {
            str = parseFloat(val) > 0? `+${val}%`: `${val}%`;
        }
        return str;
    },
  }
  
}
</script>  
<style lang="scss">
</style>