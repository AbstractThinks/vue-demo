<template>
  <div id="comment">
  	<div v-html="content">
    </div> 
    <div v-html="private">
    </div>   
  </div>
</template>

<script>
export default {
  name: 'template',
  props: ['content','private'],
}
</script>  
<style lang="scss">
</style>