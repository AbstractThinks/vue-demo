<template>
  <div class="item">
  	<div>
  		<img src="../../assets/shoes.jpg" alt="">
  		<div class="text">
	    	$669,0
	    </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.item {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 2rem;
		/*box-shadow: 0px 13px 8px #979797;*/
		/*transform: rotate(-2deg);*/
		/*box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;*/
		/*background-origin: content-box;*/
	}
	.item:before {
		content: '';
	    z-index: -2;
	    display: block;
	    position: absolute;
	    bottom: 1em;
	    left: 0.18em;
	    width: 22%;
	    height: 20%;
	    max-height: 13em;
		box-shadow: 0px 13px 8px #979797;
		transform: rotate(-6deg);
		box-sizing: border-box;
	}
	.item:after {
		right: 0.75em;
		left: auto;
		transform: rotate(6deg);
		content: '';
		z-index: -2;
		display: block;
		position: absolute;
		bottom: 1em;
		width: 22%;
		height: 20%;
		max-height: 13em;
		box-shadow: 0px 13px 8px #979797;
	}
	.item>div {
		position: relative;
	}
	img {
		width: 100%;
		max-width: 23rem;
		min-width: 20rem;
		height: 15rem;
	}
	.text {
		position: absolute;
		left: 0.75rem;
		bottom: 0.75rem;
	}
</style>
