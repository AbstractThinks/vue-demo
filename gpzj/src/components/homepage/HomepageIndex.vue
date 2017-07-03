<template>
  <div id="homepageindex" class="slide-in-down">
    <mu-dialog :open="loading" dialogClass="loading">
        <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    <div v-for="(result, index) in homepageindex.results" :key="index">
      <appReview v-if="result.datas && result.datas.length > 0 && result.keyword == 'minfo'" :data="result"></appReview>
      <appThreestock v-if="result.datas && result.datas.length > 0 && result.keyword == 'tstocks'" :data="result"></appThreestock>
      <appStock v-if="result.datas && result.datas.length > 0 && (result.keyword == 'hot' || result.keyword == 'glod')" :data="result"></appStock>
      <!-- <appStock v-if="result.datas && result.datas.length > 0 && result.keyword == 'glod'"></appStock> -->
      <appStrategy v-if="result.datas && result.datas.length > 0 && (result.keyword == 'short' || result.keyword == 'plan')" :data="result"></appStrategy>
      <!-- <appStrategy v-if="result.datas && result.datas.length > 0 && result.keyword == 'plan'"></appStrategy> -->
      <!-- <appExtension v-if="result.datas && result.datas.length > 0 && result.keyword == 'infos'"></appExtension> -->
    </div>
    <div>
      <appAccount></appAccount>
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
import Review from '@/components/homepage/Review';
import Stock from '@/components/homepage/Stock';
import Threestock from '@/components/homepage/Threestock';
import Account from '@/components/homepage/Account';
import Extension from '@/components/homepage/Extension';
import Strategy from '@/components/homepage/Strategy';
export default {
  name: 'homepageindex',
  data() {
    return {
      loading:true,
    }
  },
  computed: mapState({
    homepageindex: state => state.homepage.index,
  }),
  mounted () {
    this.initData();
        
        
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
    
    
  },
  components: {
    appReview: Review,
    appStock: Stock,
    appThreestock: Threestock,
    appExtension: Extension,
    appAccount: Account,
    appStrategy: Strategy
  },
  filters: {
    
  },
  
}
</script>  
<style lang="scss">
@import "../../assets/css/variable.scss";


#homepageindex {
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	position: relative;
    width: 100%;
    height: 100%;
    background-color: $grey;
    margin-top: -10px;
    &>div.blank80 {
      background-color: $grey;
    }
    
    &>div>div {
      background: $white;
      margin-top: 10px;
      color: $grey8; 
      font-size: 14px;
      &>.mu-flat-button {
        width: 100%;
      }
        
      .header {
          &>div{
            padding-right: 16px;
            padding-left: 16px;
          }
          .mu-item {
              padding-left: 40px;
              .mu-icon {
                font-size: 20px;
              }
              .mu-item-title {
                  font-size: 12px;
                  color: $grey8; 
              }
              .mu-item-text {
                  font-size: 12px;
                  color: $grey7; 
              }
              .mu-item-left {
                  left: 0px;
                  .mu-avatar {
                      height: 32px;
                      width: 32px;
                      border-radius: 4px;  
                  }

              }
              .mu-item-right {
                right: 0px;
              }
          }
        .title {
            font-size: 18px;
            color: $grey8; 
        }
        .desc {
            font-size: 12px; 
            color: $grey9; 
        }
      }
      
    }
    #account {
      .content {
          &>div>div>.mu-item {
            padding-left: 40px;
          }
          .mu-item {
            padding: 0px;
          }
          .mu-item-title {
            font-size: 20px;
            color: $grey8;
          }
          .mu-item-text {
            font-size: 12px;
            color:$grey7;
          }

      }
      &>button {
        background: $grey14;
        color: $grey9;
      }
      
    }

    #strategy {
      .content {
        padding-left: 40px;
        .mu-item-left {
          left: 0px;
          width: 48px;
          .mu-avatar {
            height: 48px;
            width: 48px;
          }
          
        }
        .mu-item-title {
          color: $grey8;
        }
        .mu-item-text {
          color: $grey7;
        }
      }
      &>button {
        background: $grey14;
        color: $blue;
      }
      
    }

    #extension {
      .content { 
        padding-left: 40px;
        .mu-item {
          padding: 0px;
        }
        .mu-item-title {
          font-size: 20px;
        }
        .mu-item-text {
          font-size: 12px;
        }
        button {
          border: 1px solid $white;
        }
      }
      &>button {
        background: $grey14;
      }
    }
    #stock {
      .content {
        padding-left: 40px;
        .mu-item-title {
          font-size: 20px;
          color: $grey8;
        }
        .mu-item-text {
          color:$red7;
        }
        .mu-item {
          padding: 0px;
        }
      }
      &>button {
        background: $grey14;
        color: $grey9;
      }
    }
    #threestock {
      .mu-content-block {
        .mu-raised-button {
          padding: 16px 16px;
          border-radius: 24px;
          height: 40px;
          line-height: 40px;
        }
      }
      &>button {
        background: $grey14;
        color: $grey9;
      }
      .tip {
        color: $grey7;
      }
    }
    #review {
       &>button {
        background: $grey14;
        color: $blue;
      }
      .title {
        font-size: 18px;
        color: $grey8;
      }
    }
    .icon-review-color {
      background-color:$red7;
    }
    .icon-threestock-color {
      background-color:$blue3;
    }
    .icon-extension-color {
      background-color:$yellow2;
    }
    .icon-hot-color {
      background-color:$red8;
    }
    .icon-gold-color {
      background-color:$yellow;
    }
    .icon-account-color {
      background-color:$blue5;
    }
    .icon-plan-color {
      background-color:$red9;
    }
	  .icon-short-color {
      background-color:$blue4;
    }
}
</style>