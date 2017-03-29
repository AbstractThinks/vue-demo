<template>
	<div>
		<div>{{ count }}</div>
		<div>{{ test }}</div>
		<button @click="_addNum">_handleClick</button>
	</div>
</template>
<script>
	export default {
		name: "vuexTutorial",
		computed: {
			count () {
				return this.$store.state.count;
			},

			test () {
				console.log(2);
				return 2;
			}
		},
		methods:{
			_addNum: function () {
				this.$store.commit('increment');
			}
			
		}

	}
</script>