<template>
  <div id="newstockindex">
      <mu-content-block class="banner">
        <mu-toast v-if="toast" :message="msg" />
        <img src="../../assets/img/newstock/stockindex_text_banner.png" style="" alt=""> <br />
        <div>提醒服务</div>
        <div>
          <mu-flat-button  v-if="observer.firstData && observer.firstData.isordered == '1'" label="已订阅服务" class="observer"  @click="_cancelObserver"/>
          <mu-flat-button  v-if="observer.firstData && observer.firstData.isordered == '0'" label="未订阅服务" class="observer"  @click="_observer"/>
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
              <mu-list-item title="新股发行计划" href="">
                  <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
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
        </mu-content-block>
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
  name: 'newstockindex',
  data() {
    return {
      show: true,
      toast: false,
      msg:""
    }
  },
  mounted () {
    if ((!this.$store.state.newstock.observer) || (!this.$store.state.newstock.observer.firstData)) {
      this.getObserver().then(() => {
        this.show = false;
      });
    }

    
  },
  computed: mapState({
    observer: state => state.newstock.observer,
  }),
  methods: {
    _cancelObserver() {
      this.cancelObserverOrder().then(() => {
        this.msg = "取消订阅成功";
        this.toast = true;
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => { this.toast = false }, 2000);
        this.show = false;
      });
      
    },
    _observer() {
      this.observerOrder().then(() => {
        this.msg = "订阅成功";
        this.toast = true; 
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => { this.toast = false }, 2000);
        this.show = true;
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
#newstockindex {
  .blank10 {
    background: #e6e6e6;
  }
  .mu-content-block.banner {
    background-image: url(../../assets/img/newstock/stockindex_banner.jpg);
    background-size: 100% 100%;
    padding-top: 48px;
    padding-bottom: 24px;
    color: #fff;
    text-align: center;
    .description {
      font-size: 12px;
    }
    .mu-list.primary {
      background-color: #f44336;
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
    background-color: #f44336;
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
      color: #f44336;
    }
    .mu-item-right {
      color: #cccccc;
    }
  }
}

</style>