<template lang="pug">
  div(
    id="q-app"
    )
    router-view
</template>

<script>
export default {
  name: 'App',
	created(){
		console.log(
			`%cWant to be developer friends? Send me a message either on twitter @lopuai or nikolaj@alopu.com\nI don't have m/any developer friends, I live in Melbourne, Australia, really into things, graphs, and UI's :)`,
			"background: #1B2327 ; color: #FFC14C"
			)
	}
}
</script>

<style lang="sass">
#q-app
	max-width: 100vw
	overflow: hidden
</style>
