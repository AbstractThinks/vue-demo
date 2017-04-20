<template>
  <div id="advertisement">
    <!-- <div class="blank20"></div> -->
    
    <mu-content-block>
    <mu-tabs :value="activeTab" @change="handleTabChange">
	  <mu-tab value="tab1" :icon="titles[0].icon" :title="titles[0].name"/>
	  <mu-tab value="tab2" :icon="titles[1].icon" :title="titles[1].name"/>
	  <mu-tab value="tab3" :icon="titles[2].icon" :title="titles[2].name"/>
	</mu-tabs>
	<div v-if="activeTab === 'tab1'">
		<mu-list>
			<mu-list-item title="Photos" describeText="Jan 9, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
			<mu-list-item title="Recipes" describeText="Jan 17, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
			<mu-list-item title="Work" describeText="Jan 28, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
		</mu-list>
	</div>
	<div v-if="activeTab === 'tab2'">
		<mu-list>
			<mu-list-item title="Photos" describeText="Jan 9, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
			<mu-list-item title="Recipes" describeText="Jan 17, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
			<mu-list-item title="Work" describeText="Jan 28, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
		</mu-list>
	</div>
	<div v-if="activeTab === 'tab3'">
		<mu-list>
			<mu-list-item title="Photos" describeText="Jan 9, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
			<mu-list-item title="Recipes" describeText="Jan 17, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
			<mu-list-item title="Work" describeText="Jan 28, 2014">
				<mu-avatar icon="folder" slot="leftAvatar"/>
				<mu-icon value="info" slot="right"/>
			</mu-list-item>
		</mu-list>
	</div>
	</mu-content-block>
    <!-- <div class="blank20"></div> -->
  </div>
</template>

<script>
const titles = [{"name":"热门服务","icon":""},{"name":"教你炒股","icon":""},{"name":"积分福利","icon":""}];
export default {
  name: 'advertisement',
  data () {
    return {
      activeTab: 'tab1',
      titles: titles
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