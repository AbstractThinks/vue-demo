<template>
  <div class="list">
    <appHeader></appHeader>
    <div class="line"></div>
    <div class="container">
    	<div>
    		<appItem v-for="(item, index) in items" :key="index"></appItem>
    	</div>	
    </div>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from '@/components/cn/header';
import Footer from '@/components/cn/footer';
import Item from '@/components/cn/item';
export default {
  name: 'list',
  data () {
    return {
      items: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      appHeader: Header,
      appFooter: Footer,
      appItem: Item

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
	width: 100%;
	display: flex;
	flex-direction: column;
}
.container {
	flex: 1;
	display: flex;
	margin: 3rem;
	flex-wrap: wrap;

}
.container>div {
	margin: 3rem;
	flex: 1;
	display: flex;
	width: 100%;
	min-height: 100%;
	flex-wrap: wrap;
	justify-content: space-around;

}
.line {
	width: 100%;
	height: 8px;
	background: repeating-linear-gradient(to left, #ace 5%, #f96 40%);
}
</style>
