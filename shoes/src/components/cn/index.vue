<template>
  <div class="index">
    <appHeader></appHeader>
	<section class="container">
		<div>欢迎来到www.marchezvousblue.cn！</div>
		<router-link to="/cn/list" class="btn">进入查看</router-link>
	</section> 
	<appFooter></appFooter> 
	<div class="bg"></div>	
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
	position: relative;

}
.bg {
	background: url(../../assets/bg3.jpg) top right no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    opacity: 0.8;
    z-index: 99;
}
.container {
	flex: 1;
	display: flex;
	flex-direction: column;	
	padding: 6rem 3rem;
	z-index: 100;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 3rem;
	font-weight: 1rem;

}
.btn {
	margin-top: 2rem;
	color: white;
	text-decoration: none;
	padding: 0.75rem 1.75rem;
	border: 1px solid white;
	border-radius: 0.5rem;
}


</style>
