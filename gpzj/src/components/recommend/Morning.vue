<template>
  <div id="recommendmorning">
    
    <mu-dialog :open="loading" dialogClass="loading">
      <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    <mu-dialog position="top" popupClass="consultation-popup" :open="topPopup" @close="close('top')">
        <h4 class="text-center color-blue">相关资质</h4>
        <mu-content-block class="color-grey7" v-if="recommendmor.firstData">
          <mu-list class="" >
            <mu-list-item :title="item.brokername|_filterBrokername" :describeText="item.certificate_num|_filterCertificateNum" v-for="item in recommendmor.firstData.certificates" :key="item.id" :disabled="true"/>
          </mu-list>
        </mu-content-block>
        <mu-raised-button label="我知道了" fullWidth @click="close('top')" primary/>
    </mu-dialog>
    <mu-dialog position="top" popupClass="consultation-popup" :open="topRulePopup" @close="close('topRule')">
        <h4 class="text-center color-blue">统计规则</h4>
        <mu-content-block class="color-grey7">
          <p> 按照股票发布日的开盘价对比发布后近{{daterange}}交易日的最高价，统计最大涨幅。（如果发布日开盘价为近{{daterange}}交易日最高价，统计最大涨幅将为0%）</p>
          <div class="blank10"></div>
        </mu-content-block>
        <mu-raised-button label="我知道了" fullWidth @click="close('topRule')" primary/>
    </mu-dialog>
    <appLoginHeader v-if="loginHeader"></appLoginHeader>

    <mu-content-block class="">
      <h2 class="text-center">{{recommendmor.firstData?recommendmor.firstData.title:""}}</h2>
      <h6 class="text-center">{{recommendmor.firstData?recommendmor.firstData.dateint:""|_filterTitleDate}}</h6>
      <h6 class="text-center"><mu-flat-button label="相关资讯" class="" @click="open('top')" primary/></h6>
    </mu-content-block>

    <mu-content-block class="">
    <mu-paper :zDepth="1" >
    <mu-content-block class="relative">
      <div class="title-img"></div>
      <div class="blank40"></div>
      <div v-html="recommendmor.firstData?recommendmor.firstData.content:''"></div>
      <div v-html="recommendmor.firstData?recommendmor.firstData.private_content:''"></div>
      <div class="blank20"></div>
    </mu-content-block>
    </mu-paper>
    </mu-content-block>
    
    <appStock :stockdata="recommendmor"></appStock>
    <appInvestment></appInvestment>
    <appAdvertisement></appAdvertisement>
    <appRisk></appRisk>
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from '../../store/mutation-types';
import Advertisement from '@/components/public/Advertisement';
import Risk from '@/components/public/Risk';
import Investment from '@/components/public/Investment';
import Stock from '@/components/public/Stock';
import Bus from '../../api/Bus';
import { shareConfig } from '../../api/wxshare';

export default {
  name: 'recommendmorning',
  data() {
    return {
      loading: true,
      toggleHistoryShow: true,
      topPopup: false,
      topRulePopup: false,
      loginHeader: false,
      enddate: '',
      daterange: '',
      startdate: '',
    }
  },
  mounted () {
    this.initData();
  },

  computed: mapState({
    recommendmor: state => state.recommend.recommendmor,
    userinfo: state => state.user.userinfo,
  }),
  filters: {
    _filterBrokername: function (val) {
      return `投顾姓名：${val}`
    },
    _filterCertificateNum: function (val) {
       return `证书编号：${val}`
    },
    _filterTitleDate: function (str) {
      return `${str.substr(0,4)}年${str.substr(4,2)}月${str.substr(6,2)}日`;
    }
  },
  methods: {
    ...mapActions({
      getRecommendMor: types.RECOMMEND_MORNING_ACTION,
      getUserInfo: types.USER_INFO_ACTION,
    }),
    async initData() {
      // await this.initRecommendMor();
      await Promise.all([this.initRecommendMor(), this.initUser()]);
      Bus.$emit('initAdvertisement');
      let user = JSON.parse(JSON.stringify(this.$store.state.user.userinfo));
      let recommendmor = JSON.parse(JSON.stringify(this.$store.state.recommend.recommendmor));
      this.stockData = recommendmor;
      this.loading = false;
      this.enddate = (recommendmor.firstData && recommendmor.firstData.yesterday && recommendmor.firstData.yesterday[0] && recommendmor.firstData.yesterday[0].enddate)? recommendmor.firstData.yesterday[0].enddate : "";
      this.daterange = (recommendmor.firstData && recommendmor.firstData.yesterday && recommendmor.firstData.yesterday[0] && recommendmor.firstData.yesterday[0].daterange)? recommendmor.firstData.yesterday[0].daterange : "";
      this.startdate = (recommendmor.firstData && recommendmor.firstData.yesterday && recommendmor.firstData.yesterday[0] && recommendmor.firstData.yesterday[0].startdate)? recommendmor.firstData.yesterday[0].startdate : "";
      shareConfig({
        title: '股票专家',
        desc: '股票专家',
        imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png"
      }, `${this.$route.path}`,location.search);

      if (user.firstData && user.firstData.status === "2") {
        
      } else {
        this.loginHeader = true;
      } 
    },
    async initRecommendMor() {
      await this.getRecommendMor({id:this.$route.params.id, preview: this.$route.params.preview});
      return new Promise((resolve, reject) => { 
        resolve();
      });
    },
    async initUser() {
      await this.getUserInfo();
      return new Promise((resolve, reject) => {       
        resolve();
      });
    },
    // _filterGetUrl (val1, val2) {
    //   return `https://trade.hx168.com.cn/v2/m/hq/#!/hq/ggStockInfo.html?stockcode=${val1}&market=${val2}&channel=1&channelid=gpzjfwh&source=gpzjfwh`;
    // },
    _filterShowStockName(val1, val2) {
      return `${val1}(${val2})`;
    },
    // _filterShowProfitRateText(val) {
    //   return parseInt(val) > 0 ? "涨幅":"跌幅";
    // },
    // _filterShowProfitRate(val) {
    //   return parseInt(val) > 0 ? `+${val}`:val;
    // },
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    // toggleHistory() {
    //   if (this.toggleHistoryShow) {
    //     this.toggleHistoryShow = false
    //   } else {
    //     this.toggleHistoryShow = true
    //   }
    // }
  },
  components: {
      appAdvertisement: Advertisement,
      appRisk: Risk,
      appInvestment: Investment,
      appStock: Stock,
  },
}
</script>

<style lang="scss">
@import "../../assets/css/variable.scss";
.mu-popup-top.consultation-popup {
  width: 80%;
  button {
    width: 100%;
  }
}
#recommendmorning {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  h3,h6{
    color: $grey7;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  .relative {
    position: relative;
  }
  .font14 {
    font-size: 14px;
  }
  .title-img {
    background: transparent url(http://r0.hx168.com.cn/gpzj/img/v4/bg-recommend.png) 0 -50px;
    width: 124px;
    height: 37px;
    position: absolute;
    top: -6px;
    left: 50%;
    margin-left: -62px;
  }
  .mu-item-title,.mu-item-after {
    color: $primary
  }
  .text-indent {
    text-indent: 2em;
  }
  .yesterday {
    .mu-item {
      padding: 0;
    }
    
  } 
  .mu-chip {
     padding-left: 24px;
    padding-right: 24px;
  } 
 
  .rise {
      color:$primary;
      .mu-item-content {
        color:$primary;
        // font-size: 24px;
      }
  }
  .fall {
    color: $green;
  } 
}
</style>