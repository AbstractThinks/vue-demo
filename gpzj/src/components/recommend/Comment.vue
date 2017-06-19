<template>
  <div id="comment">
  	<mu-content-block v-html="content">
    </mu-content-block> 
    <mu-content-block v-html="private">
    </mu-content-block>   
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