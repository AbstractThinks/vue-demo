<template>
  <div id="review">
  	<mu-list-item :title="data.title|showTitle(data.sub_title)" :describeText="data.datas[0].format_time" class="header" :disabled="true">
		<mu-avatar :icon="data.icon" slot="leftAvatar" class="icon-review-color"/>
	</mu-list-item>
  	<mu-content-block>
		
		<div class="text-center title">{{data.datas[0].title}}</div>
		<div class="blank10"></div>
		<div class="content" ref="reviewContent">
			<div v-html="data.datas[0].content"></div>
			<div v-html="data.datas[0].private_content"></div>
			<div class="gradient-mask" ref="reviewMask"></div>
		</div>
	</mu-content-block>
	<mu-flat-button @click="toggleContent()">
		查看更多 <mu-icon :value="iconContent" />
	</mu-flat-button>
  </div>
</template>

<script>
export default {
  name: 'review',
  data() {
    return {
      iconContent:":iconfont icon-unfold",
    }
  },
  props: ["data"],
  methods: {
  	toggleContent() {
  		if (this.$refs.reviewContent.getAttribute("class").indexOf("visible") > -1) {
  			this.$refs.reviewContent.setAttribute("class", "content")
  			this.$refs.reviewContent.style.height = "96px";
  			this.iconContent = ":iconfont icon-unfold";
  			
  		} else {
  			this.$refs.reviewContent.setAttribute("class", "content visible")
  			this.$refs.reviewContent.style.height = this.$refs.reviewContent.scrollHeight+"px";
  			this.iconContent = ":iconfont icon-fold";
  		}
  		this.$refs.reviewMask.getAttribute("class").indexOf("hide") > -1 ?this.$refs.reviewMask.setAttribute("class", "gradient-mask"):this.$refs.reviewMask.setAttribute("class", "gradient-mask hide")
  	}
  },
  filters: {
    showTitle(val, val2) {
    	return `${val}·${val2}`;
    },
    showDate: function(val) {
        let date = new Date(val);
        let str = val?`${date.getMonth()+1}月${date.getDate()}日`:'';
        return str;
        
    },
  },

}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#review {
		.content {
			position: relative;
			height: 96px;
			transition: height 0.5s;
			overflow: hidden;
		}
		.gradient-mask {
			position: absolute;
			bottom: 0;
			height: 96px;
			width: 100%;
			background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));

		}
		.hide {
			display: none;
		}
		button {
			.mu-icon {
				font-size: 16px;
				margin-left: 4px;
			}
		}
		

		
	}
</style>