<template>
  <div id="homepageindex" class="slide-in-down">
    <mu-dialog :open="loading" dialogClass="loading">
        <mu-circular-progress :size="60" :strokeWidth="5"/>
    </mu-dialog>
    <div>
      <appReview></appReview>
      <appThreestock></appThreestock>
      <appStock></appStock>
      <appStock></appStock>
      <appStrategy></appStrategy>
      <appStrategy></appStrategy>
      <appExtension></appExtension>
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
      &>.mu-content-block {
        
        .header {
            .mu-item {
                padding-left: 40px;
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
          }
          .mu-item-text {
            font-size: 12px;
          }

      }
      &>button {
        background: $grey14;
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
      }
      &>button {
        background: $grey14;
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
        }
        .mu-item {
          padding: 0px;
        }
      }
      &>button {
        background: $grey14;
      }
    }
	
}
</style>