<template>
  <div id="recommendmorning">
    
    <mu-dialog :open="loading" dialogClass="loading">
      <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    <div class="blank10"></div>
    <mu-content-block class="header" v-if="recommendmor.firstData">
      <h2 class="text-center title" >
        {{recommendmor.firstData.title}}
      </h2>
      <mu-list-item class="title-desc" @click="toggleInfo()">
          <h6 class="text-center">
            {{recommendmor.firstData.dateint}}
          </h6> 
           <h6 class="text-center">
            相关资质
          </h6> 
      </mu-list-item>
      <div class="blank10"></div>

      <fieldset class="">
        <div class="title-img"></div>
        <div class="blank30"></div>
        <appComment :content="recommendmor.firstData.content" :private="recommendmor.firstData.private_content"></appComment>
        <div class="blank10"></div>
        <div class="text-center">
          <mu-chip class="stock-stitle">
            {{recommendmor.firstData.stitle}}
          </mu-chip>
        </div>

        <appStock :sremark="recommendmor.firstData.sremark" :dateInt="recommendmor.firstData.dateint" :stocks="recommendmor.firstData.stocks" :yesterday="recommendmor.firstData.yesterday" ></appStock>
      </fieldset>
      
      
      <mu-dialog :open="toggleInfoShow" dialogClass="recommendmor-dialog" @close="toggleInfo()">
        <h4 class="text-center color-blue">相关资质</h4>
        <mu-list-item>
          <p v-for="item in recommendmor.firstData.certificates">
            投顾姓名：{{item.brokername}}<br/>
            证书编号：{{item.certificate_num}}
          </p>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item class="text-center color-blue" @click="toggleInfo()">
          我知道了
        </mu-list-item>
      </mu-dialog>
    </mu-content-block>
    
    <!-- <appStock :stockdata="recommendmor"></appStock> -->
    <appInvestment></appInvestment>
    <appAdvertisement></appAdvertisement>
    <appRisk></appRisk>
    <div class="blank20"></div>
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from '../../store/mutation-types';
import Comment from '@/components/recommend/Comment';
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
      toggleInfoShow: false,
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
   toggleInfo() {
    this.toggleInfoShow = this.toggleInfoShow?false: true;
   }
    // toggleHistory() {
    //   if (this.toggleHistoryShow) {
    //     this.toggleHistoryShow = false
    //   } else {
    //     this.toggleHistoryShow = true
    //   }
    // }
  },
  components: {
      appComment: Comment,
      appAdvertisement: Advertisement,
      appRisk: Risk,
      appInvestment: Investment,
      appStock: Stock,
  },
}
</script>

<style lang="scss">
@import "../../assets/css/variable.scss";
.recommendmor-dialog {
  .mu-dialog-body  {
    padding:0px;
    h4 {
      font-weight: normal;
    }
    .mu-item {
      padding: 0px 22px;
      .mu-item-content {
        color: $grey7;
      }
    }
    .color-blue {
      .mu-item {
        .mu-item-content {
          color: $blue;
        }
      }
    }
  }
  
}
#recommendmorning {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  background-color: $grey4;
  .relative {
    position: relative;
  }
  fieldset {
    margin: 0px;
    padding: 0px;
    position: relative;
  }
  .title {
    margin: 0px;
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
  .title-desc {
    .mu-item {
      padding: 0px;
    }
    h6 {
      margin: 0px;
      font-weight: normal;
      color: $grey7;
    }
  }
  #comment {
    .mu-content-block {
      padding-left: 12px;
      padding-right: 12px;
    }
    
  }
  .stock-stitle {
    background-color:$primary;
    color: $white;
    font-size:18px;
    padding-left: 20px; 
    padding-right: 20px; 
  }
  #stock {
    padding-left: 12px;
    padding-right: 12px;
    .mu-item {
      padding: 0px;
      min-height: 32px;
    }
    .mu-raised-button-wrapper {
        padding-left: 38px;
        padding-right: 38px;
    }
    .mu-raised-button {
        // padding-left: 38px;
        // padding-right: 38px;
        height: 40px;
        background-color: $info;
        .mu-raised-button-label {
            color: $white;
            font-size: 16px
        }
    }
    .check-btn {
      .mu-item {
        padding: 0px;
        min-height: 32px;
      }
      .mu-item-content {
        color: $blue1;
      }
    }
    .iconfont.icon-tishi {
        color: $blue1;
        font-size: 16px;
    }
    h6 {
      margin: 0;
      font-weight: normal;
      color: $grey7;
    }
    .text-indent {
        text-indent: 2em;
    }
    .rise {
        .mu-item {
            font-size: 18px;
            color: $red5;
            min-height: 32px;
            padding: 0px;
        }
    }
    .up {
        .mu-item {
            color: $red5;
        }
        
    }
    .fall {
        .mu-item {
            color: $green;
        }
    }
    h6.tip {
        padding: 4px 0px;
    }
  }
  
  // h3,h6{
  //   color: $grey7;
  //   margin-bottom: 8px;
  //   margin-top: 8px;
  // }
  
  // .font14 {
  //   font-size: 14px;
  // }
  // .title-img {
  //   background: transparent url(http://r0.hx168.com.cn/gpzj/img/v4/bg-recommend.png) 0 -50px;
  //   width: 124px;
  //   height: 37px;
  //   position: absolute;
  //   top: -6px;
  //   left: 50%;
  //   margin-left: -62px;
  // }
  // .mu-item-title,.mu-item-after {
  //   color: $primary
  // }
  // .text-indent {
  //   text-indent: 2em;
  // }
  // .yesterday {
  //   .mu-item {
  //     padding: 0;
  //   }
    
  // } 
  // .mu-chip {
  //    padding-left: 24px;
  //   padding-right: 24px;
  // } 
 
  // .rise {
  //     color:$primary;
  //     .mu-item-content {
  //       color:$primary;
  //       // font-size: 24px;
  //     }
  // }
  // .fall {
  //   color: $green;
  // } 
}
</style>