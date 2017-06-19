<template>
  <div id="homepageservice">
    <mu-list-item title="证券账户" describeText="银证转账、交易成功、新股中签提醒" describeTextClass="num" class="bg-white header" :disabled="true">
        <mu-raised-button label="未开通" primary slot="right"/>
    </mu-list-item>
    <div class="blank10"></div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" icon=":iconfont icon-pandianjihua" title="金股"/>
      <mu-tab value="tab2" icon=":iconfont icon-pandianjihua" title="热点"/>
      <mu-tab value="tab3" icon=":iconfont icon-pandianjihua" title="计划"/>
      <mu-tab value="tab4" icon=":iconfont icon-pandianjihua" title="策略"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'" class="">
      <mu-list-item title="以下为您已解锁过的金股系列服务" class="bg-white header" :disabled="true">
        <mu-flat-button label="查看全部" class="info" slot="right"/>
      </mu-list-item>
      <mu-list-item :disabled="true" class="bg-white card title">
          <mu-flexbox>
          <mu-flexbox-item>
            <h3>4月金股</h3>
          </mu-flexbox-item>
          <mu-flexbox-item class="text-right desc">
            2017年04月12日发布          
          </mu-flexbox-item>
        </mu-flexbox>
        <div class="blank10"></div>
        <mu-divider/>
      </mu-list-item>
      <mu-list-item title="以下为您已解锁过的金股系列服务,以下为股系列服务以下解锁过的金股系列服务以下为您已解锁过的金股系列服务以下为您已解锁过的金股系列服务" class="bg-white header card" :disabled="true" >
        <mu-raised-button label="立即查看" class="info-raised-btn" slot="right"/>
      </mu-list-item>
      <mu-list-item :disabled="true" class="bg-white">
        <mu-badge content="持续跟踪" class="info"/> <span class="info">最近更新：05月19日</span>
      </mu-list-item>
      
    </div>
    <div v-if="activeTab === 'tab2'">
      <mu-list-item title="以下为您已解锁过的金股系列服务" class="bg-white header" :disabled="true">
        <mu-flat-button label="查看全部" class="info" slot="right"/>
      </mu-list-item>
      <mu-list-item title="以下为您已解锁过的金股系列服务,以下为股系列服务以下解锁过的金股系列服务以下为您已解锁过的金股系列服务以下为您已解锁过的金股系列服务" class="bg-white card" describeText="以下为您已解锁过的金股系列服务,以下为股系列服务以下解锁过的金股系列服务以下为您已解锁过" :disabled="true" >
      </mu-list-item>
      <mu-divider/>
      <mu-list-item :disabled="true" class="bg-white">
        <mu-flexbox>
          <mu-flexbox-item class="info">
            已解锁
          </mu-flexbox-item>
          <mu-flexbox-item class="text-right desc">
            2017年04月12日发布
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-list-item>
    </div>
    <div v-if="activeTab === 'tab3'">
      <mu-list-item title="以下为您已解锁过的金股系列服务" class="bg-white header" :disabled="true">
        <mu-flat-button label="查看全部" class="info" slot="right"/>
      </mu-list-item>
      <mu-list-item class="bg-white card title">
        <mu-flexbox align="center">
          <img src="../../assets/img/homepage/cattle.png" alt="" class="header img-circle">
          <mu-flexbox-item>
            勇往直前
          </mu-flexbox-item>
          
          <mu-flexbox-item class="text-right info">
            运行中
          </mu-flexbox-item>
        </mu-flexbox>
        <div class="blank10"></div>
        <mu-divider/>
      </mu-list-item>
      <mu-list-item :disabled="true" class="bg-white card title">
        <mu-flexbox>
          <mu-flexbox-item>
            <h3>定增破发2期</h3>
            <div>
              <span class="num num-plan">16.00%</span>
              <span class="num-desc">盈利</span>
            </div>
            <div class="desc">2017-03-01 至今</div>
          </mu-flexbox-item>
          <mu-flexbox-item class="text-right">
            <mu-raised-button label="查询详情" class="info-raised-btn"/>
            <div class="desc">
              23人已订阅
            </div>
          </mu-flexbox-item>
        </mu-flexbox>
        <div class="blank10"></div>
      </mu-list-item>
    </div>
    <div v-if="activeTab === 'tab4'">
       <mu-list-item title="以下为您已解锁过的金股系列服务" class="bg-white header" :disabled="true">
        <mu-flat-button label="查看全部" class="info" slot="right"/>
      </mu-list-item>
      <mu-list-item :disabled="true" class="bg-white">
        <mu-flexbox>
          <mu-flexbox-item grow="0" class="strategy">
            <img src="../../assets/img/homepage/cattle.png" alt="" class="img-content-circle">
          </mu-flexbox-item>
          <mu-flexbox-item>
              <div>
                <h3>
                  登高望远
                  <mu-badge content="实时盯盘" class="info"/>
                </h3>
                
              </div>
              <div>
                累积收益:<span class="num">8.9%</span>
              </div>
              <div>
                操作笔数:5（成功率<span class="num">80%</span>）
              </div>
              <div class="desc">
                注：数据统计近30日
              </div>
          </mu-flexbox-item>
          <mu-flexbox-item grow="0" class="strategy">
              <mu-chip class="info">
                已关注
              </mu-chip>
              <!-- <mu-flat-button label="已关注" class="info"></mu-flat-button> -->
              <!-- <div class="text-center info desc">21819人正在使用</div> -->
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item class="num strategy text-center" grow="0" >
            目前持仓
          </mu-flexbox-item>
          <mu-flexbox-item class="desc text-ellipsis">
              浦发银行 成本：16.00 盈亏： +18%，文字最多
          </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
          <mu-flexbox-item class="num strategy text-center" grow="0" >
            目前持仓
          </mu-flexbox-item>
          <mu-flexbox-item class="desc text-ellipsis">
              浦发银行 成本：16.00 盈亏： +18%，文字最多
          </mu-flexbox-item>
        </mu-flexbox>
        
      </mu-list-item>
    </div>
  </div>
