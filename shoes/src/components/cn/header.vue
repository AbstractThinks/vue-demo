<template>
  <div class="header">
    <div class="content">
    	<div>www.marchezvousblue.cn</div>
    	<div>
    		<a href="">中文</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a href="">英文</a>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
	padding: 3rem;
	font-size: 2rem;
	/*color: white;*/
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
a,
a:active,
a:hover {
 text-decoration: none;
/* color: white;
*/}
</style>
