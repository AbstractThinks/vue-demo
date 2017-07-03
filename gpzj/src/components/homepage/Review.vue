<template>
  <div id="review">
  	<mu-list-item :title="data.title|showTitle(data.sub_title)" :describeText="data.sub_title" class="header">
		<mu-avatar icon=":iconfont icon-ping" slot="leftAvatar" class="icon-review-color"/>
	</mu-list-item>
  	<mu-content-block>
		
		<div class="text-center title">{{data.datas[0].title}}</div>
		<div class="text-center desc">{{data.datas[0].create_time}}</div>
		<div class="blank10"></div>
		<div class="content" ref="reviewContent">
			<div v-html="data.datas[0].content"></div>
			<div v-html="data.datas[0].private_content"></div>
			今日观点：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬早评：指数张良不足，或校服正当上扬
			<div class="gradient-mask" ref="reviewMask"></div>
		</div>
	</mu-content-block>
	<mu-flat-button label="查看更多" @click="toggleContent()"/>
  </div>
</template>

<script>
export default {
  name: 'review',
  props: ["data"],
  methods: {
  	toggleContent() {
  		this.$refs.reviewContent.getAttribute("class").indexOf("visible") > -1 ?this.$refs.reviewContent.setAttribute("class", "content"):this.$refs.reviewContent.setAttribute("class", "content visible")
  		this.$refs.reviewMask.getAttribute("class").indexOf("hide") > -1 ?this.$refs.reviewMask.setAttribute("class", "content"):this.$refs.reviewMask.setAttribute("class", "content hide")
  	}
  },
  filters: {
    showTitle(val, val2) {
    	return `${val}·${val2}`
    }
  },

}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#review {
		.content {
			position: relative;
			height: 48px;
			transition: height 0.8s;
			overflow: hidden;
		}
		.gradient-mask {
			position: absolute;
			bottom: 0;
			height: 42px;
			width: 100%;
			background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));

		}
		.hide {
			display: none;
		}
		.content.visible {
			height: 200px;
        }

		
	}
</style>