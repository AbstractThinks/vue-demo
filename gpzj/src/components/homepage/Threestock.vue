<template>
  <div id="threestock">
  	<mu-list-item :title="data.title|showTitle(data.sub_title)" :describeText="data.datas[0].format_time" class="header" :disabled="true">
		<mu-avatar :icon="data.icon" slot="leftAvatar" class="icon-threestock-color"/>
	</mu-list-item>
  	<mu-content-block>
		<div v-html="data.datas[0].sremark"></div>
		<div class="text-center">
			<div class="blank10"></div>
			<mu-raised-button label="点击查看个股" primary :href="data.datas[0].id|getDetailUrl"/>
			<div class="blank10"></div>
		</div>
		<div class="stocks text-center" v-if="false">
			<div class="blank10"></div>
			<h6 class="text-center tip text-center">开户用户及适当性匹配用户<br />目前免费查看以下内容</h6>
			<div class="blank10"></div>
			<mu-list-item v-for="(item, index) in data.datas[0].stocks" :key="index" class="red">
			    {{item.stock_name}}({{item.stock_code}}) <mu-icon value=":iconfont icon-tishi"/>
			</mu-list-item>
			<div class="blank10"></div>
			<h6 class="tip text-center">以上个股不做推荐，仅供参考</h6>
			<h6 class="text-center tip text-center">股市有风险，投资须谨慎</h6>
			<h6 class="text-center tip text-left">风险提示：投资者请按照自身的股票操作能力谨慎参考以上内容，在股票投资中养成严格执行止损、止盈操作的习惯（短线操作通常止损止盈线为±3%），如不严格执行止损、止盈可能会造成较大亏损的</h6>
		</div>
		
        <div id="yesterdayContent" class="yesterday" ref="yesterdayContent">
        	<div>
	        	<h6 v-if="data.datas[0].yesterday.length != 0" class="text-center tip">{{data.datas[0].yesterday[0].startdate}}发布个股近{{data.datas[0].daterangelen}}交易日最大涨幅 <mu-icon value=":iconfont icon-tishi" @click="toggleRuleModal()" /><br />往期回顾不代表未来收益</h6>
	        	<div class="blank10"></div>
	        	<div v-if="data.datas[0].yesterday.length == 0" class="text-center">暂无回顾</div>
				<mu-list-item v-for="(subResult, index) in data.datas[0].yesterday" :key="index" :href="subResult.stock_code|historyStockUrl(subResult.stockarea)" class="yesterday-item">
				    <mu-flexbox :class="subResult.profit_rate|showStatusClass" :gutter="16">
					    <mu-flexbox-item>
					      {{subResult.stock_name}}（{{subResult.stock_code}}）
					    </mu-flexbox-item>
					    <mu-flexbox-item grow="0" class="text-left" >
					      {{subResult.profit_rate|showStatus}}
					    </mu-flexbox-item>
					    <mu-flexbox-item grow="0" class="text-right profit">
					      {{subResult.profit_rate|showNum}}
					    </mu-flexbox-item>
					</mu-flexbox>
				</mu-list-item>
				<div class="blank10"></div>
				<h6 class="text-center tip" v-if="data.datas[0].yesterday.length != 0">数据统计至{{data.datas[0].yesterday[0].enddate}}收盘后<br />回顾股票现在已失去参考意义</h6>
				<div class="blank10"></div>
        	</div>
        	
        </div>
        
	</mu-content-block>
	<mu-flat-button @click="toggleHistory()">
		历史回顾 <mu-icon :value="iconContent" />
	</mu-flat-button>
	<mu-dialog :open="showRuleModalToggle" @close="toggleRuleModal()">
        <div class="text-center dialog-title">统计规则</div>
        <div class="dialog-content">
          <p> 按照股票发布日的开盘价对比发布后近{{data.datas[0].daterangelen}}交易日的最高价，统计最大涨幅。（如果发布日开盘价为近{{data.datas[0].daterangelen}}交易日最高价，统计最大涨幅将为0%）</p>
        </div>
        <div class="text-center dialog-action">
        	<mu-raised-button label="我知道了" primary @click="toggleRuleModal()"/>
        </div>    
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: 'threestock',
  data() {
    return {
      iconContent:":iconfont icon-fold",
      showHistoryToggle: true,
      showRuleModalToggle: false,
    }
  },
  props: ["data"],
  mounted () {
  	this.iconContent = ":iconfont icon-fold";
	this.showHistoryToggle = true;
	this.$refs.yesterdayContent.style.height = this.$refs.yesterdayContent.scrollHeight+"px";
  },
  methods: {
  	toggleHistory(){
  		if (this.showHistoryToggle) {
  			this.iconContent = ":iconfont icon-unfold";
  			this.showHistoryToggle = false;
  			this.$refs.yesterdayContent.style.height = "0px";
  		} else {
  			this.iconContent = ":iconfont icon-fold";
  			this.showHistoryToggle = true;
  			this.$refs.yesterdayContent.style.height = this.$refs.yesterdayContent.scrollHeight+"px";
  		}
  	},
  	toggleRuleModal() {
  		this.showRuleModalToggle?(document.getElementById("homepage").setAttribute("class","")):(document.getElementById("homepage").setAttribute("class","blur"));
  		this.showRuleModalToggle?(this.showRuleModalToggle = false):(this.showRuleModalToggle = true);
  	}
  },
  filters: {
    showTitle(val, val2) {
    	return `${val}·${val2}`;
    },
    showDate(val) {
        let date = new Date(val);
        let str = val?`${date.getMonth()+1}月${date.getDate()}日`:'';
        return str;
        
    },
    showStatusClass(val) {
    	let str = '';
        if (val) {
            str = parseFloat(val) > 0? 'red': 'green';
        }
        return str;
    },
    showStatus: function (val) {
        let str = '';
        if (val) {
            str = parseFloat(val) > 0? '涨幅': '跌幅';
        }
        return str;
    },
    showNum: function (val) {
        let str = '';
        if (val) {
            str = parseFloat(val) > 0? `+${val}%`: `${val}%`;
        }
        return str;
    },
    historyStockUrl(val, val2) {
    	return `https://trade.hx168.com.cn/v2/m/hq/#!/hq/ggStockInfo.html?stockcode=${val}&market=${val2}&channel=1&channelid=gpzjfwh&source=gpzjfwh`;
    },
    getDetailUrl(val) {
    	return `/hxwwz/rest/json/gaoshou/info/param/page/recommend?sd=${val}`;
    }
  },
}
</script>  
<style lang="scss">

@import "../../assets/css/variable.scss";
#threestock {
	.yesterday {
		overflow: hidden;
		transition: height 0.5s;
		height: 0px;
		.mu-flexbox .mu-flexbox-item {
			width: auto;
		}
		.mu-icon {
			font-size: 16px;
		}
		.mu-flexbox .profit {
			width: 50px;
		}
	}
	.stocks {
		.mu-item {
			padding: 0px;
			font-size: 16px;
			min-height: auto;
		}
		.mu-icon {
			font-size: 18px;
			margin-left: 8px;
		}
	}
	button {
		.mu-icon {
			font-size: 16px;
			margin-left: 4px;
		}
	}
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