</template>

<script>
// import HomepageIndex from '@/components/homepage/HomepageIndex';
// import HomepageMine from '@/components/homepage/HomepageMine';
export default {
  name: 'homepageservice',
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  components: {


  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#homepageservice {
		width: 100%;
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		position: relative;
    background-color: $grey4;
    .bg-white {
      background-color:$white
    }
    .header {
      .mu-item {
        padding-right: 100px;
      }
      .mu-item-right {
        right: 32px;
      }
    }
    h3{
      margin: 0;
    }
    .card.title {

      .mu-item {
        padding-top: 0px;
        padding-bottom: 0px;
      }
      
    } 
    .desc {
      font-size: 12px;
      color: $grey6;
    }
    .num-plan {
      font-size: 32px;
    }
    .num {
      color: $red;
      
    }
    .num-desc {
      color: $red;
      font-size: 12px;
    }

    img.header.img-circle {
        width:16px;
        border-radius: 50%;
    }
     
    img.img-content-circle {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }   
    .strategy {
      width: 80px;
    } 
    .info {
        color: $info;
        .mu-item-content {
            color: $info;
        }
    } 
    .info.mu-chip {
      border: 1px solid $info;
      background-color: $white;
    }
    .mu-badge {
      background-color: $white;
      color: $info;
      border: 1px solid $info;
    }
    .info-raised-btn {
      background-color: $info;
      color: $white;
    }
    .mu-tabs {
      // background-color: $white;
      // .gradient {
      //   background: linear-gradient(to right, red , blue);
      // }
      // .mu-icon {
      //   background: linear-gradient(to right, #fea45f, #dd5d42);
      // }
      // .mu-tab-text {
      //   color: $grey6;
      // }
      // .mu-tab-link-highlight {
      //   background: linear-gradient(to right, #fea45f, #dd5d42);
      // }
    }

	}
</style>