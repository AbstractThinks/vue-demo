<template>
  <div id="homepage">
    
    <appHomepageIndex v-if="bottomNav == 'index'"></appHomepageIndex>
    <appHomepageMine v-if="bottomNav == 'mine'"></appHomepageMine>
    <div class="blank80"></div>
    <mu-paper class="mu-bottom-paper">
	    <mu-bottom-nav :value="bottomNav" @change="handleChange">
	      <mu-bottom-nav-item value="index" title="股票专家" icon=":iconfont icon-jiantou"/>
	      <mu-bottom-nav-item value="mine" title="我的" icon=":iconfont icon-jiantou"/>
	    </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
import HomepageIndex from '@/components/homepage/HomepageIndex';
import HomepageMine from '@/components/homepage/HomepageMine';
export default {
  name: 'homepageindex',
  data () {
    return {
      bottomNav: 'index',
    }
  },
  components: {
      appHomepageIndex:HomepageIndex,
      appHomepageMine: HomepageMine

  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#homepage {
		width: 100%;
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		position: relative;
		.mu-bottom-paper {
			position: fixed;
			bottom: 0;
			width: 100%;
		}

	}
</style>