<template>
  <div id="newstocklist">
        <mu-card class="banner">
          <mu-card-media >
            <img src="../../assets/img/stocklist_banner.jpg"/>
          </mu-card-media>
        </mu-card>
        <mu-list v-for="(results, index) in stocklist.results" :key="index">

            <mu-content-block>
              <!-- {{results[1].online_issue_date}} -->
              <mu-list-item :title="results[1].online_issue_date|dateFormat('yyyy-MM-dd')|show_weekend" :afterText="results[1].online_issue_date|show_apply">
                  <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
              </mu-list-item>
            </mu-content-block>
            <mu-content-block class="list-item">
              <mu-list-item :href="item.id|urlReq" v-for="item in results" :key="item.id">
                  <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                  <mu-row gutter>
                  <mu-col width="750" tablet="25" desktop="25">{{item.short_name}}<br /><span class="description">{{item.stock_exchange|show_addr}} {{item.code}}</span></mu-col>
                  <mu-col width="25" tablet="25" desktop="25">{{item.issue_price?parseInt(item.issue_price).toFixed(2):""}}</mu-col>
                  <mu-col width="25" tablet="25" desktop="25">顶格申购市值</mu-col>
                  <mu-col width="25" tablet="25" desktop="25">{{item.subscribe_limit?parseInt(item.subscribe_limit).toFixed(2):""}}万</mu-col>
                  </mu-row>
              </mu-list-item>
              <mu-divider />
            </mu-content-block>

            <mu-content-block class="list-item button-container" v-if="_filterShow(results[1].online_issue_date)">
                <div class="blank20"></div>
                <mu-raised-button label="立即申购" fullWidth primary href="https://trade.hx168.com.cn/v2/m/trade/index.html#!/newshare/apply.html"/>
                <div class="blank20"></div>
            </mu-content-block>
            <div class="blank10"></div>
        </mu-list>
        <div class="text-center none-text" v-if="stocklist.firstData == null">
          <div class="blank90"></div>
          暂无数据
        </div>
        <div class="blank40"></div> 
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

export default {
   name: 'newstocklist',
   data() {
    return {
      dialog: false
    }
   },
   mounted () {
    this.getStockList().then(() => {
      if (this.stocklist.error) {
        this.dialog = true;
      }
    }, () => {
    });
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

    _showNone(value) {
      if (value) {
        return true;
      }
      return false;
    },
    _filterShow (value) {
      let nowDate = new Date();
          let myDate = new Date(value.replace(/-/g,'/'));
          nowDate = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;
          myDate = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
          if (myDate === nowDate) {
            return true;
          } 
          return false;
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
     show_apply: function (value) {
          let nowDate = new Date();
          let myDate = new Date(value.replace(/-/g,'/'));
          nowDate = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`;
          myDate = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
          if (myDate === nowDate) {
            return "申购中...";
          } 
          return "";

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
#newstocklist {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .mu-content-block {
    padding: 8px 0px;
  }
  .blank10 {
    background: #e6e6e6;
  }
  .description {
    font-size: 12px;
    color: #8e8e8e;
  }
  .mu-list {
    padding: 0px;

  }
  .mu-card.banner {
    .mu-card-media-title {
      background: linear-gradient(to right, rgba(255,255,255,0.8) , rgba(255,255,255,0));
    }
    .mu-card-sub-title {
      color: #f44336;
    }
  }
  .mu-content-block.list-item {
    background: #f5f5f5;
    padding: 0;
    &.button-container {
      padding: 0px 16px;
    }
    .mu-item {
      color: #757575;
    }
  }
  .mu-item-after {
    font-size: 13px;
    color: #f44336;
  }
}

</style>