<template>
  <div class="header">
    <div class="content">
    	<router-link to="/cn/index">www.marchezvousblue.cn</router-link>
    	<div>
    		<router-link to="/cn/index">中文</router-link>&nbsp;&nbsp;/&nbsp;&nbsp;<router-link to="/en/index">英文</router-link>
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
.header {
	z-index: 100;
}
.content {
	padding: 3rem;
	font-size: 2rem;
	color: black;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
a,
a:active,
a:hover {
 text-decoration: none;
 color: black;
}
</style>
