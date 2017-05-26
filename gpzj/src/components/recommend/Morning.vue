<template>
  <div id="recommendmorning">

    <mu-dialog :open="loading" dialogClass="loading">
      <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    <mu-popup position="top" popupClass="consultation-popup" :open="topPopup" @close="close('top')">
        <h4 class="text-center">相关资质</h4>
        <mu-content-block>
          <div class="">
            <p class="">投顾姓名：雷林川</p>
            <p class="">证书编号：S1120614050007</p>
          </div>
          <div class="">
            <p class="">投顾姓名：周磊</p>
            <p class="">证书编号：S1120614080008</p>
          </div>
          <div class="">
            <p class="">投顾姓名：仲林</p>
            <p class="">证书编号：S1120617040008</p>
          </div>
        </mu-content-block>
        <mu-flat-button label="知道了" fullWidth @click="close('top')"/>
    </mu-popup>
    <mu-popup position="top" popupClass="consultation-popup" :open="topRulePopup" @close="close('topRule')">
        <h4 class="text-center">统计规则</h4>
        <mu-content-block>
          <p> 按照股票发布日的开盘价对比发布后近5交易日的最高价，统计最大涨幅。（如果发布日开盘价为近5交易日最高价，统计最大涨幅将为0%）</p>
        </mu-content-block>
        <mu-flat-button label="知道了" fullWidth @click="close('topRule')"/>
    </mu-popup>


    <mu-content-block class="slide-in-down">
      <h3 class="text-center">冲高回落，大盘要二次探底？(内附盘前三股)</h3>
      <h6 class="text-center">2017年05月23日</h6>
      <h6 class="text-center"><mu-flat-button label="相关资讯" class="" @click="open('top')"/></h6>
    </mu-content-block>

    <mu-content-block class="slide-in-up">
    <mu-paper :zDepth="1" >
    <mu-content-block class="relative">
      <div class="title-img"></div>
      <div class="blank20"></div>
      <p><b>&nbsp; &nbsp; 【深度解析】</b></p><p>&nbsp; &nbsp; &nbsp; 昨日大盘呈现冲高回落态势，保险股再度逆势走强，次新股遭遇重挫。上周五证监会对券商通道业务的监管表态，再度引发昨日市场谨慎情绪，新股常态化发行稀释了以往次新股的稀缺性，近期次新股成为调整重灾区。</p><p>&nbsp;</p><p>&nbsp; &nbsp; &nbsp; 昨日大盘早盘受阻20日均线出现冲高回落，年线得而复失，全天收出带上下影线的小阴线。目前大盘或将依旧围绕年线震荡筑底，短线反弹力度有限，回调空间也可能有限，上证50指数走强或显示权重股护盘意图。</p><p>&nbsp;</p><p>&nbsp; &nbsp; &nbsp; 据财联社报道，5月22日一年期Shibor(全国银行间同业拆放利率)报价4.3024%，已经高于上海银行间市场的一年期贷款基础利率（LPR）4.30%，和央行一年期贷款利率4.35%只有一步之遥。一年期Shibor超过一年期LPR或传递出近期市场资金紧张局面。</p><p>&nbsp;</p><p>&nbsp; &nbsp; &nbsp; 权重股护盘之下，大盘出现二次探底概率不大，今日大盘或将维持震荡，次新股风险可能继续释放。</p><p><br></p><p>&nbsp; &nbsp; <b>【今日策略】</b></p><p>&nbsp; &nbsp; &nbsp; 建议投资者暂以观望为主。</p><p><br></p>
      <div class="text-center">
        <mu-chip backgroundColor="red500" color="white">
          盘前三股
        </mu-chip>
        <h6>05月23日发布</h6>
      </div>
      <p>今日三股关键词分为社保新进、锂电设备、锆概念股。</p>
      <div class="blank20"></div>
      
      <div class="text-center">
          <mu-flat-button label="文字在后面" icon="android" primary @click="toggleHistory()">
            <!-- <mu-icon slot="right" value=":iconfont icon-jiantou"/> -->
          </mu-flat-button>
      </div>
      <mu-list  v-if="toggleHistoryShow" class="vanish-in">
        <mu-list-item @click="open('topRule')"> 
          <h6 class="text-center">5月16日发布个股近5交易日最大涨幅</h6>
        </mu-list-item> 
        <mu-list-item title="荣盛发展(002146)" afterText="涨幅  +8.03%" >
        </mu-list-item>
         <mu-list-item title="荣盛发展(002146)"  afterText="涨幅  +8.03%" >
        </mu-list-item>
        <mu-list-item title="荣盛发展(002146)" afterText="涨幅  +8.03%" >
        </mu-list-item>
        <mu-list-item slot="nested"> 
          <h6 class="text-center">数据统计至5月22日收盘后</h6>
          <h6 class="text-center">回顾股票现在已失去参考意义</h6> 
        </mu-list-item> 
      </mu-list>

      <div class="blank20"></div>
    </mu-content-block>
    </mu-paper>
    </mu-content-block>

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
// import History from '@/components/public/History';
export default {
  name: 'recommendmorning',
  data() {
    return {
      loading: false,
      toggleHistoryShow: true,
      topPopup: false,
      topRulePopup: false
    }
  },
  methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    toggleHistory() {
      if (this.toggleHistoryShow) {
        this.toggleHistoryShow = false
      } else {
        this.toggleHistoryShow = true
      }
    }
  },
  components: {
      appAdvertisement: Advertisement,
      appRisk: Risk,
      appInvestment: Investment,
      // appHistory: History,
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
    color: $red
  }   
}
</style>