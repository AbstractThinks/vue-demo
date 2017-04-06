<template>
  <div id="newstockremind">
    <mu-appbar title="新股发行提醒">
      <mu-switch slot="right"/>
    </mu-appbar>
    <mu-divider />
    <mu-content-block>
    <mu-sub-header>最近聊天记录</mu-sub-header>
    <img src="http://www.miumiu.com/assets/images/products/grid/5BH609_047_F0CYD_V_DJM-1.jpg" alt="" style="width:100%">
    设置提醒后，如果当前天有新股发行没打开长了财付通是，会立刻撒后就打死ok佛山的覅偶啊互贷搜到合肥
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
   name: 'newstockremind',
   
}
</script>

<style lang="scss">
#newstockremind {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

</style>