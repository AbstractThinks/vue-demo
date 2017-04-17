<template>
  <div id="advertisement">
    <div class="blank20"></div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
	  <mu-tab value="tab1" icon="phone" title="RECENTS"/>
	  <mu-tab value="tab2" icon="favorite" title="FAVORITES"/>
	  <mu-tab value="tab3" icon="person_pin" title="NEARBY"/>
	</mu-tabs>
	<div v-if="activeTab === 'tab1'">
		<h2>Tab One</h2>
		<p>
		这是第一个 tab
		</p>
	</div>
	<div v-if="activeTab === 'tab2'">
		<h2>Tab Two</h2>
		<p>
		这是第二个 tab
		</p>
	</div>
	<div v-if="activeTab === 'tab3'">
		<h2>Tab Three</h2>
		<p>
		这是第三个 tab
		</p>
	</div>
    <div class="blank20"></div>
  </div>
</template>

<script>
export default {
  name: 'advertisement',
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>  
<style lang="scss">
</style>