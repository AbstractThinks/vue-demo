<template>
  <div id="newstocklist">
        <mu-dialog :open="loading" @close="close" dialogClass="loading">
          <mu-circular-progress :size="60" :strokeWidth="5"/>
        </mu-dialog>
        <mu-card class="banner">
          <mu-card-media >
            <img src="../../assets/img/newstock/stocklist_banner.jpg"/>
          </mu-card-media>
        </mu-card>
        <mu-list v-for="(results, index) in stocklist.results" :key="index">

            <mu-content-block class="bgwhite">
              <mu-list-item :title="results[1].online_issue_date|dateFormat('yyyy-MM-dd')|show_weekend"  v-if="_filterShowContent(results[1].online_issue_date)" @click="toggleShow()">
                  <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
                  <mu-icon slot="right" :value="iconValue"  />
              </mu-list-item>
              <mu-list-item :title="results[1].online_issue_date|dateFormat('yyyy-MM-dd')|show_weekend" :afterText="_filterShowText(results[1].online_issue_date, results[1].intime)" v-if="!_filterShowContent(results[1].online_issue_date)">
                  <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
              </mu-list-item>
            </mu-content-block>
            <transition name="slide">
            <mu-content-block class="list-item" v-if="_filterShowContent(results[1].online_issue_date)  && showList">
              <mu-list-item  :href="item.id|urlReq" v-for="item in results" :key="item.id">
                  <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                  <mu-row gutter>
                  <mu-col width="34" tablet="25" desktop="25">{{item.short_name}}<br /><span class="description">{{item.stock_exchange|show_addr}} {{item.code}}</span></mu-col>
                  <mu-col width="21" tablet="25" desktop="25">{{item.issue_price?parseFloat(item.issue_price):"暂无"}}</mu-col>
                  <mu-col width="25" tablet="25" desktop="25"><span class="description">顶格<br />申购市值</span></mu-col>
                  <mu-col width="20" tablet="25" desktop="25">{{item.subscribe_limit_total&&parseFloat(item.subscribe_limit_total)!== 0?parseFloat(item.subscribe_limit_total)+"万":"暂无"}}</mu-col>
                  </mu-row>
              </mu-list-item>
              <mu-divider />
            </mu-content-block>
            </transition>
            <mu-content-block class="list-item" v-if="!_filterShowContent(results[1].online_issue_date) ">
              <mu-list-item  :href="item.id|urlReq" v-for="item in results" :key="item.id">
                  <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                  <mu-row gutter>
                  <mu-col width="34" tablet="25" desktop="25">{{item.short_name}}<br /><span class="description">{{item.stock_exchange|show_addr}} {{item.code}}</span></mu-col>
                  <mu-col width="21" tablet="25" desktop="25">{{item.issue_price?parseFloat(item.issue_price):"暂无"}}</mu-col>
                  <mu-col width="25" tablet="25" desktop="25"><span class="description">顶格<br />申购市值</span></mu-col>
                  <mu-col width="20" tablet="25" desktop="25">{{item.subscribe_limit_total&&parseFloat(item.subscribe_limit_total)!== 0?parseFloat(item.subscribe_limit_total)+"万":"暂无"}}</mu-col>
                  </mu-row>
              </mu-list-item>
              <mu-divider />
            </mu-content-block>
            <mu-content-block class="list-item button-container" v-if="_filterShow(results[1].online_issue_date, results[1].intime)">
                <div class="blank20"></div>
                <mu-raised-button label="立即申购" fullWidth primary href="https://trade.hx168.com.cn/v2/m/trade/index.html#!/newshare/apply.html"/>
                <div class="blank20"></div>
            </mu-content-block>
            <div class="blank10"></div>
        </mu-list>
        <div class="text-center none-text" v-if="stocklist.firstData == null">
          <div class="blank60"></div>
          暂无数据
          <div class="blank60"></div>
        </div>
        <appAdvertisement></appAdvertisement>
        <!-- <div class="blank40"></div>  -->
        <appFooter></appFooter>
        <mu-dialog :open="dialog" title="系统提示" @close="close">
          新股列表加载失败，请稍后重试...
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
import { shareConfig } from '../../api/wxshare';
import Advertisement from '@/components/public/Advertisement';
import Footer from '@/components/public/Footer';

