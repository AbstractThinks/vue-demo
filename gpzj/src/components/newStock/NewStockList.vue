<template>
  <div id="newstocklist">
            <mu-card class="banner">
              <mu-card-media subTitle="有2只新股今日发行">
                <img src="../../assets/img/stocklist_banner.jpg"/>
              </mu-card-media>
            </mu-card>

            
              <mu-list>
                  <mu-content-block>
                  <mu-list-item title="2017-04-06 周四" afterText="申购中...">
                      <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
                  </mu-list-item>
                  </mu-content-block>
                  <mu-content-block class="list-item">
                  <mu-list-item href="#/newstock/detail/1">
                      <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                      <mu-row gutter>
                      <mu-col width="750" tablet="25" desktop="25">今日凯飞<br /><span class="description">深 002863</span></mu-col>
                      <mu-col width="25" tablet="25" desktop="25">5.48</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">顶格申购市值</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">20.5万</mu-col>
                      </mu-row>
                  </mu-list-item>
                  <mu-divider />
                  </mu-content-block>
                  <mu-content-block class="list-item">
                  <mu-list-item href="#/newstock/detail/1">
                      <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                      <mu-row gutter>
                      <mu-col width="750" tablet="25" desktop="25">今日凯飞<br /><span class="description">深 002863</span></mu-col>
                      <mu-col width="25" tablet="25" desktop="25">5.48</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">顶格申购市值</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">20.5万</mu-col>
                      </mu-row>
                  </mu-list-item>
                  <mu-divider />
                  </mu-content-block>
                  <mu-content-block class="list-item">
                      <div class="blank20"></div>
                      <mu-raised-button label="立即申购" fullWidth primary/>
                      <div class="blank20"></div>
                  </mu-content-block>
                  <div class="blank10"></div>
              </mu-list>


              <mu-list>
                  <mu-content-block>
                  <mu-list-item title="2017-04-06 周四">
                      <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
                  </mu-list-item>
                  </mu-content-block>
                  <mu-content-block class="list-item">
                  <mu-list-item href="#/newstock/detail/1">
                      <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                      <mu-row gutter>
                      <mu-col width="750" tablet="25" desktop="25">今日凯飞<br /><span class="description">深 002863</span></mu-col>
                      <mu-col width="25" tablet="25" desktop="25">5.48</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">顶格申购市值</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">20.5万</mu-col>
                      </mu-row>
                  </mu-list-item>
                  <mu-divider />
                  </mu-content-block>
                  <mu-content-block class="list-item">
                  <mu-list-item href="#/newstock/detail/1">
                      <mu-icon slot="right" value=":iconfont icon-jiantou"/>
                      <mu-row gutter>
                      <mu-col width="750" tablet="25" desktop="25">今日凯飞<br /><span class="description">深 002863</span></mu-col>
                      <mu-col width="25" tablet="25" desktop="25">5.48</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">顶格申购市值</mu-col>
                      <mu-col width="25" tablet="25" desktop="25">20.5万</mu-col>
                      </mu-row>
                  </mu-list-item>
                  <mu-divider />
                  </mu-content-block>
                  <div class="blank10"></div>
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
   name: 'newstocklist',
   mounted () {
    this.getStockList()
  },
   computed: mapState({
    stocklist: state => state.newstock.stocklist,
  }),
   methods: {
    ...mapActions({
      getStockList: types.NEWSTOCK_LIST_ACTION,
    }),
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
  .blank10 {
    background: #dddddd;
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
    background: #eeeeee;
    padding-top: 0;
    padding-bottom: 0;
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