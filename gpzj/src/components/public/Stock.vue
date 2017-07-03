<template>
  <mu-content-block id="stock">
  	<h6 class="text-center">{{dateInt|show_date}} 8:25前发布</h6>
    <div class="blank10"></div>
  	<div v-html="sremark"></div>
  	<div class="text-center">
  		<mu-raised-button label="点击查看个股" @click="toggleAccount()"/>
  	</div>
    <div v-if="toggleStockShow">
      <h6 class="text-center">开户用户及适当性匹配用户<br/>目前免费查看以下内容</h6>
      <mu-list-item v-for="item in stocks" :key="item.id" class="text-center rise" v-if="toggleStockShow">
        {{item.stock_name}}({{item.stock_code}})
      </mu-list-item>
      <h6 class="text-center warning">以上个股不做推荐，仅供参考<br/>股市有风险，投资须谨慎</h6>
      <h6 class="text-indent text-left warning">风险提示：投资者请按照自身的股票操作能力谨慎参考以上内容，在股票投资中养成严格执行止损、止盈操作的习惯（短线操作通常止损止盈线为±3%），如不严格执行止损、止盈可能会造成较大亏损的风险。</h6>
      <div class="blank10"></div>
    </div>
    <div class="blank10"></div>
  	
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
    <mu-dialog :open="toggleAccountShow" @close="toggleAccount()" dialogClass="stock-dialog">
      <h4 class="text-center color-blue">华西证券开户用户可免费查看</h4>
      <mu-content-block>
      <div class="font14">本内容仅对在<span class="color-red">“华西证券”</span>开户并在股票专家内认证后的用户进行免费查看。</div>
      <div class="blank10"></div>
      <div class="font14">如需查看该内容请先开立<span class="color-red">“华西证券”</span>账户</div>
      <div class="blank10"></div>
      </mu-content-block>
      <mu-divider/>
      <mu-flexbox :gutter="0">
          <mu-flexbox-item>
              <mu-list-item href="/hxwwz/rest/json/gaoshou/info/param/page/hxlogin" class="homepageindex-dialog-button text-center color-blue">
                  已有账户去认证
              </mu-list-item>
          </mu-flexbox-item>
          <mu-flexbox-item grow="0" class="vertical-item">
              <div class="vertical-border"></div>
          </mu-flexbox-item>
           <mu-flexbox-item>
              <mu-list-item href="/hxwwz/rest/json/gaoshou/info2/param/page/hxaccount" class="homepageindex-dialog-button text-center color-red">
                  立即手机开户
              </mu-list-item>
          </mu-flexbox-item>
      </mu-flexbox>
      
  </mu-dialog>

    <mu-dialog :open="toggleRuleShow" @close="toggleRule()" dialogClass="stock-dialog">
        <h4 class="text-center color-blue">统计规则</h4>
        <mu-content-block class="color-grey7">
          <p> 按照股票发布日的开盘价对比发布后近{{yesterday[0].daterangelen}}交易日的最高价，统计最大涨幅。（如果发布日开盘价为近{{yesterday[0].daterangelen}}交易日最高价，统计最大涨幅将为0%）</p>
          <div class="blank10"></div>
        </mu-content-block>
        <mu-divider/>
        <mu-list-item class="dialog-button text-center color-blue" @click="toggleRule()">
            我知道了
        </mu-list-item>
    </mu-dialog>
  </mu-content-block>
</template>

<script>
export default {
  name: 'stock',
  data() {
  	 return {
  	 	toggleHistoryShow: false,
  	 	toggleRuleShow: false,
      toggleStockShow: false,
      toggleAccountShow: false,
  	 }
   
  },
  mounted () {
    let user = JSON.parse(JSON.stringify(this.userinfo));
    this.toggleStockShow = user.firstData && user.firstData.capital_account == "1"? true: false;
  },
  props: ["dateInt", "stocks", "yesterday", "sremark", "userinfo"],
  methods: {
  	toggleHistory: function() {
  		this.toggleHistoryShow = this.toggleHistoryShow? false: true;
  	},
  	toggleRule: function() {
  		this.toggleRuleShow = this.toggleRuleShow? false: true;
  	},
    toggleAccount: function() {
      this.toggleAccountShow = this.toggleAccountShow? false: true;
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
@import "../../assets/css/variable.scss";

</style>