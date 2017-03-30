<template>
  <div id="index">
  	<mu-content-block>
  		<mu-paper class="paper" :zDepth="5">
  			<mu-content-block>
  			<mu-flexbox>
  				<mu-flexbox-item class="flex-item">
  					<router-link :to="{ name: 'hot'}">
  						<div>
  							<mu-icon value="home"/>
  						</div>
  						<div>
  							热点追击
  						</div>
  					</router-link>
  				</mu-flexbox-item>
  				<mu-flexbox-item class="flex-item">
  					<router-link :to="{ name: 'hot'}">hot</router-link>
  				</mu-flexbox-item>
  				<mu-flexbox-item class="flex-item">
  					<router-link :to="{ name: 'hot'}">hot</router-link>
  				</mu-flexbox-item>
  			</mu-flexbox>
  			</mu-content-block>
  		</mu-paper>
	</mu-content-block>
  </div>
  
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
	#index .flex-item{
		text-align: center;
	}
</style>