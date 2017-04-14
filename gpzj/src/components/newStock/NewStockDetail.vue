<template>
  <div id="newstockdetail">
        <mu-dialog :open="loading" @close="close" dialogClass="loading">
          <mu-circular-progress :size="60" :strokeWidth="5"/>
        </mu-dialog>
        <div class="blank30"></div>
        <div v-if="_showNone(stockdetail.firstData)">
          <mu-content-block class="title">
              <mu-row gutter>
                <mu-col width="60" tablet="60" desktop="60"><span class="main">{{stockdetail.firstData?stockdetail.firstData.short_name:""}}</span><span class="description">{{stockdetail.firstData?stockdetail.firstData.code:""}}</span></mu-col>
                <mu-col width="40" tablet="40" desktop="40" class="text-right">
                  <mu-raised-button label="立即申购" primary href="https://trade.hx168.com.cn/v2/m/trade/index.html#!/newshare/apply.html" v-if="_filterShow(stockdetail.firstData.online_issue_date, stockdetail.firstData.intime)"/>
                </mu-col>
              </mu-row>
              <div class="blank10"></div>
              <mu-divider />
          </mu-content-block>
          <mu-content-block class="article">
            <div class="blank20"></div>
              <mu-row gutter>
                  <mu-col width="50" tablet="50" desktop="50" ><span class="description">新股名称</span>{{stockdetail.firstData?stockdetail.firstData.short_name:""}}</mu-col>
                  <mu-col width="50" tablet="50" desktop="50" ><span class="description">申购日期</span>{{stockdetail.firstData?stockdetail.firstData.online_issue_date:""|dateFormat('yyyy-MM-dd')}}</mu-col>
                  <mu-col width="50" tablet="50" desktop="50" ><span class="description">申购代码</span>{{stockdetail.firstData?stockdetail.firstData.code:""}}</mu-col>
                  <mu-col width="50" tablet="50" desktop="50" ><span class="description">上市地点</span>{{stockdetail.firstData?stockdetail.firstData.stock_exchange:""|show_addr }}</mu-col>
                  <mu-col width="50" tablet="50" desktop="50" ><span class="description">发行价格</span>{{stockdetail.firstData&&stockdetail.firstData.issue_price&&parseFloat(stockdetail.firstData.issue_price)!==0?parseFloat(stockdetail.firstData.issue_price).toFixed(2):""}}</mu-col>
                  <mu-col width="50" tablet="50" desktop="50" ><span class="description">所属板块</span>{{stockdetail.firstData?stockdetail.firstData.channel:""}}</mu-col>
              </mu-row>
              <div class="blank20"></div>
              <mu-divider />
          </mu-content-block>
          <mu-content-block class="article">
            <div class="blank20"></div>
            <mu-row gutter>
              <mu-col width="100" tablet="100" desktop="100">
                <span class="description">市盈率（倍）</span>
                <span class="float-right">{{stockdetail.firstData&&stockdetail.firstData.issue_price_earning_ratio&&parseFloat(stockdetail.firstData.issue_price_earning_ratio)!==0?parseFloat(stockdetail.firstData.issue_price_earning_ratio).toFixed(2):""}}</span>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="100">
                <span class="description">总发行数量</span>
                <span class="float-right">{{stockdetail.firstData&&stockdetail.firstData.issue_circulation&&parseInt(stockdetail.firstData.issue_circulation)!== 0?parseInt(stockdetail.firstData.issue_circulation).toFixed(0)+"万股":""}} </span>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="100">
                <span class="description">网上发行数量</span>
                <span class="float-right">{{stockdetail.firstData&&stockdetail.firstData.online_issue_circulation&&parseInt(stockdetail.firstData.online_issue_circulation)!==0?parseInt(stockdetail.firstData.online_issue_circulation).toFixed(0)+"万股":""}} </span>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="100">
                <span class="description">网上申购上限</span>
                <span class="float-right">{{stockdetail.firstData&&stockdetail.firstData.subscribe_limit&&parseFloat(stockdetail.firstData.subscribe_limit)!==0?parseFloat(stockdetail.firstData.subscribe_limit).toFixed(2)+"万股":""}} </span>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="100">
                <span class="description">顶格申购需市值</span>
                <span class="float-right">{{stockdetail.firstData&&stockdetail.firstData.subscribe_limit_total&&parseInt(stockdetail.firstData.subscribe_limit_total)!==0?parseInt(stockdetail.firstData.subscribe_limit_total).toFixed(0)+"万":""}} </span>
              </mu-col>
            </mu-row>
            <div class="blank20"></div>
          </mu-content-block>
          <div class="blank10"></div>
          <mu-content-block>
            <div class="blank20"></div>
            公司基本面
            <p>
              {{stockdetail.firstData?stockdetail.firstData.fundament:""}}
            </p>
            
            <div class="blank20"></div>
          </mu-content-block>
        </div>
        <div class="text-center none-text" v-if="stockdetail.firstData == null">
          <div class="blank90"></div>
          暂无数据
        </div>
        
        <mu-dialog :open="dialog" title="系统提示" @close="close">
          新股详情加载失败，请稍后重试...
          <mu-flat-button slot="actions" @click="close" primary label="确定"/>
        </mu-dialog>
        
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from '../../store/mutation-types';

export default {
  name: 'newstockdetail',
  data(){
    return {
      loading: true,
      dialog: false
    }
  },
  computed: mapState({
    stockdetail: state => state.newstock.stockdetail,
  }),
  mounted () {
      this.getStockDetail({id:this.$route.params.id})
        .then(() => {
          if (this.stockdetail.error) {
            this.dialog = true;
          }
        })
        .then(() => {
          this.loading = false;
        });

    
  },
  methods: {
    ...mapActions({
      getStockDetail: types.NEWSTOCK_DETAIL_ACTION 
    }),
    _showNone(value) {
      if (value) {
        return true;
      }
      return false;
    },
    close () {
      this.dialog = false
    },
    _filterShow (value, value2) {
      let nowDate = new Date();
          let myDate = new Date(value.replace(/-/g,'/'));
          nowDate = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;
          myDate = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
          if (myDate === nowDate && value2 === "1") {
            return true;
          } 
          return false;
    }
  },
  filters: {
      show_addr: function (value) {
          switch(value){
            case "sz":
              return "深圳证券交易所";
            case "sh":
              return "上海证券交易所";
            default:
              return "";
          }
      },
  }
}
</script>

<style lang="scss">
@import "../../assets/css/variable.scss";
#newstockdetail {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .float-right {
    float:right;
  }
  &>div>.blank10 {
    background: $grey;
  }
  .main {
    font-size: 24px;
    display: inline-block;
    padding-right: 8px;
  }
  .description {
    display: inline-block;
    padding-right: 4px;
    font-size: 13px;
    color: $grey6;
  }
  .mu-content-block {
    padding-top: 0px;
    padding-bottom: 0px;
    &.article {
      font-size: 13px;
    }
  }
}

</style>