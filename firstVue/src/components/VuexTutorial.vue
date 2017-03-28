<template>
	<div>
		<div>{{ count }}</div>
	</div>
</template>
<script>
	export default {
		name: "vuexTutorial",
		store,
		computed: {
			count () {
				return store.state.count
			}
		}

	}
</script>