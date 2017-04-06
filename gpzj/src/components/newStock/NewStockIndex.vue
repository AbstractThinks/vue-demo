<template>
  <div id="newstockindex">
      <mu-content-block>
        <img src="../../assets/img/stockindex_text_banner.png" style="" alt=""> <br />
        <div>提醒服务</div>
        <div><mu-flat-button label="已订阅服务" class="observer"/></div>
        <div class="description">2345人已使用</div>
      </mu-content-block>
        <mu-list class="primary">
            <mu-list-item title="立即申购" href="https://trade.hx168.com.cn/v2/m/trade/index.html#!/newshare/apply.html" >
                <mu-icon slot="left" value="inbox"/>
                <mu-icon slot="right" value="info"/>
            </mu-list-item>
        </mu-list>
        <mu-divider />
        <mu-list>
            <router-link :to="{ name: 'newstocklist'}">
              <mu-list-item title="新股发行计划" href="">
                  <mu-icon slot="left" value="inbox"/>
                  <mu-icon slot="right" value="info"/>
              </mu-list-item>
            </router-link>
            <router-link :to="{ name: 'newstockremind'}">
                <mu-list-item title="新股发行提醒" afterText="(已关闭)" describeTextClass="">
                    <mu-icon slot="left" value="inbox"/>
                    <mu-icon slot="right" value="info"/>
                </mu-list-item>
            </router-link>
            <router-link :to="{ name: 'newstockrule'}">
                <mu-list-item title="跟我学新规">
                    <mu-icon slot="left" value="inbox"/>
                    <mu-icon slot="right" value="info"/>
                </mu-list-item>
            </router-link>
        </mu-list>
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
   
}
</script>

<style lang="scss">
#newstockindex {
  .mu-content-block {
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
    background-image: url(../../assets/img/stockindex_banner.jpg);
    background-size: 100% 100%;
  }
}

</style>