<template>
  <div id="newstockdetail">
    <mu-paper class="demo-paper" :zDepth="3" />
      <mu-list>
        <mu-list-item title="今日凯达" describeText="002863">
          <mu-raised-button label="立即申购" primary />
        </mu-list-item>
        <mu-divider />
        <mu-list-item>
          <mu-row gutter>
            <mu-col width="25" tablet="25" desktop="25">新股名称</mu-col>
            <mu-col width="25" tablet="25" desktop="25">禁飞开打</mu-col>
            <mu-col width="25" tablet="25" desktop="25">申购日期</mu-col>
            <mu-col width="25" tablet="25" desktop="25">2017-04-06</mu-col>
            <mu-col width="25" tablet="25" desktop="25">新股名称</mu-col>
            <mu-col width="25" tablet="25" desktop="25">禁飞开打</mu-col>
            <mu-col width="25" tablet="25" desktop="25">申购日期</mu-col>
            <mu-col width="25" tablet="25" desktop="25">2017-04-06</mu-col>
            <mu-col width="25" tablet="25" desktop="25">新股名称</mu-col>
            <mu-col width="25" tablet="25" desktop="25">禁飞开打</mu-col>
            <mu-col width="25" tablet="25" desktop="25">申购日期</mu-col>
            <mu-col width="25" tablet="25" desktop="25">2017-04-06</mu-col>
          </mu-row>
        </mu-list-item>
        <mu-divider />
        <mu-list-item>
          <mu-row gutter>
            <mu-col width="100" tablet="100" desktop="100">
              市盈率（倍）21.92
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              市盈率（倍）21.92
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              市盈率（倍）21.92
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              市盈率（倍）21.92
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              市盈率（倍）21.92
            </mu-col>
            <mu-col width="100" tablet="100" desktop="100">
              市盈率（倍）21.92
            </mu-col>
          </mu-row>
        </mu-list-item>
        <mu-list-item>
          公司基本面
          <p>
            24小时服务:为了支持客户的工作及日常运用，瑞宝电脑运用最先进的技术24小时为用户服务，并免费提供远程协助，电话支持。
          </p>
        </mu-list-item>
        <mu-divider />
      </mu-list>
    </mu-paper>
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
   
}
</script>

<style lang="scss">
#newstockdetail {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

</style>