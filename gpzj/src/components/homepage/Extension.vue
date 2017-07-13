<template>
  <div id="extension">
  	<div class="img-container">
  		<img :src="data.img" alt="" class="banner-img">
  	</div>
  	<mu-list-item class="container" :href="data.link">
  		<mu-list-item :title="data.title" class="header" :disabled="true">
			<mu-avatar :icon="data.icon" slot="leftAvatar" class="icon-extension-color"/>
		</mu-list-item>	
		<mu-list-item :title="data.sub_title" :describeText="data.remark" class="content" :disabled="true">
			<div class="blank10"></div>
			<mu-flat-button :label="data.btn_title"/>
			<div class="blank20"></div>
		</mu-list-item>
	</mu-list-item>
  </div>
</template>

<script>
export default {
  name: 'extension',
  props: ["data"],
}
</script>  
<style lang="scss">
</style>