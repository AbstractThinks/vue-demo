<template>
  <div id="advertisement">
    <!-- <div class="blank20"></div> -->
    
	<mu-content-block>
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab :value="item.tabValue" :icon="item.icon" :title="item.name" v-for="(item, index) in advertises.columnHeader" :key="index"/>
		</mu-tabs>
			<mu-list  v-for="(list, index) in advertises.columnContent" v-if="activeTab === list.tabValue" :key="index" class="flip-in-x">
				<a :href="item.url" v-for="(item, index) in list.lists" :key="index">
					<div class="mu-item show-left show-right" >
						<div class="mu-item-left">
							<div class="mu-avatar">
								<div class="mu-avatar-inner">
									<img :src="item.iconUrl" /> 
								</div>
							</div> 
						</div> 
						<div class="mu-item-content item-list-content">
							<div class="mu-item-title-row">
								<div class="mu-item-title" v-html="item.title"></div> 
							</div> 
							<div class="mu-item-text" v-html="item.describeText"></div> 
						</div>
						<div class="mu-item-right mu-badge-container">
							<mu-badge :content="item.btnText"  :primary="item.primary" :secondary="item.secondary"/>
						</div>
					</div>
				</a>
			</mu-list>
	</mu-content-block>

	<mu-content-block>
		<a :href="advertises2.href">
			<img :src="advertises2.img" class="image">
		</a>
    </mu-content-block>
  </div>
</template>

<script>
import api from '../../api/api';
import Bus from '../../api/Bus';
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';

// import { advertises } from '../../api/advisment';
export default {
  name: 'advertisement',
  data () {
    return {
      activeTab: 'tab1',
      advertises: {} ,
      advertises2: {
      	href: "",
      	img: ""
      },
    }
  },
  computed: mapState({
    userinfo: state => state.user.userinfo,
  }),
  mounted () {
  	let that = this;
  	api.get(
  		'hxwwz/rest/json/gaoshou/commfunc/param/funcId/98020505?p_operator=F&p_name=xgsg_ad_banner_code',
  		function (data) {
  			let obj = eval('(' + data + ')');
  			if (obj.firstData && obj.firstData.desc) {
  				that.advertises = JSON.parse(obj.firstData.desc)
  			}
  		},
  		function (data) {
  			console.error(data)
  		}

  	)

  	Bus.$on('initAdvertisement', function () {
  		let user = JSON.parse(JSON.stringify(that.userinfo));
  		let requrl = user.firstData.capital_account == 1?"gpzj/api/v1.0/info/views/wx_article_ad/1":"gpzj/api/v1.0/info/views/wx_article_ad/2";	
	  	
	  	api.get(
	  		requrl,
	  		function (data) {
	  			let obj = data;
	  			obj.results[0].list[0].link
	  			obj.results[0].list[0].img
	  			that.advertises2 = {
		  			href:obj.results[0].list[0].link,
		  			img:obj.results[0].list[0].img
		  		}
	  		},
	  		function (data) {
	  			console.error(data)
	  		}

	  	)
	})
  	
  },
  methods: {
  	handleTabChange (val) {
      this.activeTab = val
    },
  },
  watch: {
  }

}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#advertisement {
		.mu-content-block {
			// padding:0px;
			padding-top: 24px;
			padding-right: 16px;
			padding-left: 16px;
			overflow: hidden;

		}
		.mu-badge-secondary {
			background-color:$info; 
		}
		.image {
			width: 100%;
		}
		.mu-tabs {
			background-color: $grey2;
		}
		.mu-tab-text {
			color:$grey8
		}
		.mu-tab-link.mu-tab-active {
			background-color: $info;
			.mu-tab-text {
				color:$white
			}
		}
		.mu-tab-link-highlight {
			display: none;
		}
		.mu-badge-primary {
			background-color: $red;
		}
		.mu-badge {
			padding: 8px;
			border-radius: 0px;
		}
		
		.tab-content {
			// height:0;
			// // height: auto;
			// transition: all 2s;
		}
		.mu-list {
			transition: all 2s;
		}
		
		
		
	}
</style>