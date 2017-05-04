<template>
  <div id="newstockindex">
      <mu-dialog :open="loading" dialogClass="loading">
        <mu-circular-progress :size="60" :strokeWidth="5"/>
      </mu-dialog>
      <mu-popup position="top" :overlay="false" :open="topPopup" popupClass="popup-top">
        取消订阅成功
      </mu-popup>
      <mu-content-block class="banner">
        <img src="../../assets/img/newstock/stockindex_text_banner.png" style="" alt=""> <br />
        <div>提醒服务</div>
        <div>
          <mu-flat-button  v-if="observer.firstData && observer.firstData.isordered == '1'" label="已订阅" class="observer"  @click="_unorderTipsOpen"/>
          <mu-flat-button  v-if="observer.firstData && observer.firstData.isordered == '0'" label="未订阅" class="observer"  @click="_observer"/>
        </div>
        <div class="description">{{observer.firstData?observer.firstData.orderedcnt:0}}人已使用</div>
      </mu-content-block>
      <mu-content-block class="primary">
        <mu-list>
            <mu-list-item title="立即申购" :describeText="observer.firstData?observer.firstData.availablecnt:0|showText" href="https://trade.hx168.com.cn/v2/m/trade/index.html#!/newshare/apply.html" >
                <mu-icon slot="left" value=":iconfont icon-add-round"/>
                <mu-icon slot="right" value=":iconfont icon-jiantou"/>
            </mu-list-item>
        </mu-list>
        </mu-content-block>
        <div class="blank10"></div>
        <mu-content-block class="list">
        <mu-list>
            <router-link :to="{ name: 'newstocklist'}">
              <mu-list-item title="新股发行计划" >
                  <mu-icon slot="left" value=":iconfont icon-pandianjihua" />
                  <mu-icon slot="right" value=":iconfont icon-jiantou"/>
              </mu-list-item>
            </router-link>
            <mu-divider />
            <router-link :to="{ name: 'newstockrule'}">
            <mu-list-item title="跟我学新规">
                <mu-icon slot="left" value=":iconfont icon-kaidianguize"/>
                <mu-icon slot="right" value=":iconfont icon-jiantou"/>
            </mu-list-item>
            </router-link>
        </mu-list>
        <div class="blank40"></div>
        </mu-content-block>
      <mu-dialog :open="orderTips" @close="_orderTipsClose" title="您已加入成功">
        <p>您已经成功加入“新股申购提醒”服务，后期有相关提醒内容将会通过微信推送通知您，请注意查收。谢谢。</p>
        <mu-flat-button slot="actions" primary label="知道了" @click="_orderTipsClose"/>
      </mu-dialog>
      <mu-dialog :open="unorderTips" @close="_unorderTipsClose" title="您确定退出？">
        <p>退出“新股申购提醒”服务后，我们将停止对您进行相关服务的推送，确定要退出吗？</p>
        <mu-flat-button slot="actions" primary label="确定" @click="_cancelObserver"/>
        <mu-flat-button slot="actions" primary label="取消" @click="_unorderTipsClose"/>
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
import Footer from '@/components/public/Footer';
export default {
  name: 'newstockindex',
  data() {
    return {
      loading:true,
      show: true,
      topPopup: false,
      orderTips: false,
      unorderTips: false,
      msg:""
    }
  },
  mounted () {
    if ((!this.$store.state.newstock.observer) || (!this.$store.state.newstock.observer.firstData)) {
      this.getObserver()
        .then(() => {
          this.show = false;
        },() => {
          this.show = false;
        })
        .then(() => {
          this.loading = false;
        });
    } else {
      this.loading = false;
    }

    
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 1000)
      }
    }
  },
  computed: mapState({
    observer: state => state.newstock.observer,
  }),
  methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    _orderTipsClose: function () {
      this.orderTips = false;
    },
    _orderTipsOpen: function () {
      this.orderTips = true;
    },
    _unorderTipsClose: function () {
      this.unorderTips = false;
    },
    _unorderTipsOpen: function () {
      this.unorderTips = true;
    },
    _cancelObserver() {
      this._unorderTipsClose();
      this.cancelObserverOrder().then(() => {
        this.open('top');
      });
      
    },
    _observer() {
      this.observerOrder().then(() => {
        this._orderTipsOpen();
      });
      
    },
    ...mapActions({
      getObserver: types.NEWSTOCK_OBSERVER_ACTION,
      observerOrder: types.NEWSTOCK_OBSERVER_ORDER_ACTION,
      cancelObserverOrder: types.NEWSTOCK_OBSERVER_UNORDER_ACTION 
    }),
  },
  filters: {
    showText(value) {
      if (value) {
        return `今日有${value}只股可以申购`
      } else {
        return `今日有0只股可以申购`
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/variable.scss";
#newstockindex {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .blank10 {
    background: $grey;
  }
  
  .mu-content-block.banner {
    background: url(../../assets/img/newstock/stockindex_banner.jpg);
    background-size: 100% 100%;
    padding-top: 48px;
    padding-bottom: 24px;
    color: #fff;
    text-align: center;
    .description {
      font-size: 12px;
    }
    .mu-list.primary {
      background-color: $primary;
    }
    .mu-flat-button.observer {
      color: #fff;
      border: 1px solid #fff;
      margin: 8px 0px;
    }
    img {
      width: 160px;
    }
  }
  .mu-content-block.primary {
    background-color: $primary;
    padding-top: 0;
    padding-bottom: 0;
    .mu-item {
      color: #fff;
      font-weight: bolder;
      .mu-item-left,.mu-item-right {
        color: #fff;
      }
      .mu-item-title {
        font-size: 18px;
      }
      .mu-item-text {
        color: #fff;
         
      }
    }
    .mu-list {
      padding: 0px;
    }
  }
  .mu-content-block.list {
    padding-top: 0px;
    padding-bottom: 0px;
    .mu-list {
      padding: 0px;
    }
    .mu-item-left {
      color: $primary;
    }
    .mu-item-right {
      color: #cccccc;
    }
  }
}

</style>