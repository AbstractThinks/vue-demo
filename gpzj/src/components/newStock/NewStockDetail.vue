<template>
  <div id="newstockdetail">
        <div class="blank30"></div>
        <mu-content-block class="title">
            <mu-row gutter>
              <mu-col width="60" tablet="60" desktop="60"><span class="main">{{stockdetail.firstData.short_name}}</span><span class="description">{{stockdetail.firstData.code}}</span></mu-col>
              <mu-col width="40" tablet="40" desktop="40"><mu-raised-button label="立即申购" primary /></mu-col>
            </mu-row>
            <div class="blank10"></div>
            <mu-divider />
        </mu-content-block>
        <mu-content-block class="article">
          <div class="blank20"></div>
            <mu-row gutter>
                <mu-col width="50" tablet="50" desktop="50" ><span class="description">新股名称&nbsp;&nbsp;&nbsp;</span>今飞开打</mu-col>
                <mu-col width="50" tablet="50" desktop="50" ><span class="description">新股名称&nbsp;&nbsp;&nbsp;</span>今飞开打</mu-col>
                <mu-col width="50" tablet="50" desktop="50" ><span class="description">新股名称&nbsp;&nbsp;&nbsp;</span>今飞开打</mu-col>
                <mu-col width="50" tablet="50" desktop="50" ><span class="description">新股名称&nbsp;&nbsp;&nbsp;</span>今飞开打</mu-col>
                <mu-col width="50" tablet="50" desktop="50" ><span class="description">新股名称&nbsp;&nbsp;&nbsp;</span>今飞开打</mu-col>
            </mu-row>
            <div class="blank20"></div>
            <mu-divider />
        </mu-content-block>
        <mu-content-block class="article">
          <div class="blank20"></div>
          <mu-row gutter>
            <mu-col width="100" tablet="100" desktop="100">
              <span class="description">市盈率（倍）</span>
              <span class="float-right">21.92</span>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              <span class="description">市盈率（倍）</span>
              <span class="float-right">21.92</span>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              <span class="description">市盈率（倍）</span>
              <span class="float-right">21.92</span>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              <span class="description">市盈率（倍）</span>
              <span class="float-right">21.92</span>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              <span class="description">市盈率（倍）</span>
              <span class="float-right">21.92</span>
            </mu-col>
          </mu-row>
          <div class="blank20"></div>
        </mu-content-block>
        <div class="blank10"></div>
        <mu-content-block>
          <div class="blank20"></div>
          公司基本面
          <p>
            24小时服务:为了支持客户的工作及日常运用，瑞宝电脑运用最先进的技术24小时为用户服务，并免费提供远程协助，电话支持。
          </p>
          <p>
            24小时服务:为了支持客户的工作及日常运用，瑞宝电脑运用最先进的技术24小时为用户服务，并免费提供远程协助，电话支持。
          </p>
          <p>
            24小时服务:为了支持客户的工作及日常运用，瑞宝电脑运用最先进的技术24小时为用户服务，并免费提供远程协助，电话支持。
          </p>
          <div class="blank20"></div>
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
  name: 'newstockdetail',
  computed: mapState({
    stockdetail: state => state.newstock.stockdetail,
  }),
  mounted () {
    this.getStockDetail().then(() => {
      this.show = false;
    });
  },
  methods: {
    ...mapActions({
      getStockDetail: types.NEWSTOCK_DETAIL_ACTION 
    }),
  }
}
</script>

<style lang="scss">
#newstockdetail {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .float-right {
    float:right;
  }
  &>.blank10 {
    background: #eeeeee;
  }
  .main {
    font-size: 24px;
    display: inline-block;
    padding-right: 8px;
  }
  .description {
    font-size: 13px;
    color: #9e9e9e;
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