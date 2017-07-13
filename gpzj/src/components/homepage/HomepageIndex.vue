<template>
  <div id="homepageindex" class="slide-in-down">
    <mu-dialog :open="loading" dialogClass="loading">
        <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    <div v-for="(result, index) in homepageindex.results" :key="index">
      <appReview v-if="result.datas && result.datas.length > 0 && result.keyword == 'minfo'" :data="result"></appReview>
      <appThreestock v-if="result.datas && result.datas.length > 0 && result.keyword == 'tstocks'" :data="result"></appThreestock>
      <appStock v-if="result.datas && result.datas.length > 0 && (result.keyword == 'hot' || result.keyword == 'glod')" :data="result"></appStock>
      <appStrategy v-if="result.datas && result.datas.length > 0 && (result.keyword == 'short' || result.keyword == 'plan')" :data="result"></appStrategy>
      <appExtension v-if="result.datas  && result.keyword == 'extension'" :data="result"></appExtension>
      <appAccount v-if="result.datas  && result.datas.length > 0 && result.keyword == 'account'" :data="result"></appAccount>
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
    &>div{
      margin-top: 10px;
    }
    &>div>div {
      background: $white;
      
      color: $grey8; 
      font-size: 14px;
      &>.mu-flat-button {
        width: 100%;
      }
        
      .header {
          &>a,
          &>div{
            padding-right: 16px;
            padding-left: 16px;
          }
          .mu-item {
              padding-top: 8px;
              padding-bottom: 8px;
              padding-left: 40px;
              .mu-icon {
                font-size: 20px;
                margin-top: 4px;
              }
              .mu-item-title {
                  font-size: 12px;
                  color: $grey8;
                  font-weight: bolder; 
              }
              .mu-item-text {
                  font-size: 12px;
                  color: $grey7; 
              }
              .mu-item-left {
                  left: 0px;
                  height: 90%;
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
      .content.auth {
        &>a>div>.mu-item {
          padding-left: 40px;
        }
      }
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

      &>a.mu-flat-button {
        background: $grey14;
        color: $grey9;
        // margin-bottom: -8px;
      }
      .authentication {
        .mu-item-title {
          color: $blue;
        }
        color: $blue;
      }
      .authentication.decoration {
        .mu-item-title {
          text-decoration: underline;
        }
      }
      .mu-flexbox .mu-flexbox-item {
        width: auto;
      }
      .footer {
        .mu-item {
          background: $grey14;
          text-align: center;
          padding: 8px 16px;
          min-height: 36px;
          .mu-item-title {
            text-align: center;
            font-size: 14px;
            // color: $blue;
            color: $grey9;
          }
        }
        
      }
    }

    #strategy {
      .content {

        .mu-item.show-left {
            padding-left: 112px;
            padding-right: 16px;
        }
        .mu-item-left {
          left: 56px;
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
          font-size: 13px;
          margin-top: 8px;
        }
      }
      &>.mu-content-block {
        margin-top: -16px;
      }
      &>.footer {
        .mu-item {
          background: $grey14;
          padding: 8px 16px;
          min-height: 36px;
          .mu-item-title {
            text-align: center;
            font-size: 14px;
            // color: $blue;
            color: $grey9;
          }
        }
        
      }
      
    }

    #extension {
      position: relative;
      .container {
        &>div>div>.mu-item,
        &>a>div>.mu-item {
          padding: 0px;
        }
      }
      .header {
        .mu-item-title {
          color: $white;
        }
      }
      .img-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        img {
          width: 100%;
          height: 100%;
        }
        
      }
      .content { 
        padding-left: 56px;
        .mu-item {
          padding: 0px;
          padding-right: 16px;
        }
        .mu-item-title {
          font-size: 20px;
          color: $white;
        }
        .mu-item-text {
          font-size: 12px;
          color: $white;
        }
        button {
          border: 1px solid $white;
          color: $white;
          border-radius: 24px;
          min-width: 80px;
          height: 24px;
          line-height: 22px;
          .mu-flat-button-label {
            padding-right: 8px;
            padding-left: 8px;
          }
        }

      }
      &>button {
        background: $grey14;
      }
    }
    #stock {
      .content {
        // padding-left: 40px;
        .mu-item-title {
          font-size: 20px;
          color: $grey8;
        }
        .mu-item-text {
          color:$red7;
          margin-top: 8px;
        }
        .mu-item {
          padding-left: 56px;
        }
      }
      &>.footer {
        .mu-item {
          background: $grey14;
          padding: 8px 16px;
          min-height: 36px;
          .mu-item-title {
            text-align: center;
            font-size: 14px;
            color: $grey9;
          }
        }
        
      }
    }
    #threestock {
      .mu-content-block {
        text-align: center;
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
        margin: 0px;
        font-weight: initial;
      }
      .yesterday {
        font-size: 16px;
        display: flex;
        justify-content: center;

        // &>div {
        //   max-width: 400px;
        // }

        .mu-item {
          padding: 0px 16px;
          min-height: 24px;

        }
      }
    }
    #review {
       &>button {
        // background: $grey14;
        color: $blue;
      }
      .content {
        font-size: 16px;
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