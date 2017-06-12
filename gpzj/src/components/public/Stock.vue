<template>
  <div id="stock">
     <mu-content-block class="">
      <mu-paper>
        <mu-content-block>
          <div class="blank20"></div>
          <div class="text-center">
            <mu-chip backgroundColor="red500" color="white">
              {{stockdata.firstData?stockdata.firstData.stitle:""}}
            </mu-chip>
            <h6>{{stockdata.firstData?stockdata.firstData.dateint:""|_filterTitleDate}}</h6>
          </div>
          <div v-html="stockdata.firstData?stockdata.firstData.sremark:''"></div>
          <mu-list v-if="stockdata.firstData && stockdata.firstData.stocks && stockdata.firstData.stocks.length > 0">
            <mu-list-item v-for="item in stockdata.firstData.stocks" :key="item.id" class="text-center rise" :href="_filterGetUrl(item.stock_code, item.stockarea)">
              {{item.stock_name}}({{item.stock_code}})
            </mu-list-item>
            
              <h6 class="text-center">以上个股不做推荐，仅供参考</h6>
              <h6 class="text-center">股市有风险，投资须谨慎</h6>
              <h6 class="text-indent">风险提示：投资者请按照自身的股票操作能力谨慎参考以上内容，在股票投资中养成严格执行止损、止盈操作的习惯（短线操作通常止损止盈线为±3%），如不严格执行止损、止盈可能会造成较大亏损的风险。</h6>
            
          </mu-list>
          <mu-raised-button label="查看历史表现回顾" class="" primary @click="toggleHistory()" fullWidth/>
          <mu-list class="yesterday zoom-in" v-if="toggleHistoryShow && stockdata.firstData && stockdata.firstData.yesterday && stockdata.firstData.yesterday.length > 0">
            <mu-list-item @click="open('topRule')"> 
              <h6 class="text-center">{{startdate}}发布个股近{{daterange}}交易日最大涨幅</h6>
            </mu-list-item> 
            <mu-list-item v-for="item in stockdata.firstData.yesterday" :key="item.id" :href="_filterGetUrl(item.stock_code, item.stockarea)">
              <mu-row gutter :class="parseInt(item.profit_rate) > 0?'rise':'fall'">
                <mu-col width="60" tablet="60" desktop="60" >
                  {{item.stock_name}}（{{item.stock_code}}）
                </mu-col>
                <mu-col width="15" tablet="15" desktop="15" >
                  {{_filterShowProfitRateText(item.profit_rate)}}
                </mu-col>
                <mu-col width="25" tablet="25" desktop="25" class="text-right">
                  {{_filterShowProfitRate(item.profit_rate)}}
                </mu-col>
              </mu-row>
            </mu-list-item>
            <mu-list-item :disabled="true"> 
              <h6 class="text-center">数据统计至{{enddate}}收盘后</h6>
              <h6 class="text-center">回顾股票现在已失去参考意义</h6> 
            </mu-list-item>
          </mu-list>
            <div class="blank20"></div>
        </mu-content-block>
      </mu-paper>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'stock',
  data() {
    return {
      toggleHistoryShow: true,
      enddate: '',
      daterange: '',
      startdate: '',
    }
  },
  props: ['stockdata'],
  filters: {

    _filterTitleDate: function (str) {
      return `${str.substr(0,4)}年${str.substr(4,2)}月${str.substr(6,2)}日`;
    }
  },
  methods: {
  	_filterGetUrl (val1, val2) {
      return `https://trade.hx168.com.cn/v2/m/hq/#!/hq/ggStockInfo.html?stockcode=${val1}&market=${val2}&channel=1&channelid=gpzjfwh&source=gpzjfwh`;
    },
    toggleHistory() {
      if (this.toggleHistoryShow) {
        this.toggleHistoryShow = false
      } else {
        this.toggleHistoryShow = true
      }
    },
    _filterShowProfitRateText(val) {
      return parseInt(val) > 0 ? "涨幅":"跌幅";
    },
    _filterShowProfitRate(val) {
      return parseInt(val) > 0 ? `+${val}`:val;
    },
  }
}
</script>  
<style lang="scss">
</style>