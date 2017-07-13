<template>
  <div id="homepage" >
    
    <appHomepageIndex v-if="bottomNav == 'index'"></appHomepageIndex>
    <appHomepageMine v-if="bottomNav == 'mine'"></appHomepageMine>
    <mu-float-button icon=":iconfont icon-gy" class="share-button" @click="toggleShareModal()"/>
    <mu-paper class="mu-bottom-paper">
	    <mu-bottom-nav :value="bottomNav" @change="handleChange">
	      <mu-bottom-nav-item value="index" title="股票专家">
          <img src="http://r0.hx168.com.cn/gpzj/img/v4/icon-home-gpzj-active.png" alt="">
        </mu-bottom-nav-item>
	      <mu-bottom-nav-item value="mine" title="我的" href="/hxwwz/rest/json/gaoshou/info/param/page/user">
          <img src="http://r0.hx168.com.cn/gpzj/img/v4/icon-home-user.png" alt="">
        </mu-bottom-nav-item>
	    </mu-bottom-nav>
    </mu-paper>
    <mu-dialog :open="shareModalToggle"  dialogClass="share-dialog text-center" >
      <header @click="toggleShareModal()">
        <div class="blank20 navbar"></div>
        <div class="blank30"></div>
        <img src="../../assets/img/homepage/share-arrow.png" alt="" class="share-arrow">
        <p>点击右上角，转发给好友</p>
      </header>
      <article @click="toggleShareModal()">
        <p class="desc">您还可以</p>
        <img  id="qrcode" />
        <p>请好友扫描二维码，帮ta注册</p>
      </article>
      
      <footer @click="toggleShareModal()">
        <p>·和ta分享投资路上的心路历程·</p>
        <img src="../../assets/img/homepage/share-logo.png" alt="" class="share-logo">
      </footer>
      
    </mu-dialog>
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import HomepageIndex from '@/components/homepage/HomepageIndex';
import HomepageMine from '@/components/homepage/HomepageMine';
// import VueQArt from 'vue-qart';
// import QArt from 'qartjs';
// import VueQr from 'vue-qr';
import AwesomeQRCode from 'awesome-qr';
export default {
  name: 'homepageindex',
  data () {
    return {
      bottomNav: 'index',
      shareModalToggle: false,
      logo: undefined,


    }
  },
  computed: mapState({
    userinfo: state => state.user.userinfo,
  }),
  components: {
      appHomepageIndex:HomepageIndex,
      appHomepageMine: HomepageMine,

  },
  mounted () {
    let logoImg = new Image();
    let that = this;
    logoImg.src = "/hxwwz/gaoshou/img/v4/logo-hx.png";
    logoImg.onload = function() {
      that.logo = logoImg;
    }
    
  },
  methods: {
    handleChange (val) {
      if (val == 'index') {
        this.bottomNav = val
      }
      
    },
    toggleShareModal() {
      let khstr = "";
      if (this.userinfo.firstData && this.userinfo.firstData.status == "2") {
        khstr = `http://wx.hx168.com.cn/hxwwz/rest/json/gaoshou/info2/param/page/share?sharetag=1&jkhid=${this.userinfo.firstData.khbh}&broker=${this.userinfo.firstData.broker_code}&package=${this.userinfo.firstData.package}&`; 
      } else {
        khstr = `http://wx.hx168.com.cn/hxwwz/rest/json/gaoshou/info2/param/page/share?${location.search}`;
      }
      this.renderQrcode(khstr)
      this.shareModalToggle?(document.getElementById("homepage").setAttribute("class","")):(document.getElementById("homepage").setAttribute("class","blur"));
      this.shareModalToggle?(this.shareModalToggle = false):( this.shareModalToggle = true);
      
    },
    renderQrcode(url){

        let that = this;
       new AwesomeQRCode().create({
            text: url,
            size: 200,
            margin: 20,
            backgroundImage:undefined ,
            logoImage: this.logo ,
            callback: function(dataURI){
                // console.log(dataURI);
            },
            bindElement: 'qrcode'
        });

    },
  }
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#homepage {
		width: 100%;
		height: 100%;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
		position: relative;
    
    .share-button {
      position: absolute;
      bottom: 160px;
      z-index: 99;
      right: 16px;
      background: $red7;
      width: 48px;
      height: 48px;
      .mu-icon{
        font-size: 18px;
      }
    }
		.mu-bottom-paper {
			position: absolute;
			bottom: 0;
			width: 100%;
		}
    .mu-buttom-item {
      img {
          width: 26px;
          height: 26px;
        }
    }
    .mu-bottom-item-active {
        
        .mu-bottom-item-icon,.mu-bottom-item-text {
             color: $info;
        }
       
    }

	}
</style>