export default {
   name: 'newstocklist',
   data() {
    return {
      showList: false,
      iconValue: ":iconfont icon-unfold",
      loading: true,
      dialog: false
    }
   },
   mounted () {
    
    if ((!this.$store.state.newstock.stocklist) || (!this.$store.state.newstock.stocklist.firstData)) {
      this.getStockList()
        .then(() => {
            this.dialog = false;
        },() => {
          this.dialog = false;
        });
    } else {
      this.loading = false;
    }

  },
  components: {
      appFooter: Footer,
      appAdvertisement: Advertisement,

  },
   computed: mapState({
    stocklist: state => state.newstock.stocklist,
  }),
   methods: {
    ...mapActions({
      getStockList: types.NEWSTOCK_LIST_ACTION,
    }),
    close () {
      this.dialog = false
    },
    toggleShow() {
      if (this.showList) {
        this.showList = false;
        this.iconValue = ":iconfont icon-unfold";
      } else {
        this.showList = true;
        this.iconValue = ":iconfont icon-fold"
      }

    },
    _showNone(value) {
      if (value) {
        return true;
      }
      return false;
    },
    _filterShowContent (value) {
      let nowDate = new Date();
          let myDate = new Date(value.replace(/-/g,'/'));
          nowDate = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;
          myDate = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
          if (myDate === nowDate) {
            return false;
          } 
          return true;
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
    },
    _filterShowText(value, value2) {
        let nowDate = new Date();
            let myDate = new Date(value.replace(/-/g,'/'));
            nowDate = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;
            myDate = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
            if (myDate === nowDate && value2 === "1") {
              return "申购中...";
            } 
            if (myDate === nowDate && value2 === "0") {
              return "申购已结束";
            } 
            return "";

      }
  },
  filters: {
      show_addr: function (value) {
          switch(value){
            case "sz":
              return "深圳: ";
            case "sh":
              return "上海: ";
            default:
              return "";
          }
      },
    
      show_weekend: function (value) {
          let myDate = new Date(value)
          let day = myDate.getDay();
          switch(day){
            case 0:
              return `${value} 周日`;
            case 1:
              return `${value} 周一`;
            case 2:
              return `${value} 周二`;
            case 3:
              return `${value} 周三`;
            case 4:
              return `${value} 周四`;
            case 5:
              return `${value} 周五`;
            case 6:
              return `${value} 周六`;
            default:
              return `${value}`;
          }
      },
      show_button: function (value) {
          let myDate = new Date()
          let result = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()} 00:00:00`;
          if ( result === value) {
            return true;
          }
          return false;
      },
      urlReq: function(value) {
        return `#/newstock/detail/${value}`;
      }
  }
   
}
</script>

<style lang="scss">
@import "../../assets/css/variable.scss";
#newstocklist {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .slide-enter-active {
    animation: slide-in-down .5s;
  }
  .slide-leave-active {
    animation: slide-out-up .5s;
  }
  @keyframes slide-in-down {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
  @keyframes slide-out-up {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  .bgwhite {
    background: #ffffff;
  }
  .mu-content-block {
    padding: 8px 0px;
  }
  .blank10 {
    background: $grey;
  }
  .description {
    font-size: 12px;
    color: $grey7;
  }
  .mu-list {
    padding: 0px;
    background: $grey;
  }
  .mu-card.banner {
    .mu-card-media-title {
      background: linear-gradient(to right, rgba(255,255,255,0.8) , rgba(255,255,255,0));
    }
    .mu-card-sub-title {
      color: $primary;
    }
  }
  .mu-content-block.list-item {
    background: $grey4;
    padding: 0;
    &.button-container {
      padding: 0px 16px;
    }
    .mu-item {
      color: $grey9;
    }
  }
  .mu-item-after {
    font-size: 13px;
    color: $primary;
  }
}

</style>