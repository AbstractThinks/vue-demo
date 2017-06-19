<template>
  <div id="homepageindex">
    <mu-dialog :open="loading" dialogClass="loading">
        <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    

    <div v-for="(result, index) in homepageindex.results" :key="index">
    
            <mu-list-item class="content-header" v-if="result.datas && result.datas.length > 0 && result.keyword == 'infos'" :href="_filterGetUrl2(result.datas[0].type, result.datas[0].wxbh)">
                <mu-flexbox align="center">
                    <mu-flexbox-item class="header-brand" grow="0">
                        <div class="text-center info">
                            <div>{{result.datas[0].createtime|show_date}}</div>
                            <mu-badge :content="result.datas[0].type_name" class="info"/>
                        </div>
                    </mu-flexbox-item>
                    <mu-flexbox-item class="">
                        <div class="text-ellipsis">{{result.datas[0].wxbt}}</div>
                    </mu-flexbox-item>
                    <mu-flexbox-item grow="0" class="item-icon">
                        <mu-icon value=":iconfont icon-jiantou"  />
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-list-item>
   
        
        <mu-list-item class="content-card-stock text-center" :disabled="true" v-if="result.keyword == 'tstocks'">
            <div>
                <div class="title">{{result.title}}</div>
            </div>
            
            <mu-badge :content="result.sub_title" class="title-badge"/>
            <div class="blank10"></div>
            <mu-divider/>
            <div class="blank10"></div>
            <h6>{{result.datas[0].create_time|show_date}} 8:25前发布</h6>
            <div v-html="result.datas[0].sremark"></div>
            <mu-raised-button label="点击查看个股"  class="info-raised-btn" @click="showStockList" v-if="!showStock"/>
            <div class="blank10"></div>
            <mu-dialog :open="dialog" @close="close()" dialogClass="homepageindex-dialog">
                <h4 class="text-center color-blue">华西证券开户用户可免费查看</h4>
                <div class="font14">本内容仅对在<span class="color-red">“华西证券”</span>开户并在股票专家内认证后的用户进行免费查看。</div>
                <div class="blank10"></div>
                <div class="font14">如需查看该内容请先开立<span class="color-red">“华西证券”</span>账户</div>
                <div class="blank20"></div>
                <mu-divider/>
                <mu-flexbox :gutter="0">
                    <mu-flexbox-item>
                        <mu-list-item href="/hxwwz/rest/json/gaoshou/info/param/page/hxlogin" class="homepageindex-dialog-button text-center color-blue">
                            已有账户去认证
                        </mu-list-item>
                    </mu-flexbox-item>
                    <mu-flexbox-item grow="0" class="vertical-item">
                        <div class="vertical-border"></div>
                    </mu-flexbox-item>
                     <mu-flexbox-item>
                        <mu-list-item href="/hxwwz/rest/json/gaoshou/info2/param/page/hxaccount" class="homepageindex-dialog-button text-center color-red">
                            立即手机开户
                        </mu-list-item>
                    </mu-flexbox-item>
                </mu-flexbox>
                
            </mu-dialog>
            <h6 v-if="showStock">开户用户及适当性匹配用户</h6>
            <h6 v-if="showStock">目前免费查看以下内容</h6>
            <mu-list v-if="showStock">
                <mu-list-item v-for="item in result.datas[0].stocks" :key="item.id" class="text-center rise" :href="_filterGetUrl(item.stock_code, item.stockarea)">
                  {{item.stock_name}}({{item.stock_code}})
                </mu-list-item>
                    <div class="blank10"></div>
                  <h6 class="text-center warning">以上个股不做推荐，仅供参考</h6>
                  <h6 class="text-center warning">股市有风险，投资须谨慎</h6>
                  <h6 class="text-indent text-left warning">风险提示：投资者请按照自身的股票操作能力谨慎参考以上内容，在股票投资中养成严格执行止损、止盈操作的习惯（短线操作通常止损止盈线为±3%），如不严格执行止损、止盈可能会造成较大亏损的风险。</h6>
                
            </mu-list>
            <mu-list-item class="info yesterday-btn" @click="toggleHistory()">
                查看历史表现回顾
            </mu-list-item>
           
            <mu-list class="yesterday zoom-in" v-if="toggleHistoryShow">
                <mu-dialog :open="dialogRule" @close="closeRule()" dialogClass="homepageindex-dialog">
                    <h4 class="text-center color-blue">统计规则</h4>
                    <mu-content-block class="color-grey7">
                      <p> 按照股票发布日的开盘价对比发布后近{{result.datas[0].daterangelen}}交易日的最高价，统计最大涨幅。（如果发布日开盘价为近{{result.datas[0].daterangelen}}交易日最高价，统计最大涨幅将为0%）</p>
                      <div class="blank10"></div>
                    </mu-content-block>
                    <mu-divider/>
                    <mu-list-item class="homepageindex-dialog-button text-center color-blue" @click="closeRule()">
                        我知道了
                    </mu-list-item>
                    <!-- <mu-raised-button label="我知道了" fullWidth @click="closeRule()" primary/> -->
                </mu-dialog>
                <mu-list-item @click="openRule()">
                    <h6 class="text-center">{{result.datas[0].dateintbefore|show_date2}}发布个股近交易{{result.datas[0].daterangelen}}日最大涨幅 <mu-icon value=":iconfont icon-tishi"/></h6>
                    <h6 class="text-center">往期回顾不代表未来收益</h6>
                </mu-list-item>
                <div class="blank10"></div>
                <mu-list-item :class="subResult.profit_rate|show_stock_status" v-for="(subResult, index) in result.datas[0].yesterday" :key="index" :href="_filterGetUrl(subResult.stock_code, subResult.stockarea)">
                  <mu-row gutter >
                    <mu-col width="55" tablet="60" desktop="60" class="text-left">
                      {{subResult.stock_name}}（{{subResult.stock_code}}）
                    </mu-col>
                    <mu-col width="20" tablet="15" desktop="15" class="text-right">
                      {{subResult.profit_rate|show_status}}
                    </mu-col>
                    <mu-col width="25" tablet="25" desktop="25" class="text-right">
                      {{subResult.profit_rate|show_num}}
                    </mu-col>
                  </mu-row>
                </mu-list-item>
                
                  <h6 class="text-center tip">数据统计至收盘后</h6>
                  <h6 class="text-center tip">回顾股票现在已失去参考意义</h6> 
              </mu-list>

        </mu-list-item>
        <mu-card class="content-card" v-if="result.keyword == 'hot' || result.keyword == 'glod'">
          <mu-card-header class="text-center">
            <div>
                <div class="title">{{result.title}}</div>
            </div>
            
            <mu-badge :content="result.sub_title" class="info title-badge"/>
          </mu-card-header>
          <a :href="result.detail_link">

          <mu-card-media :title="result.datas.length>0?result.datas[0].wxbt:''" titleClass="text-ellipsis" :subTitle="result.datas.length>0?result.datas[0].wxzy:''" subTitleClass="text-ellipsis">
            <img :src="result.img" />
          </mu-card-media>
          </a>
          <mu-card-title  :subTitle="result.datas.length>0?result.datas[0].create_date+'发布   阅读量 '+result.datas[0].browse_num:''"/>
          <mu-card-text>
            <mu-list-item class="info content-card-btn" :href="result.link">
                {{result.keyword|show_btn_word}}
                <mu-icon slot="right" value=":iconfont icon-jiantou"  />
            </mu-list-item>
          </mu-card-text>
        </mu-card>
        <mu-flexbox v-if="result.keyword == 'strategy'">
            <mu-flexbox-item class="content-card-line" v-for="(subResult, index) in result.datas" :key="index">
                <div v-if="subResult.keyword == 'short'">
                    <mu-list-item :disabled="true" class="text-center">
                        <div class="title">{{subResult.title}}</div>
                    </mu-list-item>
                    <mu-divider/>
                    <mu-list-item :href="subResult.detail_link">
                        <mu-flexbox align="center">
                            <mu-flexbox-item>
                                <div class="line-title">{{subResult.datas.length>0?subResult.datas[0].name:""}}</div>
                                <!-- <div class="follow">{{subResult.datas.length>0?subResult.datas[0].viewcount:""}}人已关注</div>  -->
                            </mu-flexbox-item>
                            <mu-flexbox-item class="text-center" v-if="subResult.datas.length > 0">
                                <div class="blank10"></div>
                                <img :src="subResult.resource+'/'+subResult.datas[0].pic" alt="" class="circle-img ">
                                <div class="blank10"></div>
                                <!-- <img :src="_filter_img_addr(result.datas[0].pic, result.resource)" alt="" class="circle-img "> -->
                            </mu-flexbox-item>
                        </mu-flexbox>
                         <mu-row>
                            <mu-col width="50" tablet="50" desktop="50" class="text-left ">
                                <div class="grey">30日笔均</div>
                                <div :class="subResult.datas[0].profit|show_stock_status2" v-if="subResult.datas.length > 0">{{parseFloat(subResult.datas[0].profit).toFixed(2)}}%</div>
                            </mu-col>
                            <mu-col width="50" tablet="50" desktop="50" class="text-right">
                                <div class="grey">30日成功</div>
                                <div :class="subResult.datas[0].rate|show_stock_status2" v-if="subResult.datas.length > 0">{{parseFloat(subResult.datas[0].rate).toFixed(2)}}%</div>
                            </mu-col>
                        </mu-row>
                    </mu-list-item>
                    
                    <!-- <div class="blank10"></div> -->
                    <mu-divider/>
                    <mu-list-item class="info" :href="subResult.link">
                        {{subResult.remark}}
                        <mu-icon slot="right" value=":iconfont icon-jiantou"  />
                    </mu-list-item>
                </div>
                <div v-if="subResult.keyword == 'plan'">
                    <mu-list-item :disabled="true" class="text-center">
                        <div class="title">{{subResult.title}}</div>
                    </mu-list-item>
                    <mu-divider/>
                    <mu-list-item :href="subResult.detail_link">
                        <mu-flexbox align="center">
                            <mu-flexbox-item>
                                <div class="line-title">{{subResult.datas.length>0?subResult.datas[0].title:""}}</div>
                                <!-- <div class="follow">{{subResult.datas.length>0?subResult.datas[0].subscribe:""}}人已关注</div>  -->
                            </mu-flexbox-item>
                            <mu-flexbox-item class="text-center" v-if="subResult.datas.length > 0">
                                <div class="blank10"></div>
                                <img :src="subResult.resource+'/'+subResult.datas[0].pic" alt="" class="circle-img ">
                                <div class="blank10"></div>
                            </mu-flexbox-item>
                        </mu-flexbox>
                        <mu-row>
                            <mu-col width="100" tablet="100" desktop="100" class="text-left ">
                                <div class="grey">计划{{subResult.datas.length>0?subResult.datas[0].days:""}}天内</div>
                                <div :class="subResult.datas[0].profit|show_stock_status2" v-if="subResult.datas.length > 0">{{parseFloat(subResult.datas[0].profit).toFixed(2)}}%</div>
                            </mu-col>
                        </mu-row>
                    </mu-list-item>
                    <!-- <div class="blank10"></div> -->
                    <mu-divider/>
                    <mu-list-item class="info" :href="subResult.link">
                        {{subResult.remark}}
                        <mu-icon slot="right" value=":iconfont icon-jiantou"  />
                    </mu-list-item>
                </div>
            </mu-flexbox-item>
            
        </mu-flexbox>
    </div>
    
    
    <div class="blank80"></div>
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from '../../store/mutation-types';
import { shareConfig } from '../../api/wxshare';
export default {
  name: 'homepageindex',
  data() {
    return {
      loading:true,
      toggleHistoryShow: false,
      showStock: false,
      dialog: false,
      dialogRule: false,
      daterange:""
    }
  },
  computed: mapState({
    homepageindex: state => state.homepage.index,
  }),
  mounted () {
    this.initData();
        
        
  },
  components: {
      // appStock: Stock,
  },
  filters: {
    show_date: function(val) {
        let date = new Date(val.replace(/\-/g, "/"));
        let str = val?`${date.getMonth()+1}月${date.getDate()}日`:'';
        return str;
        
    },
    show_date2: function (val) {
        let str = val?`${parseInt(val.substr(-4, 2))}月${parseInt(val.substr(-2, 2))}日`:'';
        return str;
    },
    show_status: function (val) {
        let str = '';
        if (val) {
            str = parseFloat(val) > 0? '涨幅': '跌幅';
        }
        return str;
    },
    show_num: function (val) {
        let str = '';
        if (val) {
            str = parseFloat(val) > 0? `+${val}%`: `${val}%`;
        }
        return str;
    },
    show_btn_word: function (val) {
        if (val == 'hot') {
            return '查看近期热点';
        } else {
            return '查看往期金股';
        }
    }, 
    show_stock_status: function (val) {
        let str = '';
        if (parseFloat(val) > 0) {
            str = "yesterday-data up";
        } else if (parseFloat(val) < 0) {
            str = "yesterday-data fall";
        } else {
            str = "yesterday-data";
        }
        return str;
        
    },
    show_stock_status2: function (val) {
        let str = '';
        if (parseFloat(val) > 0) {
            str = "up";
        } else if (parseFloat(val) < 0) {
            str = "fall";
        } else {
            str = "flat";
        }
        return str;
        
    },

    // get_url: function(val) {
    //     if (val == '0') {
    //         return `http://wx.hx168.com.cn/hxwwz/rest/json/gaoshou/info/param/page/recommend?sd=20170614`
    //     }
    // }
  },
  methods: {
    ...mapActions({
      getHomepageIndex: types.HOMEPAGE_INDEX_ACTION,
      getUserInfo: types.USER_INFO_ACTION,
    }),
    async initData() {
        await Promise.all([this.initHomepageIndex(), this.initUser()]);
        let user = JSON.parse(JSON.stringify(this.$store.state.user.userinfo));
        this.showStock = user.firstData && user.firstData.capital_account == "1"? true: false;
        this.toggleHistoryShow = user.firstData && user.firstData.capital_account == "1"? false: true;
        // daterange = 
        shareConfig({
            title: '赶快来获取：散户炒股助手',
            desc: '华西证券股票专家为全国股民打造的炒股助手！',
            imgUrl: "http://wxtest.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-stock.png"
          }, '',user, "http://wx.hx168.com.cn/hxwwz/rest/json/gaoshou/info2/param/page/share")
        
        this.loading = false;
    },
    async initHomepageIndex() {
      await this.getHomepageIndex();
      return new Promise((resolve, reject) => { 
        resolve();
      });
    },
    async initUser() {
      await this.getUserInfo();
      return new Promise((resolve, reject) => {       
        resolve();
      });
    },
    showStockList() {
        this.dialog = true;
        
    },
    toggleHistory() {
      if (this.toggleHistoryShow) {
        this.toggleHistoryShow = false
      } else {
        this.toggleHistoryShow = true
      }
    },
    openRule () {
      this.dialogRule = true
    },
    closeRule () {
        this.dialogRule = false
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    _filterGetUrl (val1, val2) {
      return `https://trade.hx168.com.cn/v2/m/hq/#!/hq/ggStockInfo.html?stockcode=${val1}&market=${val2}&channel=1&channelid=gpzjfwh&source=gpzjfwh`;
    },
    _filterGetUrl2 (val1, val2) {
        if (val1 == '0') {
            return `/hxwwz/rest/json/gaoshou/info/param/page/recommend?sd=${val2}`;
        } else {
            return `/hxwwz/rest/json/gaoshou/info/param/page/recommend_noon?articleid=${val2}`;
        }
    }
    
  }
}
</script>  
<style lang="scss">
@import "../../assets/css/variable.scss";

.homepageindex-dialog {
    h4 {
        font-weight: normal;
    }
    .font14 {
        padding-left: 22px;
        padding-right: 22px;
        font-size: 14px;
    }
    .mu-dialog-body  {
        padding: 0px;
    }
    .homepageindex-dialog-button.color-red {
        .mu-item-content {
            color: $primary;
        }
    }
    .homepageindex-dialog-button.color-blue {
        .mu-item-content {
            color: $blue;
        }
    }
    .homepageindex-dialog-button {
        .mu-item {
            padding: 0;
        }
        .mu-item-content {
            font-size: 14px;
        }
    }
    .mu-flexbox-item.vertical-item {
        width: 1px;
        min-width: 1px;
    }
    .vertical-border {
        height: 48px;
        border-right: 1px solid rgba(0,0,0,.12);
        width: 1px;
    }
}


#homepageindex {
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	position: relative;
    width: 100%;
    height: 100%;
    background-color: $grey4;
    .content-header {
        .mu-item {
            padding: 8px;
        }
        .header-brand {
            width: 52px;
            border-right: 1px solid $grey10;
            color: $blue1;
            font-size: 12px;
            padding-right: 4px;
            .info{
                color: $blue1;
                .mu-badge {
                    color: $blue1;
                    background: $grey4;
                    border: 1px solid $blue1;
                    border-radius: 12px;
                }
            }
        }
        .mu-icon {
            font-size: 16px;
        }
        .item-icon {
            padding-top: 3px;
        }
    }

    .content-card-stock {
        background: $grey11;
        &>div>div>.mu-item{
            padding-top: 16px;
        }
        .iconfont.icon-tishi {
            color: $blue1;
            font-size: 16px;
        }
        .mu-item {
            padding: 0px 22px;
            min-height: 32px;
        }
        .sub-content {
            letter-spacing: 2px;
            color: $grey12;
        }
        .text-indent {
            text-indent: 2em;
        }
        .keyword {
            font-size: 16px;
            margin-top: 2px;
            color: $red3;
        }
        .mu-raised-button-wrapper {
            padding-left: 38px;
            padding-right: 38px;
        }
        .mu-raised-button {
            // padding-left: 38px;
            // padding-right: 38px;
            height: 40px;
            background-color: $info;
            .mu-raised-button-label {
                color: $white;
                font-size: 16px
            }
        }
        .yesterday-btn {
            .mu-item {
                min-height: 32px;
                padding: 0;
                .mu-item-content {
                    letter-spacing: 1px;
                    color:$blue1;
                }
                
            }
        }
        .yesterday-data {
            font-size: 16px;
            .mu-item {
                min-height: 32px;
                padding: 0px;
                // padding-bottom: 0px;
            }
            
        }
        .rise {
            .mu-item {
                font-size: 18px;
                color: $red5;
                min-height: 32px;
                padding: 0px;
            }
        }
        .up {
            .mu-item {
                color: $red5;
            }
            
        }
        .fall {
            .mu-item {
                color: $green;
            }
        }
        h6.tip {
            padding: 4px 0px;
        }

    }
    .content-card {
        margin-top: 10px;
        background: $grey11;
        box-shadow: none;
        .mu-card-media-title {
            
            background-color: rgba(0,0,0,0);
            .mu-card-title {
                font-size: 18px;
                color: $white;
            }
            .mu-card-sub-title {
                color: $white;
            }
        }
        .mu-card-title-container{
            padding-bottom: 0px;
            .mu-card-sub-title {
                color: grey13;
                font-size: 12px;
            }
        } 
        .mu-card-text {
            color: $blue;
            padding: 0px;
           .mu-item {
                padding-top: 2px;
                padding-bottom: 2px;
                color: $blue1;
                .mu-icon {
                    font-size: 12px;
                    color: $blue1;
                }
           }
        }
        
    }
    .content-card-line {
        margin-top: 10px!important;
        background: $grey11;
        .mu-item {
            padding-top: 0px;
            padding-bottom: 0px;
            .title {
                padding-bottom: 0px;
            }
        }
        .line-title {
            font-size: 16px;
            color: $grey8;
        }
        .up {
               font-size: 18px; 
               color: $red4;
        }
        .flat {
            font-size: 18px; 
        }
        .fall {
            font-size: 18px; 
            color: $green;
        }
        .grey {
            color: $grey9;
        }
        .circle-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .follow {
            color: $grey7;
            font-size: 12px;
        }
        .info {
            .mu-item-content {
                color: $blue1;
            }
            .mu-icon {
                padding-top: 3px;
                font-size: 16px;
                color: $blue1;
            }
        }
    }
    .title {
        position: relative;
        display: inline-block;
        color: $grey8;
        padding-bottom: 8px;
        font-size: 16px;
        letter-spacing: 6px;
        &:after {
            content:"";
            height: 1px;
            width: 4px;
            position: absolute;
            border-top: 1px solid $grey8;
            right: -7px;
            top: 13px;
        }
        &:before {
            content:"";
            height: 1px;
            width: 4px;
            position: absolute;
            border-top: 1px solid $grey8;
            left: -7px;
            top: 13px;

        }
    }
    .warning {
        color: $red6;
    }
    h6.title {
        font-size: 12px;
        letter-spacing: 0px;
        padding: 0px;
        &:after {
            right: -7px;
            top: 8px;
        }
        &:before {
            left: -7px;
            top: 8px;

        }
    }
    .title-badge {
        letter-spacing: 8px;
    }
    .mu-badge {
        color: $grey7;
        background-color: $blue2;
    }
    h6 {
        margin: 0;
        font-weight: normal;
        color: $grey7;
    }
 
	
}
</style>