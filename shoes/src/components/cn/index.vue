<template>
  <div class="index">
    <appHeader ></appHeader>
	<section class="container">
		<div class="container2">
			<a href="">进入</a>
		</div>
		
	</section> 
	<appFooter></appFooter> 	
  </div>
</template>

<script>
import Header from '@/components/cn/header';
import Footer from '@/components/cn/footer';
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      appHeader: Header,
      appFooter: Footer,

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
}
.container {
	flex: 1;
	display: flex;
	flex-direction: row;	
	padding: 6rem 3rem;
	

}
.container2 {
	flex: 1;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
	font-size: 2rem;
	padding: 6rem 3rem;
	background: url(../../assets/bg2.jpg) no-repeat fixed top;
	background-size: contain;
}



</style>
