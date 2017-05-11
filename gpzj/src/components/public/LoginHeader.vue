<template>
	<mu-list id="loginheader">
		<mu-list-item  afterText="点击登录" :href="href">
			<mu-icon slot="right" value=":iconfont icon-jiantou"/>
			<mu-avatar src="http://wx.hx168.com.cn/hxwwz/gaoshou/img/v4/logo-text.png" slot="leftAvatar"/>
		</mu-list-item>
	</mu-list>
</template>

<script>

export default {
  name: 'loginheader',
  data() {
    return {
      href:""
    }
  },
  mounted () {
  	this.href = `/hxwwz/rest/json/gaoshou/info/param/page/finder?${location.search}`;
  },

}
</script>  
<style lang="scss">
	#loginheader {
		&.mu-list {
			background: rgba(244, 67, 54, 0.9);
			.mu-item.show-right {
				padding-right: 28px;
			}
			.mu-item-left {
				width: 200px;
				.mu-avatar {
					width: 200px;
					border-radius: 0;
					background-color:rgba(0,0,0,0);
					img {
						border-radius: 0px;
	    				height: auto;
					}
				}
			}
			.mu-item-after {
				color: white;
			}
			.mu-item-right {
				color: white;
				width: auto;
				.mu-icon {
					font-size: 16px;
					padding-top: 4px;
				}
			}
		}
		
	}
</style>