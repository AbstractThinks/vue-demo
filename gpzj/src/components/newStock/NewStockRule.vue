<template>
  <div id="newstockrule">
    <mu-stepper orientation="vertical">
      <mu-step active="true">
        <mu-step-label >
          <mu-icon slot="icon" value="warning" color="red"/>
          创建一个群组
        </mu-step-label>
        <mu-step-content>
          <p>
            在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
          </p>
        </mu-step-content>
      </mu-step>
      <mu-step  active>
        <mu-step-label >
          选择活动地点
        </mu-step-label>
        <mu-step-content>
          <p>
            在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
          </p>
        </mu-step-content>
      </mu-step>
      <mu-step active>
        <mu-step-label>
          选择活动地点
        </mu-step-label>
        <mu-step-content>
          <p>
            在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
          </p>
        </mu-step-content>
      </mu-step>
      <mu-step active>
        <mu-step-label>
          选择活动地点
        </mu-step-label>
        <mu-step-content>
          <p>
            在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
          </p>
        </mu-step-content>
      </mu-step>
      <mu-step active>
        <mu-step-label>
          选择活动地点
        </mu-step-label>
        <mu-step-content>
          <p>
            在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
          </p>
        </mu-step-content>
      </mu-step>
    </mu-stepper>



    <mu-list>
      <mu-list-item title="1.市值具体怎么计算？" toggleNested >
        <mu-list-item slot="nested" >
          <mu-row gutter>
              <mu-col width="100" tablet="100" desktop="100">
                <p>申购新股怎么操作,投顾老师微信在线传输炒股技巧,实时为您解析大盘指数走势及个股筹码!加微信领取圈内投顾老师授操作技巧!盘前送3只牛股,盈利快人一步!</p>
                <p>申购新股怎么操作,投顾老师微信在线传输炒股技巧,实时为您解析大盘指数走势及个股筹码!加微信领取圈内投顾老师授操作技巧!盘前送3只牛股,盈利快人一步!</p>
              </mu-col>
          </mu-row>
        </mu-list-item>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="1.市值具体怎么计算？" toggleNested>
        <mu-list-item slot="nested">
          <mu-row gutter>
              <mu-col width="100" tablet="100" desktop="100">
                <p>申购新股怎么操作,投顾老师微信在线传输炒股技巧,实时为您解析大盘指数走势及个股筹码!加微信领取圈内投顾老师授操作技巧!盘前送3只牛股,盈利快人一步!</p>
                <p>申购新股怎么操作,投顾老师微信在线传输炒股技巧,实时为您解析大盘指数走势及个股筹码!加微信领取圈内投顾老师授操作技巧!盘前送3只牛股,盈利快人一步!</p>
              </mu-col>
          </mu-row>
        </mu-list-item>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="1.市值具体怎么计算？" toggleNested open=false>
        <mu-list-item slot="nested">
          <mu-row gutter>
              <mu-col width="100" tablet="100" desktop="100">
                <p>申购新股怎么操作,投顾老师微信在线传输炒股技巧,实时为您解析大盘指数走势及个股筹码!加微信领取圈内投顾老师授操作技巧!盘前送3只牛股,盈利快人一步!</p>
                <p>申购新股怎么操作,投顾老师微信在线传输炒股技巧,实时为您解析大盘指数走势及个股筹码!加微信领取圈内投顾老师授操作技巧!盘前送3只牛股,盈利快人一步!</p>
              </mu-col>
          </mu-row>
        </mu-list-item>
      </mu-list-item>
      <mu-divider />
      <mu-content-block>
        <mu-raised-button label="分享" fullWidth primary/>
      </mu-content-block>
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
   name: 'newstockrule',
   
}
</script>

<style lang="scss">
#newstockrule {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

</style>